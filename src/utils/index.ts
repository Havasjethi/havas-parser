import {
  ArrowFunction,
  CallExpression,
  ClassDeclaration,
  Decorator,
  ExpressionWithTypeArguments,
  FunctionExpression,
  HeritageClause,
  Identifier,
  NewExpression,
  Node,
  NodeArray,
  ObjectLiteralExpression,
  ParenthesizedExpression,
  PropertyAccessExpression,
  SourceFile,
  Statement,
  StringLiteral,
  SyntaxKind,
  TypeNode,
  TypeReferenceNode,
} from "typescript";
import { getIdentifierName, } from "./helper_function";
import { ArgumentDescription, ClassDescription, ClassExtender, DecoratorCallDescription } from "../types/types";
import { UnifiedTypes } from "../types/argument_types";
import { get_node_type } from "./get_node_type";

export class SourceAnalyzer {

  constructor(public file: SourceFile) {
  }

  set_new_source = (file: SourceFile) => this.file = file;

  print_r(x: NodeArray<Node>) {
    return this.arr_printer(x);
  }

  arr_printer(x: NodeArray<Node>) {
    console.log(
      'arr_printer(): ',
      this.file.text.slice(
        x.pos,
        x.end
      )
    );
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
    const decorators = this.decorators(declaration.decorators);
    const name = getIdentifierName(declaration.name);
    let extended_class: ClassDescription["extended_class"] = undefined;
    const interfaces: ClassDescription["interfaces"] = [];

    if (declaration.heritageClauses) {
      declaration.heritageClauses.forEach((e: HeritageClause) => {
        this.printer(e);
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

    const description: ClassDescription = {
      generic_types: {extends: [], type_name: ""},
      interfaces: interfaces,
      methods: [],
      decorators: decorators,
      accessors: [],
      extended_class: extended_class,
      fields: [],
      name: name
    };

    return description;
  }

  decorators(node_array: NodeArray<Decorator> | undefined): DecoratorCallDescription[] {
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
      const add = (argument_type: ArgumentDescription['argument_type'], argument_value: ArgumentDescription['argument_value']) => {
        argument_array.push({
          argument_type,
          argument_value,
          index: index,
        });
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
}
