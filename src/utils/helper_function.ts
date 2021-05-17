import {
  ExpressionWithTypeArguments,
  Identifier,
  Node,
  ParenthesizedExpression,
  PropertyAccessExpression,
  SyntaxKind
} from "typescript";
import { ClassExtender } from "../types/types";
import { get_node_type } from "./get_node_type";

export function print_type (statement: Node) {
  console.log(get_node_type(statement));
}

function untangle(expression: ParenthesizedExpression) {
  // TODO :: Analyze expression, it be readable readable
  return expression;
}


export function getIdentifierName (input: Identifier | PropertyAccessExpression | undefined): string {
  if (!input) {
    return '';
  } else if (input.kind === SyntaxKind.Identifier) {
    return (<Identifier> input).escapedText.toString();
  } else if (input.kind === SyntaxKind.PropertyAccessExpression) {
    return (<PropertyAccessExpression> input).name.escapedText.toString();
  }

  throw new Error('Invalid input');
}
