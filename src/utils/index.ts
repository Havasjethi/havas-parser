import {
  AbstractKeyword,
  AccessorDeclaration,
  ArrayTypeNode,
  ArrowFunction, AsyncKeyword,
  CallExpression,
  ClassDeclaration, ConstKeyword,
  ConstructorDeclaration, DeclareKeyword,
  Decorator, DefaultKeyword, ExportKeyword,
  ExpressionWithTypeArguments,
  FunctionExpression, FunctionLikeDeclarationBase, GetAccessorDeclaration, HasJSDoc,
  HeritageClause,
  Identifier,
  IndexSignatureDeclaration,
  IntersectionTypeNode, JSDocTypeReferencingNode,
  MethodDeclaration, Modifier, ModifierFlags, ModifiersArray,
  NewExpression,
  Node,
  NodeArray,
  ObjectLiteralExpression,
  ParameterDeclaration,
  ParenthesizedExpression, PrivateKeyword,
  PropertyAccessExpression,
  PropertyDeclaration, ProtectedKeyword, PublicKeyword, ReadonlyKeyword,
  ReadonlyTextRange, SetAccessorDeclaration,
  SourceFile,
  Statement, StaticKeyword,
  StringLiteral,
  SyntaxKind,
  TypeLiteralNode,
  TypeNode,
  TypeReference,
  TypeReferenceNode,
  UnionTypeNode,
} from "typescript";
import { get_type, getIdentifierName, } from "./helper_function";
import {
  ArgumentDescription,
  ClassDescription,
  ClassExtender,
  MethodDescription,
  ParameterDescription
} from "../types/types";
import { UnifiedTypes } from "../types/argument_types";
import { get_node_type } from "./get_node_type";
import { DecoratorCallDescription, UnifiedModifier } from "../types/base_types";

export class SourceAnalyzer {

  constructor(public file: SourceFile) {
  }

  set_new_source = (file: SourceFile) => this.file = file;

  print_r(nodes: NodeArray<Node>) {
    return this.arr_printer(nodes);
  }

  get_text(node: ReadonlyTextRange, trim: boolean = true) {
    const sliced_string = this.file.text.slice(
      node.pos,
      node.end
    );
    return !trim ? sliced_string : sliced_string.trim();
  }

  arr_printer(nodes: NodeArray<Node>) {
    console.log(
      'arr_printer(): ',
      this.get_text(nodes)
    );
  }

  print (x: Node | NodeArray<Node>) {
      const [metod, str] = x.hasOwnProperty('length')
        ? [this.print_r, 'Print called on: NodeArray']
        : [this.printer, 'Print called on: Node'];


      console.log(str);
      //@ts-ignore
    (metod.bind(this))(x);
        this.print_r(<NodeArray<Node>> x);
        this.printer(<Node> x);
  }

  printer(x: Node, kind: string = '') {
    console.log(
      `Kind: ${kind ? kind === '' : get_node_type(x)}`,
      x.getText(this.file)
      // this.file.text.slice(
      //   x.pos,
      //   x.end,
      // )
    )
  }

  builder(some: Statement) {
    switch (some.kind) {
      case SyntaxKind.ClassDeclaration:
        this.fromClassDeclaration(<ClassDeclaration>some);
        break;
    }
  }

