import { TypeDescription } from "./types";

export enum ArgumentLiteral {
  ObjectLiteralExpression = 'ObjectLiteralExpression',
  StringLiteral = 'StringLiteral',
  NumericLiteral = 'NumericLiteral',
}

export enum ArgumentType {
  Identifier = 'Identifier',
  NullKeyword = 'NullKeyword',
  ArrowFunction = 'ArrowFunction',
}

export enum ExtraValue {
  Undefined = 'Undefined',
  Unknown = 'Unknown',
  Variable = 'Variable',
  FunctionCall = 'FunctionCall',
  Union = 'Union',
  Any = 'Any',
  Intersection = 'Intersection',
  Boolean = 'Boolean',
  Void = 'Void',
  Array = 'Array',
}

export enum UnifiedTypes {
  Object = ArgumentLiteral.ObjectLiteralExpression,
  String = ArgumentLiteral.StringLiteral,
  Number = ArgumentLiteral.NumericLiteral,
  Callable = ArgumentType.ArrowFunction,
  Null = ArgumentType.NullKeyword,
  Undefined = ExtraValue.Undefined,
  Unknown = ExtraValue.Unknown,
  Variable = ExtraValue.Variable,
  FunctionCall = ExtraValue.FunctionCall,
  Union = ExtraValue.Union,
  Any = ExtraValue.Any,
  Intersection = ExtraValue.Intersection,
  Boolean = ExtraValue.Boolean,
  Void = ExtraValue.Void,
  Array = ExtraValue.Array,
}
