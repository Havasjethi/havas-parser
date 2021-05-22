import {
  AccessorDeclaration,
  ArrayTypeNode,
  ArrowFunction,
  CallExpression,
  ClassDeclaration,
  ConstructorDeclaration,
  Decorator,
  EntityName,
  ExpressionWithTypeArguments,
  FunctionExpression,
  GetAccessorDeclaration,
  HeritageClause,
  Identifier,
  IndexSignatureDeclaration,
  IntersectionTypeNode,
  JSDoc,
  JSDocContainer,
  JSDocPropertyLikeTag,
  JSDocTag,
  MethodDeclaration,
  ModifiersArray,
  NewExpression,
  Node,
  NodeArray,
  ObjectLiteralExpression,
  ParameterDeclaration,
  ParenthesizedExpression,
  PropertyAccessExpression,
  PropertyDeclaration,
  ReadonlyTextRange,
  SetAccessorDeclaration,
  SourceFile,
  StringLiteral,
  SyntaxKind,
  TypeLiteralNode,
  TypeNode,
  TypeReferenceNode,
  UnionTypeNode
} from "typescript";
import {
  AccessorDescription,
  ArgumentDescription,
  ClassDescription,
  ClassExtender,
  DecoratorDescription,
  FileDeclarations,
  JsDocCommentDescription,
  MethodDescription,
  ParameterDescription,
  PropertyDescription,
  TagDescription,
  TypeDescription,
  UnifiedModifier,
  UnifiedTypes,
} from "../types";
import { get_node_type, getIdentifierName, has_jsdoc, is_identifier } from "../utils";

export class SourceAnalyzer {

  constructor(public file: SourceFile | null = null) { }

  set_new_source (file: SourceFile) {
    this.file = file;
  }

  public analyze(source_file: SourceFile | undefined = undefined): FileDeclarations {
    if (source_file) {
      this.set_new_source(source_file);
    } else if (!this.file) {
      throw new Error('Cannot analyze file! Source file wasn\'t provided neither set previously.')
    }

    const class_declarations: ClassDescription[] = [];

    this.file!.statements.forEach(statement => {
      switch (statement.kind) {
        case SyntaxKind.ClassDeclaration:
          class_declarations.push(this.get_class_description(<ClassDeclaration> statement));
          break;
      }
    });

    return {
      class_declarations,
    }
  }

  get_text(node: ReadonlyTextRange, trim: boolean = true) {
    if (!this.file) {
      throw new Error('File is not initialized');
    }
    const sliced_string = this.file.text.slice(
      node.pos,
      node.end
    );
    return !trim ? sliced_string : sliced_string.trim();
  }

  print_r(nodes: NodeArray<Node>) {
    return this.arr_printer(nodes);
  }

  arr_printer(nodes: NodeArray<Node>) {
    console.log(
      'arr_printer(): ',
      this.get_text(nodes)
    );
  }

  print (x: Node | NodeArray<Node>) {
    const [method, str] = x.hasOwnProperty('length')
      ? [this.print_r, 'Print called on: NodeArray']
      : [this.printer, 'Print called on: Node'];

    //@ts-ignore
    (method.bind(this))(x);
  }

  printer(x: Node, kind: string = '') {
    console.log(
      `Kind: ${kind ? kind === '' : get_node_type(x)}`,
      this.get_text(x)
    )
  }