  fromClassDeclaration(declaration: ClassDeclaration): ClassDescription {
    const decorators = this.analyze_decorators(declaration.decorators);
    const name = getIdentifierName(declaration.name);
    let extended_class: ClassDescription["extended_class"] = undefined;
    const interfaces: ClassDescription["interfaces"] = [];
    const methods: ClassDescription["methods"] = [];
    const properties: ClassDescription["properties"] = [];
    const accessors: ClassDescription["accessors"] = [];

    if (declaration.heritageClauses) {
      declaration.heritageClauses.forEach((e: HeritageClause) => {
        // this.printer(e);
        if (e.token === SyntaxKind.ImplementsKeyword) {
          e.types.forEach(implemented_interface => {
            interfaces.push(
              this.typed_argument_analyzer(implemented_interface)
            );
          });
        } else if (e.token === SyntaxKind.ExtendsKeyword) {
          extended_class = this.typed_argument_analyzer(e.types[0]);
        }
      });
    }

    declaration.members.forEach(e => {
      switch (e.kind) {
        case SyntaxKind.PropertyDeclaration: {
          const property: PropertyDeclaration = <PropertyDeclaration>e;
          const property_name = getIdentifierName(property.name);
          const property_description: any = {};

          if (property.type) {
            property_description.type = this.analyze_type(property.type);
          }

          if (property.initializer) {
            property_description.has_initializer = true;
          }

          if (property.hasOwnProperty('jsDoc')) {
            // TODO :: Add comment analization
            // //@ts-ignore
            // const y = property['jsDoc'];
            // const x = {};
            // if (y.tags) {
            //   y.tags.map(e => {})
            // }
            // console.log(y);
          }
          break;

        }

        case SyntaxKind.MethodDeclaration: {
          const method: MethodDeclaration = <MethodDeclaration> e;

          const name = getIdentifierName(method.name);
          const decorators = this.analyze_decorators(method.decorators);
          const parameters = this.analyze_parameters(method.parameters);
          const object: ClassDescription['methods'][0] = {
            name,
            decorators,
            parameters: [],
            access_modifiers: method.modifiers ? this.getModifiers(method.modifiers) : [],
            return_value: UnifiedTypes.Undefined,
          }

          if ((<any>e).type) {
            object.return_value = this.analyze_type((<any>e).type);
          }
          break;
        }

        case SyntaxKind.Constructor: {
          const constructor = <ConstructorDeclaration>e;
          // this.printer(constructor);
          const obj: MethodDescription = {
            name,
            decorators,
            parameters: this.analyze_parameters(constructor.parameters),
            return_value: UnifiedTypes.Object,
            access_modifiers: constructor.modifiers ? this.getModifiers(constructor.modifiers) : [],
          };

          if (constructor.hasOwnProperty('jsDoc')) {
            const js_docs = <NodeArray<JSDocTypeReferencingNode>>((<any>constructor).jsDoc);
            // console.log(<NodeArray<any>>((<any>constructor).jsDoc));
            if (js_docs) {
              obj.comment = this.analyze_js_doc(js_docs);
            }
          }
          // console.log(Object.keys(e));
          methods.push()
          break;
        }
        case SyntaxKind.GetAccessor: {
          const accessor = <GetAccessorDeclaration>e;
          accessors.push({
            name: getIdentifierName(accessor.name),
            access_modifiers: accessor.modifiers ? this.getModifiers(accessor.modifiers) : [],
            type: 'Get',
          });
          break;
        }
        case SyntaxKind.SetAccessor: {
          const accessor = <SetAccessorDeclaration>e;
          accessors.push({
            name: getIdentifierName(accessor.name),
            access_modifiers: accessor.modifiers ? this.getModifiers(accessor.modifiers) : [],
            type: 'Set',
          });
          break;
        }
      }
    });

    const description: ClassDescription = {
      generic_types: {extends: [], type_name: ""},
      interfaces: interfaces,
      methods,
      decorators: decorators,
      accessors: [],
      extended_class: extended_class,
      properties,
      name: name
    };

    return description;
  }

  analyze_decorators(node_array: NodeArray<Decorator> | undefined): DecoratorCallDescription[] {
    if (!node_array) {
      return [];
    }

    return node_array.map(value => this.getClassDecorator(value));
  }

