"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceAnalyzer = void 0;
var typescript_1 = require("typescript");
var types_1 = require("../types");
var utils_1 = require("../utils");
var SourceAnalyzer = /** @class */ (function () {
    function SourceAnalyzer(file) {
        if (file === void 0) { file = null; }
        this.file = file;
    }
    SourceAnalyzer.prototype.set_new_source = function (file) {
        this.file = file;
    };
    SourceAnalyzer.prototype.analyze = function (source_file) {
        var _this = this;
        if (source_file === void 0) { source_file = undefined; }
        if (source_file) {
            this.set_new_source(source_file);
        }
        else if (!this.file) {
            throw new Error('Cannot analyze file! Source file wasn\'t provided neither set previously.');
        }
        var class_declarations = [];
        this.file.statements.forEach(function (statement) {
            switch (statement.kind) {
                case typescript_1.SyntaxKind.ClassDeclaration:
                    class_declarations.push(_this.get_class_description(statement));
                    break;
            }
        });
        return {
            class_declarations: class_declarations,
        };
    };
    SourceAnalyzer.prototype.get_text = function (node, trim) {
        if (trim === void 0) { trim = true; }
        if (!this.file) {
            throw new Error('File is not initialized');
        }
        var sliced_string = this.file.text.slice(node.pos, node.end);
        return !trim ? sliced_string : sliced_string.trim();
    };
    SourceAnalyzer.prototype.print_r = function (nodes) {
        return this.arr_printer(nodes);
    };
    SourceAnalyzer.prototype.arr_printer = function (nodes) {
        console.log('arr_printer(): ', this.get_text(nodes));
    };
    SourceAnalyzer.prototype.print = function (x) {
        var _a = x.hasOwnProperty('length')
            ? [this.print_r, 'Print called on: NodeArray']
            : [this.printer, 'Print called on: Node'], method = _a[0], str = _a[1];
        //@ts-ignore
        (method.bind(this))(x);
    };
    SourceAnalyzer.prototype.printer = function (x, kind) {
        if (kind === void 0) { kind = ''; }
        console.log("Kind: " + (kind ? kind === '' : utils_1.get_node_type(x)), this.get_text(x));
    };
    SourceAnalyzer.prototype.get_class_description = function (class_declaration) {
        var _this = this;
        var decorators = this.analyze_decorators(class_declaration.decorators);
        var class_name = utils_1.getIdentifierName(class_declaration.name);
        var interfaces = [];
        var methods = [];
        var properties = [];
        var accessors = [];
        var base_object = {};
        class_declaration.heritageClauses && class_declaration.heritageClauses.forEach(function (e) {
            if (e.token === typescript_1.SyntaxKind.ImplementsKeyword) {
                e.types.forEach(function (implemented_interface) {
                    return interfaces.push(_this.typed_argument_analyzer(implemented_interface));
                });
            }
            else if (e.token === typescript_1.SyntaxKind.ExtendsKeyword) {
                base_object.extended_class = _this.typed_argument_analyzer(e.types[0]);
            }
        });
        class_declaration.members.forEach(function (e) {
            switch (e.kind) {
                case typescript_1.SyntaxKind.PropertyDeclaration:
                    properties.push(_this.get_property_description(e));
                    break;
                case typescript_1.SyntaxKind.MethodDeclaration:
                    methods.push(_this.get_method_description(e));
                    break;
                case typescript_1.SyntaxKind.Constructor:
                    var constructor = e;
                    methods.push({
                        name: 'constructor',
                        decorators: _this.analyze_decorators(constructor.decorators),
                        parameters: _this.analyze_parameters(constructor.parameters),
                        return_value: { type: types_1.UnifiedTypes.Object, name: class_name },
                        access_modifiers: constructor.modifiers ? _this.getModifiers(constructor.modifiers) : [],
                        comment: _this.get_jsdoc(constructor),
                    });
                    break;
                case typescript_1.SyntaxKind.GetAccessor:
                    accessors.push(_this.get_accessor_description(e, 'Get'));
                    break;
                case typescript_1.SyntaxKind.SetAccessor:
                    accessors.push(_this.get_accessor_description(e, 'Set'));
                    break;
            }
        });
        var class_description = {
            generic_types: { extends: [], type_name: "" },
            name: class_name,
            interfaces: interfaces,
            methods: methods,
            decorators: decorators,
            accessors: accessors,
            properties: properties,
        };
        return Object.assign(base_object, class_description);
    };
    SourceAnalyzer.prototype.get_property_description = function (property_node) {
        var property_description = {
            name: utils_1.getIdentifierName(property_node.name),
        };
        if (property_node.decorators) {
            property_description.decorators = this.analyze_decorators(property_node.decorators);
        }
        if (property_node.modifiers) {
            property_description.access_modifier = this.getModifiers(property_node.modifiers);
        }
        if (property_node.type) {
            property_description.type = this.analyze_type(property_node.type);
        }
        if (property_node.initializer) {
            property_description.has_initializer = true;
        }
        if (utils_1.has_jsdoc(property_node)) {
            property_description.comment = this.get_jsdoc(property_node);
        }
        return property_description;
    };
    SourceAnalyzer.prototype.get_accessor_description = function (accessor, type) {
        return {
            name: utils_1.getIdentifierName(accessor.name),
            access_modifiers: accessor.modifiers ? this.getModifiers(accessor.modifiers) : [],
            type: type,
        };
    };
    SourceAnalyzer.prototype.get_method_description = function (method) {
        var name = utils_1.getIdentifierName(method.name);
        var decorators = this.analyze_decorators(method.decorators);
        var parameters = this.analyze_parameters(method.parameters);
        var object = {
            name: name,
            decorators: decorators,
            parameters: parameters,
            access_modifiers: method.modifiers ? this.getModifiers(method.modifiers) : [],
            return_value: method.type ? this.analyze_type(method.type) : { type: types_1.UnifiedTypes.Undefined },
        };
        return object;
    };
    SourceAnalyzer.prototype.analyze_decorators = function (node_array) {
        var _this = this;
        if (!node_array) {
            return [];
        }
        return node_array.map(function (value) { return _this.get_decoration_description(value); });
    };
    SourceAnalyzer.prototype.get_decoration_description = function (decorator) {
        var _a;
        var description = {
            parameters: [],
        };
        if (decorator.expression.kind === typescript_1.SyntaxKind.Identifier) {
            description.name = decorator.expression.text;
        }
        else {
            var call_expression = decorator.expression;
            (_a = description.parameters).push.apply(_a, this.argument_parser(call_expression.arguments));
            if (call_expression.expression.kind === typescript_1.SyntaxKind.Identifier
                || call_expression.expression.kind === typescript_1.SyntaxKind.PropertyAccessExpression) {
                description.name = utils_1.getIdentifierName(call_expression.expression);
            }
        }
        return description;
    };
    SourceAnalyzer.prototype.argument_parser = function (nodes) {
        var _this = this;
        return nodes.map(function (node, index) {
            var _a = _this.get_argument_type(node), unified_type = _a[0], value = _a[1];
            return { type: { type: unified_type }, value: value, index: index };
        });
    };
    SourceAnalyzer.prototype.get_argument_type = function (node) {
        var _a;
        var type = types_1.UnifiedTypes.Unknown;
        var value = undefined;
        var set_return_values = function (t, v) {
            type = t;
            value = v;
        };
        switch (node.kind) {
            case typescript_1.SyntaxKind.Identifier: //  undefined | 'any variable'
                var name_1 = node.escapedText;
                if (name_1 === 'undefined') {
                    set_return_values(types_1.UnifiedTypes.Undefined, undefined);
                }
                else {
                    set_return_values(types_1.UnifiedTypes.Variable, { name: name_1 });
                }
                break;
            case typescript_1.SyntaxKind.NullKeyword: //  null
                set_return_values(types_1.UnifiedTypes.Null, null);
                break;
            case typescript_1.SyntaxKind.ArrowFunction: //  () => {}
                set_return_values(types_1.UnifiedTypes.Callable, this.get_text(node));
                break;
            case typescript_1.SyntaxKind.ObjectLiteralExpression: //  {}
                set_return_values(types_1.UnifiedTypes.Object, this.get_text(node));
                break;
            case typescript_1.SyntaxKind.StringLiteral: //  '2'
                set_return_values(types_1.UnifiedTypes.String, this.get_text(node));
                break;
            case typescript_1.SyntaxKind.NumericLiteral: //  3
                set_return_values(types_1.UnifiedTypes.Number, this.get_text(node));
                break;
            case typescript_1.SyntaxKind.ParenthesizedExpression: //  (() => {}) | (function (){})
                // Todo :: Try to Untangle Expression
                set_return_values(types_1.UnifiedTypes.Unknown, this.get_text(node));
                break;
            case typescript_1.SyntaxKind.FunctionExpression: //  function (){}
                var argument_value = {};
                var function_name = node.name;
                if (function_name) {
                    argument_value.functionName = utils_1.getIdentifierName(function_name);
                }
                set_return_values(types_1.UnifiedTypes.Callable, argument_value);
                break;
            case typescript_1.SyntaxKind.NewExpression: //  new A()
                var new_expression = node;
                var object_to_set = {
                    className: '<unknown>',
                    arguments: [],
                };
                if (new_expression.arguments) {
                    (_a = object_to_set.arguments).push.apply(_a, this.argument_parser(new_expression.arguments));
                }
                if (new_expression.expression.kind === typescript_1.SyntaxKind.Identifier
                    || new_expression.expression.kind === typescript_1.SyntaxKind.PropertyAccessExpression) {
                    object_to_set.className = utils_1.getIdentifierName(new_expression.expression);
                }
                else { // new (A)(); or new (() => A)();
                    console.log(utils_1.get_node_type(new_expression.expression));
                    // TODO :: Try to get ClassName
                    // this.utils((<NewExpression>y).expression);
                }
                set_return_values(types_1.UnifiedTypes.Object, object_to_set);
                break;
            case typescript_1.SyntaxKind.CallExpression: //  x() | y() // (Function)() or (const)()
                var expression = node.expression;
                set_return_values(types_1.UnifiedTypes.FunctionCall, {
                    called_function: this.get_text(expression),
                    type: utils_1.get_node_type(expression),
                });
                break;
        }
        return [type, value];
    };
    SourceAnalyzer.prototype.typed_argument_analyzer = function (element) {
        var _this = this;
        var _a;
        // TODO :: Add extension generic types
        var name = utils_1.getIdentifierName(element.expression);
        var generics = [];
        (_a = element.typeArguments) === null || _a === void 0 ? void 0 : _a.forEach(function (e, index) {
            var value = _this.generic_argument_analyzer(e);
            generics.push(Object.assign(value, { index: index }));
        });
        return {
            class_name: name,
            generics: generics,
        };
    };
    SourceAnalyzer.prototype.generic_argument_analyzer = function (e) {
        var name = '';
        if (e.kind === typescript_1.SyntaxKind.AnyKeyword) {
            name = 'any';
        }
        else if (e.kind === typescript_1.SyntaxKind.TypeReference) {
            if (e.typeName.kind === typescript_1.SyntaxKind.Identifier) { // TODO: Add Changes
                name = utils_1.getIdentifierName(e.typeName);
            }
            else if (e.typeName.kind === typescript_1.SyntaxKind.QualifiedName) {
                console.log('SyntaxKind.QualifiedName');
            }
        }
        return {
            name: name,
        };
    };
    SourceAnalyzer.prototype.analyze_type = function (node) {
        var _this = this;
        var result = { type: types_1.UnifiedTypes.Unknown }; // Any might be better?
        switch (node.kind) {
            case typescript_1.SyntaxKind.UnionType: {
                var types = node.types.map(function (e) { return _this.analyze_type(e); });
                result = {
                    type: types_1.UnifiedTypes.Union,
                    types: types,
                };
                break;
            }
            case typescript_1.SyntaxKind.UndefinedKeyword:
                result = {
                    type: types_1.UnifiedTypes.Undefined,
                };
                break;
            case typescript_1.SyntaxKind.AnyKeyword:
                result = {
                    type: types_1.UnifiedTypes.Any,
                };
                break;
            case typescript_1.SyntaxKind.IntersectionType: {
                var types = node.types.map(function (e) { return _this.analyze_type(e); });
                result = {
                    type: types_1.UnifiedTypes.Intersection,
                    types: types,
                };
                break;
            }
            case typescript_1.SyntaxKind.TypeReference:
                result = {
                    type: types_1.UnifiedTypes.Object,
                    name: utils_1.getIdentifierName(node.typeName)
                };
                break;
            case typescript_1.SyntaxKind.NumberKeyword:
                result = {
                    type: types_1.UnifiedTypes.Number,
                };
                break;
            case typescript_1.SyntaxKind.StringKeyword:
                result = {
                    type: types_1.UnifiedTypes.String,
                };
                break;
            case typescript_1.SyntaxKind.ObjectKeyword:
                result = {
                    type: types_1.UnifiedTypes.Object,
                };
                break;
            case typescript_1.SyntaxKind.LiteralType:
                //@ts-ignore
                var text = this.get_text(node.literal);
                if (text === 'null') {
                    result = {
                        type: types_1.UnifiedTypes.Null,
                    };
                }
                else {
                    result = { type: types_1.UnifiedTypes.Unknown, name: text };
                }
                break;
            case typescript_1.SyntaxKind.BooleanKeyword:
                result = {
                    type: types_1.UnifiedTypes.Boolean,
                };
                break;
            case typescript_1.SyntaxKind.VoidKeyword:
                result = {
                    type: types_1.UnifiedTypes.Void,
                };
                break;
            case typescript_1.SyntaxKind.TypeLiteral: {
                var types = node.members.map(function (e) {
                    if (e.name) {
                        return Object.assign({
                            name: _this.get_text(e.name),
                            type: types_1.UnifiedTypes.Unknown,
                        }, _this.analyze_type(e.type));
                    }
                    else {
                        // TODO :: Add extended indexing
                        //@ts-ignore
                        return {
                            name: _this.get_text(e.type),
                            type: types_1.UnifiedTypes.Array,
                            wildcard: true,
                        };
                    }
                });
                result = {
                    type: types_1.UnifiedTypes.Object,
                    types: types,
                };
                break;
            }
            case typescript_1.SyntaxKind.ArrayType: // (asd: any[])
                result = {
                    type: types_1.UnifiedTypes.Array,
                    types: [this.analyze_type(node.elementType)],
                };
                break;
            default: {
                var type = utils_1.get_node_type(node);
                console.log('typetypetypetypetype: ', type);
            }
        }
        return result;
    };
    SourceAnalyzer.prototype.analyze_parameters = function (node) {
        var _this = this;
        return node.map(function (e, index) {
            var type = e.type ? _this.analyze_type(e.type) : { type: types_1.UnifiedTypes.Unknown };
            var obj = {
                type: type,
                index: index,
                'name': _this.getParameterName(e.name),
                'decorators': _this.analyze_decorators(e.decorators),
                'has_spread': e.dotDotDotToken !== undefined,
            };
            return obj;
        });
    };
    SourceAnalyzer.prototype.getParameterName = function (s) {
        return this.get_text(s);
    };
    /**
     * Limited for the Keywords that are found in classes
     * @param node
     */
    SourceAnalyzer.prototype.getModifiers = function (node) {
        var arr = [];
        node.map(function (e) {
            switch (e.kind) {
                case typescript_1.SyntaxKind.AbstractKeyword:
                    arr.push('abstract');
                    break;
                case typescript_1.SyntaxKind.PublicKeyword:
                    arr.push('public');
                    break;
                case typescript_1.SyntaxKind.ProtectedKeyword:
                    arr.push('protected');
                    break;
                case typescript_1.SyntaxKind.PrivateKeyword:
                    arr.push('private');
                    break;
                case typescript_1.SyntaxKind.ReadonlyKeyword:
                    arr.push('readonly');
                    break;
                case typescript_1.SyntaxKind.StaticKeyword:
                    arr.push('static');
                    break;
            }
        });
        return arr;
    };
    SourceAnalyzer.prototype.analyze_jsdoc = function (method_like) {
        var _this = this;
        return method_like.map(function (jsdoc) {
            var _a;
            var tags = jsdoc.tags ? jsdoc.tags.map(function (tag) { return _this.analyze_tag(tag); }) : [];
            var comment = {
                comment: (_a = jsdoc.comment) !== null && _a !== void 0 ? _a : '',
                tags: tags,
            };
            return comment;
        });
    };
    SourceAnalyzer.prototype.analyze_tag = function (tag) {
        var _a;
        var extra_name = tag.name;
        return {
            comment: (_a = tag.comment) !== null && _a !== void 0 ? _a : '',
            tag: this.getParameterName(tag.tagName),
            extra_value: extra_name && utils_1.is_identifier(extra_name) ? this.getParameterName(extra_name) : '',
        };
    };
    SourceAnalyzer.prototype.get_jsdoc = function (node) {
        return utils_1.has_jsdoc(node) // .hasOwnProperty('jsDoc') // has_jsdoc(node)
            ? this.analyze_jsdoc(node['jsDoc'])
            : undefined;
    };
    return SourceAnalyzer;
}());
exports.SourceAnalyzer = SourceAnalyzer;