  get_class_description(class_declaration: ClassDeclaration): ClassDescription {
    const decorators = this.analyze_decorators(class_declaration.decorators);
    const class_name = getIdentifierName(class_declaration.name);
    const interfaces: ClassDescription["interfaces"] = [];
    const methods: ClassDescription["methods"] = [];
    const properties: PropertyDescription[] = [];
    const accessors: ClassDescription["accessors"] = [];
    const base_object: any = {};

    class_declaration.heritageClauses && class_declaration.heritageClauses.forEach((e: HeritageClause) => {
      if (e.token === SyntaxKind.ImplementsKeyword) {
        e.types.forEach(implemented_interface =>
          interfaces.push(this.typed_argument_analyzer(implemented_interface))
        );
      } else if (e.token === SyntaxKind.ExtendsKeyword) {
        base_object.extended_class = this.typed_argument_analyzer(e.types[0]);
      }
    });

    class_declaration.members.forEach(e => {
      switch (e.kind) {
        case SyntaxKind.PropertyDeclaration:
          properties.push(this.get_property_description(<PropertyDeclaration> e));
          break;
        case SyntaxKind.MethodDeclaration:
          methods.push(this.get_method_description(<MethodDeclaration> e));
          break;
        case SyntaxKind.Constructor:
          const constructor = <ConstructorDeclaration> e;
          methods.push({
            name: 'constructor',
            decorators: this.analyze_decorators(constructor.decorators),
            parameters: this.analyze_parameters(constructor.parameters),
            return_value: { type: UnifiedTypes.Object, name: class_name},
            access_modifiers: constructor.modifiers ? this.getModifiers(constructor.modifiers) : [],
            comment: this.get_jsdoc(constructor),
          });
          break;
        case SyntaxKind.GetAccessor:
          accessors.push(this.get_accessor_description(<GetAccessorDeclaration> e, 'Get'));
          break;
        case SyntaxKind.SetAccessor:
          accessors.push(this.get_accessor_description(<SetAccessorDeclaration> e, 'Set'));
          break;
      }
    });

    const class_description: ClassDescription = {
      generic_types: {extends: [], type_name: ""},
      name: class_name,
      interfaces,
      methods,
      decorators,
      accessors,
      properties,
    };

    return Object.assign(base_object, class_description);
  }