  getClassDecorator(decorator: Decorator): DecoratorCallDescription {
    const description: DecoratorCallDescription = {
      parameters: [],
    };

    if (decorator.expression.kind === SyntaxKind.Identifier) {
      // const x: Identifier = <Identifier>decorator.expression;
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
    const argument_array: ArgumentDescription[] = [];

    nodes.forEach((node: Node, index) => {
      const add = (argument_type: ArgumentDescription['type'], argument_value: ArgumentDescription['value']) => {
        const x: ArgumentDescription = {
          type: argument_type,
          value: argument_value,
          index,
        };
        argument_array.push(x);
      }

      switch (node.kind) {
        case SyntaxKind.Identifier:  //  undefined | variable
          const name = (<Identifier>node).escapedText;
          if (name === 'undefined') {
            add(UnifiedTypes.Undefined, undefined);
          } else {
            add(UnifiedTypes.Variable, {name});
          }
          break;

        case SyntaxKind.NullKeyword:  //  null
          add(UnifiedTypes.Null, null);
          break;

        case SyntaxKind.ArrowFunction:  //  () => {}
          add(UnifiedTypes.Callable, (<ArrowFunction>node).getText(this.file));
          break;

        case SyntaxKind.ObjectLiteralExpression:  //  {}
          add(UnifiedTypes.Object, (<ObjectLiteralExpression>node).getText(this.file));
          break;

        case SyntaxKind.StringLiteral:  //  '2'
          add(UnifiedTypes.String, (<StringLiteral>node).getText(this.file));
          break;

        case SyntaxKind.NumericLiteral:  //  3
          add(UnifiedTypes.Number, (<StringLiteral>node).getText(this.file));
          break;

        case SyntaxKind.ParenthesizedExpression:  //  (() => {}) | (function (){})
          add(UnifiedTypes.Unknown, (<ParenthesizedExpression>node).getText(this.file));
          break;

        case SyntaxKind.FunctionExpression:  //  function (){}
          const argument_value: { functionName?: string } = {};

          const function_name = (<FunctionExpression>node).name;

          if (function_name) {
            argument_value.functionName = getIdentifierName(function_name);
          }

          add(UnifiedTypes.Callable, argument_value);
          break;

        case SyntaxKind.NewExpression:  //  new A()
          const chile_expression = (<NewExpression>node).expression;
          const class_arguments = (<NewExpression>node).arguments;
          const object_to_set: { arguments: ArgumentDescription[], className: string } = {
            className: '<unknown>',
            arguments: [],
          };

          if (class_arguments) {
            object_to_set.arguments.push(...this.argument_parser(class_arguments));
          }

          if (chile_expression.kind === SyntaxKind.Identifier
            || chile_expression.kind === SyntaxKind.PropertyAccessExpression) {
            object_to_set.className = getIdentifierName(<Identifier | PropertyAccessExpression>chile_expression);
          } else { // new (A)(); or new (() => A)();
            // TODO :: Try to get ClassName
            // this.utils((<NewExpression>y).expression);
          }

          add(UnifiedTypes.Object, object_to_set);
          break;

        case SyntaxKind.CallExpression:  //  x() | y() // (Function)() or (const)()
          const expression = (<CallExpression>node).expression;
          add(UnifiedTypes.FunctionCall, {
            called_function: expression.getText(this.file), // Identifier -> Or A.Identifier || ParenthesizedExpression
            type: get_node_type(expression),
          });
          break;
      }
    });

    return argument_array;
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
      if ((<TypeReferenceNode>e).typeName.kind === SyntaxKind.Identifier) {
        name = getIdentifierName(<Identifier>(<TypeReferenceNode>e).typeName);
      } else if ((<TypeReferenceNode>e).typeName.kind === SyntaxKind.QualifiedName) {
        console.log('What to do here???????? SyntaxKind.QualifiedName');
      }
    }
    return {
      name,
    }
  }

