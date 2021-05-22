import {
  ExpressionWithTypeArguments,
  Identifier, JSDocContainer,
  Node, NumericLiteral,
  ParenthesizedExpression,
  PropertyAccessExpression, PropertyDeclaration, QualifiedName, StringLiteral,
  SyntaxKind
} from "typescript";
import { get_node_type } from "./get_node_type";

export function print_type (statement: Node) {
  console.log(get_node_type(statement));
}

function untangle(expression: ParenthesizedExpression) {
  // TODO :: Analyze expression, it be readable, Like (3), (new A())
  return expression;
}

export function is_identifier (x: Identifier | QualifiedName): x is Identifier {
  return (x as Identifier).escapedText !== undefined;
}

export function has_jsdoc (node: JSDocContainer): boolean {
  return node.hasOwnProperty('jsDoc');
}


export function getIdentifierName (input: Identifier | QualifiedName | PropertyAccessExpression | PropertyDeclaration["name"] | undefined): string {
  let str = '';

  if (!input) {
    return str;
  }
  switch (input.kind) {
    case (SyntaxKind.Identifier):
      str = (<Identifier> input).escapedText.toString();
      break

    case (SyntaxKind.PropertyAccessExpression):
      str = (<PropertyAccessExpression> input).name.escapedText.toString();
      break

    case SyntaxKind.StringLiteral:
    case SyntaxKind.NumericLiteral:
      str = (<StringLiteral | NumericLiteral> input).text;
      break;

    case SyntaxKind.ComputedPropertyName:
    case SyntaxKind.PrivateIdentifier:
      console.log('ComputedPropertyName / PrivateIdentifier found');
      break;
  }

  return str;
}