  get_property_description (property_node: PropertyDeclaration): PropertyDescription {
    const property_description: PropertyDescription = {
      name: getIdentifierName(property_node.name),
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

    if (has_jsdoc(property_node)) {
      property_description.comment = this.get_jsdoc(property_node);
    }

    return property_description;
  }

  get_accessor_description (accessor: AccessorDeclaration, type: AccessorDescription['type']): AccessorDescription {
    return {
      name: getIdentifierName(accessor.name),
      access_modifiers: accessor.modifiers ? this.getModifiers(accessor.modifiers) : [],
      type,
    }
  }

  get_method_description (method: MethodDeclaration): MethodDescription {
    const name = getIdentifierName(method.name);
    const decorators = this.analyze_decorators(method.decorators);
    const parameters = this.analyze_parameters(method.parameters);
    const object: MethodDescription = {
      name,
      decorators,
      parameters,
      access_modifiers: method.modifiers ? this.getModifiers(method.modifiers) : [],
      return_value: method.type ? this.analyze_type(method.type) : {type: UnifiedTypes.Undefined},
    }

    return object;
  }

  analyze_decorators(node_array: NodeArray<Decorator> | undefined): DecoratorDescription[] {
    if (!node_array) {
      return [];
    }

    return node_array.map(value => this.get_decoration_description(value));
  }

  get_decoration_description(decorator: Decorator): DecoratorDescription {
    const description: DecoratorDescription = {
      parameters: [],
    };

    if (decorator.expression.kind === SyntaxKind.Identifier) {
      description.name = (<Identifier>decorator.expression).text;

    } else {
      const call_expression: CallExpression = <CallExpression>decorator.expression;

      description.parameters.push(...this.argument_parser(call_expression.arguments));

      if (call_expression.expression.kind === SyntaxKind.Identifier
        || call_expression.expression.kind === SyntaxKind.PropertyAccessExpression) {
        description.name = getIdentifierName(<Identifier | PropertyAccessExpression>call_expression.expression);
      }
    }

    return description;
  }

  argument_parser(nodes: NodeArray<Node>): ArgumentDescription[] {
    return nodes.map((node: Node, index) => {
      const [unified_type, value] = this.get_argument_type(node);
      return { type: { type: unified_type}, value, index };
    });
  }

  get_argument_type (node: Node): [UnifiedTypes, ArgumentDescription['value']] {
    let type: UnifiedTypes = UnifiedTypes.Unknown;
    let value = undefined;

    const set_return_values = (t: UnifiedTypes, v: any) => {
      type = t;
      value = v;
    };


    switch (node.kind) {
      case SyntaxKind.Identifier:  //  undefined | 'any variable'
        const name = (<Identifier>node).escapedText;
        if (name === 'undefined') {
          set_return_values(UnifiedTypes.Undefined, undefined);
        } else {
          set_return_values(UnifiedTypes.Variable, {name});
        }
        break;
      case SyntaxKind.NullKeyword:  //  null
        set_return_values(UnifiedTypes.Null, null);
        break;
      case SyntaxKind.ArrowFunction:  //  () => {}
        set_return_values(UnifiedTypes.Callable, this.get_text(<ArrowFunction>node));
        break;
      case SyntaxKind.ObjectLiteralExpression:  //  {}
        set_return_values(UnifiedTypes.Object, this.get_text(<ObjectLiteralExpression>node));
        break;
      case SyntaxKind.StringLiteral:  //  '2'
        set_return_values(UnifiedTypes.String, this.get_text(<StringLiteral>node));
        break;
      case SyntaxKind.NumericLiteral:  //  3
        set_return_values(UnifiedTypes.Number, this.get_text(<StringLiteral>node));
        break;
      case SyntaxKind.ParenthesizedExpression:  //  (() => {}) | (function (){})
        // Todo :: Try to Untangle Expression
        set_return_values(UnifiedTypes.Unknown, this.get_text(<ParenthesizedExpression>node));
        break;
      case SyntaxKind.FunctionExpression:  //  function (){}
        const argument_value: { functionName?: string } = {};
        const function_name = (<FunctionExpression>node).name;

        if (function_name) {
          argument_value.functionName = getIdentifierName(function_name);
        }

        set_return_values(UnifiedTypes.Callable, argument_value);
        break;
      case SyntaxKind.NewExpression:  //  new A()
        const new_expression: NewExpression = <NewExpression> node;
        const object_to_set: { arguments: ArgumentDescription[], className: string } = {
          className: '<unknown>',
          arguments: [],
        };

        if (new_expression.arguments) {
          object_to_set.arguments.push(...this.argument_parser(new_expression.arguments));
        }

        if (new_expression.expression.kind === SyntaxKind.Identifier
          || new_expression.expression.kind === SyntaxKind.PropertyAccessExpression) {
          object_to_set.className = getIdentifierName(<Identifier | PropertyAccessExpression> new_expression.expression);
        } else { // new (A)(); or new (() => A)();
          console.log(get_node_type(new_expression.expression));
          // TODO :: Try to get ClassName
          // this.utils((<NewExpression>y).expression);
        }

        set_return_values(UnifiedTypes.Object, object_to_set);
        break;

      case SyntaxKind.CallExpression:  //  x() | y() // (Function)() or (const)()
        const expression = (<CallExpression>node).expression;
        set_return_values(UnifiedTypes.FunctionCall, {
          called_function: this.get_text(expression), // Identifier -> Or A.Identifier || ParenthesizedExpression
          type: get_node_type(expression),
        });
        break;
    }

    return [type, value];
  }

  typed_argument_analyzer(element: ExpressionWithTypeArguments): ClassExtender {
    // TODO :: Add extension generic types
    const name = getIdentifierName(<any>element.expression);
    const generics: any = [];

    element.typeArguments?.forEach((e: TypeNode, index) => {
      const value = this.generic_argument_analyzer(e);
      generics.push(Object.assign(value, {index}));
    });

    return {
      class_name: name,
      generics,
    }
  }

  generic_argument_analyzer(e: TypeNode): { name: string } {
    let name = '';
    if (e.kind === SyntaxKind.AnyKeyword) {
      name = 'any';
    } else if (e.kind === SyntaxKind.TypeReference) {
      if ((<TypeReferenceNode>e).typeName.kind === SyntaxKind.Identifier) { // TODO: Add Changes
        name = getIdentifierName(<Identifier>(<TypeReferenceNode>e).typeName);
      } else if ((<TypeReferenceNode>e).typeName.kind === SyntaxKind.QualifiedName) {
        console.log('SyntaxKind.QualifiedName');
      }
    }

    return {
      name,
    }
  }

  analyze_type(node: TypeNode): TypeDescription {
    let result: TypeDescription = { type: UnifiedTypes.Unknown }; // Any might be better?

    switch (node.kind) {
      case SyntaxKind.UnionType: {
        const types = (<UnionTypeNode>node).types.map(e => this.analyze_type(e));
        result = {
          type: UnifiedTypes.Union,
          types: types,
        };
        break;
      }
      case SyntaxKind.UndefinedKeyword:
        result = {
          type: UnifiedTypes.Undefined,
        };
        break;
      case SyntaxKind.AnyKeyword:
        result = {
          type: UnifiedTypes.Any,
        };
        break;
      case SyntaxKind.IntersectionType: {
        const types = (<IntersectionTypeNode>node).types.map(e => this.analyze_type(e));
        result = {
          type: UnifiedTypes.Intersection,
          types: types,
        };

        break;
      }
      case SyntaxKind.TypeReference:
        result = {
          type: UnifiedTypes.Object,
          name: getIdentifierName((<TypeReferenceNode>node).typeName)
        };
        break;
      case SyntaxKind.NumberKeyword:
        result = {
          type: UnifiedTypes.Number,
        };
        break;
      case SyntaxKind.StringKeyword:
        result = {
          type: UnifiedTypes.String,
        }
        break;
      case SyntaxKind.ObjectKeyword:
        result = {
          type: UnifiedTypes.Object,
        }
        break;
      case SyntaxKind.LiteralType:
        //@ts-ignore
        const text = this.get_text(node.literal);
        if (text === 'null') {
          result = {
            type: UnifiedTypes.Null,
          }
        } else {
          result = {type: UnifiedTypes.Unknown, name: text};
        }
        break;
      case SyntaxKind.BooleanKeyword:
        result = {
          type: UnifiedTypes.Boolean,
        }
        break;
      case SyntaxKind.VoidKeyword:
        result = {
          type: UnifiedTypes.Void,
        }
        break;
      case SyntaxKind.TypeLiteral: {
        const types = (<TypeLiteralNode>node).members.map(e => {
          if (e.name) {
            return Object.assign(
              {
                name: this.get_text(e.name),
                type: UnifiedTypes.Unknown,
              },
              this.analyze_type((<any>e).type),
            );
          } else {
            // TODO :: Add extended indexing
            //@ts-ignore
            return {
              name: this.get_text((<IndexSignatureDeclaration>e).type),
              type: UnifiedTypes.Array,
              wildcard: true,
            }
          }
        });
        result = {
          type: UnifiedTypes.Object,
          types: types,
          // 'type_': 'TypeLiteral'
        };

        break;
      }

      case SyntaxKind.ArrayType:  // (asd: any[])
        result = {
          type: UnifiedTypes.Array,
          types: [this.analyze_type((<ArrayTypeNode>node).elementType)],
        };
        break;
      default: {
        const type = get_node_type(node);
        console.log('typetypetypetypetype: ', type);
      }
    }

    return result;
  }

  analyze_parameters(node: NodeArray<ParameterDeclaration>): ParameterDescription[] {
    return node.map((e, index) => {
      const type: TypeDescription = e.type ? this.analyze_type(e.type) : {type: UnifiedTypes.Unknown};
      const obj: ParameterDescription = {
        type: type,
        index,
        'name': this.getParameterName(e.name),
        'decorators': this.analyze_decorators(e.decorators),
        'has_spread': e.dotDotDotToken !== undefined,
      };
      return obj;
    });
  }

  getParameterName(s: ParameterDeclaration["name"]): string {
    return this.get_text(s);
  }

  /**
   * Limited for the Keywords that are found in classes
   * @param node
   */
  getModifiers(node: ModifiersArray): UnifiedModifier[] {
    const arr: UnifiedModifier[] = [];
    node.map(e => {
      switch (e.kind) {
        case SyntaxKind.AbstractKeyword:
          arr.push('abstract');
          break;

        case SyntaxKind.PublicKeyword:
          arr.push('public');
          break;

        case SyntaxKind.ProtectedKeyword:
          arr.push('protected');
          break;

        case SyntaxKind.PrivateKeyword:
          arr.push('private');
          break;

        case SyntaxKind.ReadonlyKeyword:
          arr.push('readonly');
          break;

        case SyntaxKind.StaticKeyword:
          arr.push('static');
          break;

      }
    });
    return arr;
  }

  analyze_jsdoc(method_like: NodeArray<JSDoc>): JsDocCommentDescription[] {
    return method_like.map((jsdoc) => {
      const tags = jsdoc.tags ? jsdoc.tags.map(tag => this.analyze_tag(tag)) : [];
      const comment: JsDocCommentDescription = {
        comment: jsdoc.comment ?? '',
        tags,
      };

      return comment;
    });
  }

  analyze_tag (tag: JSDocTag): TagDescription {
    const extra_name: undefined | EntityName = (<JSDocPropertyLikeTag>tag).name;
    return {
      comment: tag.comment ?? '',
      tag: this.getParameterName(tag.tagName),
      extra_value: extra_name && is_identifier(extra_name) ? this.getParameterName(extra_name) : '',
    };
  }

  get_jsdoc (node: JSDocContainer): JsDocCommentDescription[] | undefined {
    return has_jsdoc(node)  // .hasOwnProperty('jsDoc') // has_jsdoc(node)
      ? this.analyze_jsdoc((<any> node)['jsDoc'])
      : undefined;
  }
}
