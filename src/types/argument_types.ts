
export enum ArgumentExpression {
  ParenthesizedExpression = 'ParenthesizedExpression',
  FunctionExpression = 'FunctionExpression',
  NewExpression = 'NewExpression',
  CallExpression = 'CallExpression',
}

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
}