  /**
   * TODO :: return
   * @see {NamedType} => Consistent types
   * @param node
   */
  analyze_type(node: TypeNode) {
    let result: any;
    switch (node.kind) {
      case SyntaxKind.UnionType: {
        const types = (<UnionTypeNode>node).types.map(e => this.analyze_type(e));
        result = {
          type: 'Union',
          types: types,
        };
        break;
      }
      case SyntaxKind.UndefinedKeyword:
        result = {
          type: 'Undefined',
        };
        break;
      case SyntaxKind.AnyKeyword:
        result = {
          type: 'Any'
        };
        break;
      case SyntaxKind.IntersectionType: {
        const types = (<IntersectionTypeNode>node).types.map(e => this.analyze_type(e));
        result = {
          type: 'Intersection',
          types: types,
        };

        break;
      }
      case SyntaxKind.TypeReference:
        result = {
          type: 'TypeReference',
          name: getIdentifierName((<TypeReferenceNode>node).typeName)
        };
        break;
      case SyntaxKind.NumberKeyword:
        result = {
          type: 'Number',
        };
        break;
      case SyntaxKind.StringKeyword:
        result = {
          type: 'String',
        }
        break;
      case SyntaxKind.ObjectKeyword:
        result = {
          type: 'Object',
        }
        break;
      case SyntaxKind.LiteralType:
        //@ts-ignore
        const text = this.get_text(node.literal);
        if (text === 'null') {
          result = {
            type: 'Null',
          }
        } else {
          console.log('Hello');
          result = {type: text};
        }
        break;
      case SyntaxKind.BooleanKeyword:
        result = {
          type: 'Boolean',
        }
        break;
      case SyntaxKind.VoidKeyword:
        result = {
          type: 'Void',
        }
        break;
      case SyntaxKind.TypeLiteral: {
        const types = (<TypeLiteralNode>node).members.map(e => {
          if (e.name) {
            return Object.assign(
              {
                name: e.name.getText(this.file),
                type: 'Unknow',
              },
              this.analyze_type((<any>e).type),
            );
          } else {
            // TODO :: Add extended indexing
            //@ts-ignore
            return {
              name: 'code',
              type: this.get_text((<IndexSignatureDeclaration>e).type),
              wildcard: true,
            }
          }
        });
        result = {
          type: 'Object',
          types: types,
          'type_': 'TypeLiteral'
        };

        // this.printer(node);
        // console.log(result);
        // console.log();
        break;
      }

      case SyntaxKind.ArrayType:  // (asd: any[])
        result = {
          type: this.analyze_type((<ArrayTypeNode>node).elementType),
          'type_': 'ArrayType'
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
      const type = e.type ? (this.analyze_type(e.type) ?? {type: 'Unknown'}) : {type: 'Unknown'};
      return {
        type,
        index,
        'name': this.getParameterName(e.name),
        'decorators': this.analyze_decorators(e.decorators),
        'has_spread': e.dotDotDotToken !== undefined,
      };
    });
  }

  getParameterName(s: ParameterDeclaration["name"]): string {
    return s.getText(this.file);
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

  analyze_js_doc(method_like: NodeArray<JSDocTypeReferencingNode>): any {
    // console.log(method_like.jsDoc);
    method_like.forEach((e: JSDocTypeReferencingNode) => {
      if (e.hasOwnProperty('tags')) {
        //@ts-ignore
        console.log(this.print(e.tags));

      }
      // if (e.kind === SyntaxKind.JSDocComment) {}

    //   const call_if_exists = (e: Object, property: string | symbol | any) => {
    //     console.log({
    //       //@ts-ignore
    //       'hasOwnProperty: ': e.hasOwnProperty(property),
    //       //@ts-ignore
    //       'property: ': e[property]
    //     })
    //   }
    //
    //   console.log(Object.keys(e));
    //   Object.keys(e).forEach((key) => {
    //     call_if_exists(e,key);
    //   })
    //
    //   // this.print(e); console.log('\n');
    //
    });
    // console.log(method_like.length);
    // throw new Error('');



  }
}
