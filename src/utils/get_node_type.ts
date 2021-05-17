import { Node, SyntaxKind } from "typescript";

export function get_node_type (some: Node): string {
  let value = '';

  switch (some.kind) {
    case SyntaxKind.Unknown:
      value = 'Unknown';
      break;
    case SyntaxKind.EndOfFileToken:
      value = 'EndOfFileToken';
      break;
    case SyntaxKind.SingleLineCommentTrivia:
      value = 'SingleLineCommentTrivia';
      break;
    case SyntaxKind.MultiLineCommentTrivia:
      value = 'MultiLineCommentTrivia';
      break;
    case SyntaxKind.NewLineTrivia:
      value = 'NewLineTrivia';
      break;
    case SyntaxKind.WhitespaceTrivia:
      value = 'WhitespaceTrivia';
      break;
    case SyntaxKind.ShebangTrivia:
      value = 'ShebangTrivia';
      break;
    case SyntaxKind.ConflictMarkerTrivia:
      value = 'ConflictMarkerTrivia';
      break;
    case SyntaxKind.NumericLiteral:
      value = 'NumericLiteral';
      break;
    case SyntaxKind.BigIntLiteral:
      value = 'BigIntLiteral';
      break;
    case SyntaxKind.StringLiteral:
      value = 'StringLiteral';
      break;
    case SyntaxKind.JsxText:
      value = 'JsxText';
      break;
    case SyntaxKind.JsxTextAllWhiteSpaces:
      value = 'JsxTextAllWhiteSpaces';
      break;
    case SyntaxKind.RegularExpressionLiteral:
      value = 'RegularExpressionLiteral';
      break;
    case SyntaxKind.NoSubstitutionTemplateLiteral:
      value = 'NoSubstitutionTemplateLiteral';
      break;
    case SyntaxKind.TemplateHead:
      value = 'TemplateHead';
      break;
    case SyntaxKind.TemplateMiddle:
      value = 'TemplateMiddle';
      break;
    case SyntaxKind.TemplateTail:
      value = 'TemplateTail';
      break;
    case SyntaxKind.OpenBraceToken:
      value = 'OpenBraceToken';
      break;
    case SyntaxKind.CloseBraceToken:
      value = 'CloseBraceToken';
      break;
    case SyntaxKind.OpenParenToken:
      value = 'OpenParenToken';
      break;
    case SyntaxKind.CloseParenToken:
      value = 'CloseParenToken';
      break;
    case SyntaxKind.OpenBracketToken:
      value = 'OpenBracketToken';
      break;
    case SyntaxKind.CloseBracketToken:
      value = 'CloseBracketToken';
      break;
    case SyntaxKind.DotToken:
      value = 'DotToken';
      break;
    case SyntaxKind.DotDotDotToken:
      value = 'DotDotDotToken';
      break;
    case SyntaxKind.SemicolonToken:
      value = 'SemicolonToken';
      break;
    case SyntaxKind.CommaToken:
      value = 'CommaToken';
      break;
    case SyntaxKind.QuestionDotToken:
      value = 'QuestionDotToken';
      break;
    case SyntaxKind.LessThanToken:
      value = 'LessThanToken';
      break;
    case SyntaxKind.LessThanSlashToken:
      value = 'LessThanSlashToken';
      break;
    case SyntaxKind.GreaterThanToken:
      value = 'GreaterThanToken';
      break;
    case SyntaxKind.LessThanEqualsToken:
      value = 'LessThanEqualsToken';
      break;
    case SyntaxKind.GreaterThanEqualsToken:
      value = 'GreaterThanEqualsToken';
      break;
    case SyntaxKind.EqualsEqualsToken:
      value = 'EqualsEqualsToken';
      break;
    case SyntaxKind.ExclamationEqualsToken:
      value = 'ExclamationEqualsToken';
      break;
    case SyntaxKind.EqualsEqualsEqualsToken:
      value = 'EqualsEqualsEqualsToken';
      break;
    case SyntaxKind.ExclamationEqualsEqualsToken:
      value = 'ExclamationEqualsEqualsToken';
      break;
    case SyntaxKind.EqualsGreaterThanToken:
      value = 'EqualsGreaterThanToken';
      break;
    case SyntaxKind.PlusToken:
      value = 'PlusToken';
      break;
    case SyntaxKind.MinusToken:
      value = 'MinusToken';
      break;
    case SyntaxKind.AsteriskToken:
      value = 'AsteriskToken';
      break;
    case SyntaxKind.AsteriskAsteriskToken:
      value = 'AsteriskAsteriskToken';
      break;
    case SyntaxKind.SlashToken:
      value = 'SlashToken';
      break;
    case SyntaxKind.PercentToken:
      value = 'PercentToken';
      break;
    case SyntaxKind.PlusPlusToken:
      value = 'PlusPlusToken';
      break;
    case SyntaxKind.MinusMinusToken:
      value = 'MinusMinusToken';
      break;
    case SyntaxKind.LessThanLessThanToken:
      value = 'LessThanLessThanToken';
      break;
    case SyntaxKind.GreaterThanGreaterThanToken:
      value = 'GreaterThanGreaterThanToken';
      break;
    case SyntaxKind.GreaterThanGreaterThanGreaterThanToken:
      value = 'GreaterThanGreaterThanGreaterThanToken';
      break;
    case SyntaxKind.AmpersandToken:
      value = 'AmpersandToken';
      break;
    case SyntaxKind.BarToken:
      value = 'BarToken';
      break;
    case SyntaxKind.CaretToken:
      value = 'CaretToken';
      break;
    case SyntaxKind.ExclamationToken:
      value = 'ExclamationToken';
      break;
    case SyntaxKind.TildeToken:
      value = 'TildeToken';
      break;
    case SyntaxKind.AmpersandAmpersandToken:
      value = 'AmpersandAmpersandToken';
      break;
    case SyntaxKind.BarBarToken:
      value = 'BarBarToken';
      break;
    case SyntaxKind.QuestionToken:
      value = 'QuestionToken';
      break;
    case SyntaxKind.ColonToken:
      value = 'ColonToken';
      break;
    case SyntaxKind.AtToken:
      value = 'AtToken';
      break;
    case SyntaxKind.QuestionQuestionToken:
      value = 'QuestionQuestionToken';
      break;
    case SyntaxKind.BacktickToken:
      value = 'BacktickToken';
      break;
    case SyntaxKind.EqualsToken:
      value = 'EqualsToken';
      break;
    case SyntaxKind.PlusEqualsToken:
      value = 'PlusEqualsToken';
      break;
    case SyntaxKind.MinusEqualsToken:
      value = 'MinusEqualsToken';
      break;
    case SyntaxKind.AsteriskEqualsToken:
      value = 'AsteriskEqualsToken';
      break;
    case SyntaxKind.AsteriskAsteriskEqualsToken:
      value = 'AsteriskAsteriskEqualsToken';
      break;
    case SyntaxKind.SlashEqualsToken:
      value = 'SlashEqualsToken';
      break;
    case SyntaxKind.PercentEqualsToken:
      value = 'PercentEqualsToken';
      break;
    case SyntaxKind.LessThanLessThanEqualsToken:
      value = 'LessThanLessThanEqualsToken';
      break;
    case SyntaxKind.GreaterThanGreaterThanEqualsToken:
      value = 'GreaterThanGreaterThanEqualsToken';
      break;
    case SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken:
      value = 'GreaterThanGreaterThanGreaterThanEqualsToken';
      break;
    case SyntaxKind.AmpersandEqualsToken:
      value = 'AmpersandEqualsToken';
      break;
    case SyntaxKind.BarEqualsToken:
      value = 'BarEqualsToken';
      break;
    case SyntaxKind.BarBarEqualsToken:
      value = 'BarBarEqualsToken';
      break;
    case SyntaxKind.AmpersandAmpersandEqualsToken:
      value = 'AmpersandAmpersandEqualsToken';
      break;
    case SyntaxKind.QuestionQuestionEqualsToken:
      value = 'QuestionQuestionEqualsToken';
      break;
    case SyntaxKind.CaretEqualsToken:
      value = 'CaretEqualsToken';
      break;
    case SyntaxKind.Identifier:
      value = 'Identifier';
      break;
    case SyntaxKind.PrivateIdentifier:
      value = 'PrivateIdentifier';
      break;
    case SyntaxKind.BreakKeyword:
      value = 'BreakKeyword';
      break;
    case SyntaxKind.CaseKeyword:
      value = 'CaseKeyword';
      break;
    case SyntaxKind.CatchKeyword:
      value = 'CatchKeyword';
      break;
    case SyntaxKind.ClassKeyword:
      value = 'ClassKeyword';
      break;
    case SyntaxKind.ConstKeyword:
      value = 'ConstKeyword';
      break;
    case SyntaxKind.ContinueKeyword:
      value = 'ContinueKeyword';
      break;
    case SyntaxKind.DebuggerKeyword:
      value = 'DebuggerKeyword';
      break;
    case SyntaxKind.DefaultKeyword:
      value = 'DefaultKeyword';
      break;
    case SyntaxKind.DeleteKeyword:
      value = 'DeleteKeyword';
      break;
    case SyntaxKind.DoKeyword:
      value = 'DoKeyword';
      break;
    case SyntaxKind.ElseKeyword:
      value = 'ElseKeyword';
      break;
    case SyntaxKind.EnumKeyword:
      value = 'EnumKeyword';
      break;
    case SyntaxKind.ExportKeyword:
      value = 'ExportKeyword';
      break;
    case SyntaxKind.ExtendsKeyword:
      value = 'ExtendsKeyword';
      break;
    case SyntaxKind.FalseKeyword:
      value = 'FalseKeyword';
      break;
    case SyntaxKind.FinallyKeyword:
      value = 'FinallyKeyword';
      break;
    case SyntaxKind.ForKeyword:
      value = 'ForKeyword';
      break;
    case SyntaxKind.FunctionKeyword:
      value = 'FunctionKeyword';
      break;
    case SyntaxKind.IfKeyword:
      value = 'IfKeyword';
      break;
    case SyntaxKind.ImportKeyword:
      value = 'ImportKeyword';
      break;
    case SyntaxKind.InKeyword:
      value = 'InKeyword';
      break;
    case SyntaxKind.InstanceOfKeyword:
      value = 'InstanceOfKeyword';
      break;
    case SyntaxKind.NewKeyword:
      value = 'NewKeyword';
      break;
    case SyntaxKind.NullKeyword:
      value = 'NullKeyword';
      break;
    case SyntaxKind.ReturnKeyword:
      value = 'ReturnKeyword';
      break;
    case SyntaxKind.SuperKeyword:
      value = 'SuperKeyword';
      break;
    case SyntaxKind.SwitchKeyword:
      value = 'SwitchKeyword';
      break;
    case SyntaxKind.ThisKeyword:
      value = 'ThisKeyword';
      break;
    case SyntaxKind.ThrowKeyword:
      value = 'ThrowKeyword';
      break;
    case SyntaxKind.TrueKeyword:
      value = 'TrueKeyword';
      break;
    case SyntaxKind.TryKeyword:
      value = 'TryKeyword';
      break;
    case SyntaxKind.TypeOfKeyword:
      value = 'TypeOfKeyword';
      break;
    case SyntaxKind.VarKeyword:
      value = 'VarKeyword';
      break;
    case SyntaxKind.VoidKeyword:
      value = 'VoidKeyword';
      break;
    case SyntaxKind.WhileKeyword:
      value = 'WhileKeyword';
      break;
    case SyntaxKind.WithKeyword:
      value = 'WithKeyword';
      break;
    case SyntaxKind.ImplementsKeyword:
      value = 'ImplementsKeyword';
      break;
    case SyntaxKind.InterfaceKeyword:
      value = 'InterfaceKeyword';
      break;
    case SyntaxKind.LetKeyword:
      value = 'LetKeyword';
      break;
    case SyntaxKind.PackageKeyword:
      value = 'PackageKeyword';
      break;
    case SyntaxKind.PrivateKeyword:
      value = 'PrivateKeyword';
      break;
    case SyntaxKind.ProtectedKeyword:
      value = 'ProtectedKeyword';
      break;
    case SyntaxKind.PublicKeyword:
      value = 'PublicKeyword';
      break;
    case SyntaxKind.StaticKeyword:
      value = 'StaticKeyword';
      break;
    case SyntaxKind.YieldKeyword:
      value = 'YieldKeyword';
      break;
    case SyntaxKind.AbstractKeyword:
      value = 'AbstractKeyword';
      break;
    case SyntaxKind.AsKeyword:
      value = 'AsKeyword';
      break;
    case SyntaxKind.AssertsKeyword:
      value = 'AssertsKeyword';
      break;
    case SyntaxKind.AnyKeyword:
      value = 'AnyKeyword';
      break;
    case SyntaxKind.AsyncKeyword:
      value = 'AsyncKeyword';
      break;
    case SyntaxKind.AwaitKeyword:
      value = 'AwaitKeyword';
      break;
    case SyntaxKind.BooleanKeyword:
      value = 'BooleanKeyword';
      break;
    case SyntaxKind.ConstructorKeyword:
      value = 'ConstructorKeyword';
      break;
    case SyntaxKind.DeclareKeyword:
      value = 'DeclareKeyword';
      break;
    case SyntaxKind.GetKeyword:
      value = 'GetKeyword';
      break;
    case SyntaxKind.InferKeyword:
      value = 'InferKeyword';
      break;
    case SyntaxKind.IntrinsicKeyword:
      value = 'IntrinsicKeyword';
      break;
    case SyntaxKind.IsKeyword:
      value = 'IsKeyword';
      break;
    case SyntaxKind.KeyOfKeyword:
      value = 'KeyOfKeyword';
      break;
    case SyntaxKind.ModuleKeyword:
      value = 'ModuleKeyword';
      break;
    case SyntaxKind.NamespaceKeyword:
      value = 'NamespaceKeyword';
      break;
    case SyntaxKind.NeverKeyword:
      value = 'NeverKeyword';
      break;
    case SyntaxKind.ReadonlyKeyword:
      value = 'ReadonlyKeyword';
      break;
    case SyntaxKind.RequireKeyword:
      value = 'RequireKeyword';
      break;
    case SyntaxKind.NumberKeyword:
      value = 'NumberKeyword';
      break;
    case SyntaxKind.ObjectKeyword:
      value = 'ObjectKeyword';
      break;
    case SyntaxKind.SetKeyword:
      value = 'SetKeyword';
      break;
    case SyntaxKind.StringKeyword:
      value = 'StringKeyword';
      break;
    case SyntaxKind.SymbolKeyword:
      value = 'SymbolKeyword';
      break;
    case SyntaxKind.TypeKeyword:
      value = 'TypeKeyword';
      break;
    case SyntaxKind.UndefinedKeyword:
      value = 'UndefinedKeyword';
      break;
    case SyntaxKind.UniqueKeyword:
      value = 'UniqueKeyword';
      break;
    case SyntaxKind.UnknownKeyword:
      value = 'UnknownKeyword';
      break;
    case SyntaxKind.FromKeyword:
      value = 'FromKeyword';
      break;
    case SyntaxKind.GlobalKeyword:
      value = 'GlobalKeyword';
      break;
    case SyntaxKind.BigIntKeyword:
      value = 'BigIntKeyword';
      break;
    case SyntaxKind.OfKeyword:
      value = 'OfKeyword';
      break;
    case SyntaxKind.QualifiedName:
      value = 'QualifiedName';
      break;
    case SyntaxKind.ComputedPropertyName:
      value = 'ComputedPropertyName';
      break;
    case SyntaxKind.TypeParameter:
      value = 'TypeParameter';
      break;
    case SyntaxKind.Parameter:
      value = 'Parameter';
      break;
    case SyntaxKind.Decorator:
      value = 'Decorator';
      break;
    case SyntaxKind.PropertySignature:
      value = 'PropertySignature';
      break;
    case SyntaxKind.PropertyDeclaration:
      value = 'PropertyDeclaration';
      break;
    case SyntaxKind.MethodSignature:
      value = 'MethodSignature';
      break;
    case SyntaxKind.MethodDeclaration:
      value = 'MethodDeclaration';
      break;
    case SyntaxKind.Constructor:
      value = 'Constructor';
      break;
    case SyntaxKind.GetAccessor:
      value = 'GetAccessor';
      break;
    case SyntaxKind.SetAccessor:
      value = 'SetAccessor';
      break;
    case SyntaxKind.CallSignature:
      value = 'CallSignature';
      break;
    case SyntaxKind.ConstructSignature:
      value = 'ConstructSignature';
      break;
    case SyntaxKind.IndexSignature:
      value = 'IndexSignature';
      break;
    case SyntaxKind.TypePredicate:
      value = 'TypePredicate';
      break;
    case SyntaxKind.TypeReference:
      value = 'TypeReference';
      break;
    case SyntaxKind.FunctionType:
      value = 'FunctionType';
      break;
    case SyntaxKind.ConstructorType:
      value = 'ConstructorType';
      break;
    case SyntaxKind.TypeQuery:
      value = 'TypeQuery';
      break;
    case SyntaxKind.TypeLiteral:
      value = 'TypeLiteral';
      break;
    case SyntaxKind.ArrayType:
      value = 'ArrayType';
      break;
    case SyntaxKind.TupleType:
      value = 'TupleType';
      break;
    case SyntaxKind.OptionalType:
      value = 'OptionalType';
      break;
    case SyntaxKind.RestType:
      value = 'RestType';
      break;
    case SyntaxKind.UnionType:
      value = 'UnionType';
      break;
    case SyntaxKind.IntersectionType:
      value = 'IntersectionType';
      break;
    case SyntaxKind.ConditionalType:
      value = 'ConditionalType';
      break;
    case SyntaxKind.InferType:
      value = 'InferType';
      break;
    case SyntaxKind.ParenthesizedType:
      value = 'ParenthesizedType';
      break;
    case SyntaxKind.ThisType:
      value = 'ThisType';
      break;
    case SyntaxKind.TypeOperator:
      value = 'TypeOperator';
      break;
    case SyntaxKind.IndexedAccessType:
      value = 'IndexedAccessType';
      break;
    case SyntaxKind.MappedType:
      value = 'MappedType';
      break;
    case SyntaxKind.LiteralType:
      value = 'LiteralType';
      break;
    case SyntaxKind.NamedTupleMember:
      value = 'NamedTupleMember';
      break;
    case SyntaxKind.TemplateLiteralType:
      value = 'TemplateLiteralType';
      break;
    case SyntaxKind.TemplateLiteralTypeSpan:
      value = 'TemplateLiteralTypeSpan';
      break;
    case SyntaxKind.ImportType:
      value = 'ImportType';
      break;
    case SyntaxKind.ObjectBindingPattern:
      value = 'ObjectBindingPattern';
      break;
    case SyntaxKind.ArrayBindingPattern:
      value = 'ArrayBindingPattern';
      break;
    case SyntaxKind.BindingElement:
      value = 'BindingElement';
      break;
    case SyntaxKind.ArrayLiteralExpression:
      value = 'ArrayLiteralExpression';
      break;
    case SyntaxKind.ObjectLiteralExpression:
      value = 'ObjectLiteralExpression';
      break;
    case SyntaxKind.PropertyAccessExpression:
      value = 'PropertyAccessExpression';
      break;
    case SyntaxKind.ElementAccessExpression:
      value = 'ElementAccessExpression';
      break;
    case SyntaxKind.CallExpression:
      value = 'CallExpression';
      break;
    case SyntaxKind.NewExpression:
      value = 'NewExpression';
      break;
    case SyntaxKind.TaggedTemplateExpression:
      value = 'TaggedTemplateExpression';
      break;
    case SyntaxKind.TypeAssertionExpression:
      value = 'TypeAssertionExpression';
      break;
    case SyntaxKind.ParenthesizedExpression:
      value = 'ParenthesizedExpression';
      break;
    case SyntaxKind.FunctionExpression:
      value = 'FunctionExpression';
      break;
    case SyntaxKind.ArrowFunction:
      value = 'ArrowFunction';
      break;
    case SyntaxKind.DeleteExpression:
      value = 'DeleteExpression';
      break;
    case SyntaxKind.TypeOfExpression:
      value = 'TypeOfExpression';
      break;
    case SyntaxKind.VoidExpression:
      value = 'VoidExpression';
      break;
    case SyntaxKind.AwaitExpression:
      value = 'AwaitExpression';
      break;
    case SyntaxKind.PrefixUnaryExpression:
      value = 'PrefixUnaryExpression';
      break;
    case SyntaxKind.PostfixUnaryExpression:
      value = 'PostfixUnaryExpression';
      break;
    case SyntaxKind.BinaryExpression:
      value = 'BinaryExpression';
      break;
    case SyntaxKind.ConditionalExpression:
      value = 'ConditionalExpression';
      break;
    case SyntaxKind.TemplateExpression:
      value = 'TemplateExpression';
      break;
    case SyntaxKind.YieldExpression:
      value = 'YieldExpression';
      break;
    case SyntaxKind.SpreadElement:
      value = 'SpreadElement';
      break;
    case SyntaxKind.ClassExpression:
      value = 'ClassExpression';
      break;
    case SyntaxKind.OmittedExpression:
      value = 'OmittedExpression';
      break;
    case SyntaxKind.ExpressionWithTypeArguments:
      value = 'ExpressionWithTypeArguments';
      break;
    case SyntaxKind.AsExpression:
      value = 'AsExpression';
      break;
    case SyntaxKind.NonNullExpression:
      value = 'NonNullExpression';
      break;
    case SyntaxKind.MetaProperty:
      value = 'MetaProperty';
      break;
    case SyntaxKind.SyntheticExpression:
      value = 'SyntheticExpression';
      break;
    case SyntaxKind.TemplateSpan:
      value = 'TemplateSpan';
      break;
    case SyntaxKind.SemicolonClassElement:
      value = 'SemicolonClassElement';
      break;
    case SyntaxKind.Block:
      value = 'Block';
      break;
    case SyntaxKind.EmptyStatement:
      value = 'EmptyStatement';
      break;
    case SyntaxKind.VariableStatement:
      value = 'VariableStatement';
      break;
    case SyntaxKind.ExpressionStatement:
      value = 'ExpressionStatement';
      break;
    case SyntaxKind.IfStatement:
      value = 'IfStatement';
      break;
    case SyntaxKind.DoStatement:
      value = 'DoStatement';
      break;
    case SyntaxKind.WhileStatement:
      value = 'WhileStatement';
      break;
    case SyntaxKind.ForStatement:
      value = 'ForStatement';
      break;
    case SyntaxKind.ForInStatement:
      value = 'ForInStatement';
      break;
    case SyntaxKind.ForOfStatement:
      value = 'ForOfStatement';
      break;
    case SyntaxKind.ContinueStatement:
      value = 'ContinueStatement';
      break;
    case SyntaxKind.BreakStatement:
      value = 'BreakStatement';
      break;
    case SyntaxKind.ReturnStatement:
      value = 'ReturnStatement';
      break;
    case SyntaxKind.WithStatement:
      value = 'WithStatement';
      break;
    case SyntaxKind.SwitchStatement:
      value = 'SwitchStatement';
      break;
    case SyntaxKind.LabeledStatement:
      value = 'LabeledStatement';
      break;
    case SyntaxKind.ThrowStatement:
      value = 'ThrowStatement';
      break;
    case SyntaxKind.TryStatement:
      value = 'TryStatement';
      break;
    case SyntaxKind.DebuggerStatement:
      value = 'DebuggerStatement';
      break;
    case SyntaxKind.VariableDeclaration:
      value = 'VariableDeclaration';
      break;
    case SyntaxKind.VariableDeclarationList:
      value = 'VariableDeclarationList';
      break;
    case SyntaxKind.FunctionDeclaration:
      value = 'FunctionDeclaration';
      break;
    case SyntaxKind.ClassDeclaration:
      value = 'ClassDeclaration';
      break;
    case SyntaxKind.InterfaceDeclaration:
      value = 'InterfaceDeclaration';
      break;
    case SyntaxKind.TypeAliasDeclaration:
      value = 'TypeAliasDeclaration';
      break;
    case SyntaxKind.EnumDeclaration:
      value = 'EnumDeclaration';
      break;
    case SyntaxKind.ModuleDeclaration:
      value = 'ModuleDeclaration';
      break;
    case SyntaxKind.ModuleBlock:
      value = 'ModuleBlock';
      break;
    case SyntaxKind.CaseBlock:
      value = 'CaseBlock';
      break;
    case SyntaxKind.NamespaceExportDeclaration:
      value = 'NamespaceExportDeclaration';
      break;
    case SyntaxKind.ImportEqualsDeclaration:
      value = 'ImportEqualsDeclaration';
      break;
    case SyntaxKind.ImportDeclaration:
      value = 'ImportDeclaration';
      break;
    case SyntaxKind.ImportClause:
      value = 'ImportClause';
      break;
    case SyntaxKind.NamespaceImport:
      value = 'NamespaceImport';
      break;
    case SyntaxKind.NamedImports:
      value = 'NamedImports';
      break;
    case SyntaxKind.ImportSpecifier:
      value = 'ImportSpecifier';
      break;
    case SyntaxKind.ExportAssignment:
      value = 'ExportAssignment';
      break;
    case SyntaxKind.ExportDeclaration:
      value = 'ExportDeclaration';
      break;
    case SyntaxKind.NamedExports:
      value = 'NamedExports';
      break;
    case SyntaxKind.NamespaceExport:
      value = 'NamespaceExport';
      break;
    case SyntaxKind.ExportSpecifier:
      value = 'ExportSpecifier';
      break;
    case SyntaxKind.MissingDeclaration:
      value = 'MissingDeclaration';
      break;
    case SyntaxKind.ExternalModuleReference:
      value = 'ExternalModuleReference';
      break;
    case SyntaxKind.JsxElement:
      value = 'JsxElement';
      break;
    case SyntaxKind.JsxSelfClosingElement:
      value = 'JsxSelfClosingElement';
      break;
    case SyntaxKind.JsxOpeningElement:
      value = 'JsxOpeningElement';
      break;
    case SyntaxKind.JsxClosingElement:
      value = 'JsxClosingElement';
      break;
    case SyntaxKind.JsxFragment:
      value = 'JsxFragment';
      break;
    case SyntaxKind.JsxOpeningFragment:
      value = 'JsxOpeningFragment';
      break;
    case SyntaxKind.JsxClosingFragment:
      value = 'JsxClosingFragment';
      break;
    case SyntaxKind.JsxAttribute:
      value = 'JsxAttribute';
      break;
    case SyntaxKind.JsxAttributes:
      value = 'JsxAttributes';
      break;
    case SyntaxKind.JsxSpreadAttribute:
      value = 'JsxSpreadAttribute';
      break;
    case SyntaxKind.JsxExpression:
      value = 'JsxExpression';
      break;
    case SyntaxKind.CaseClause:
      value = 'CaseClause';
      break;
    case SyntaxKind.DefaultClause:
      value = 'DefaultClause';
      break;
    case SyntaxKind.HeritageClause:
      value = 'HeritageClause';
      break;
    case SyntaxKind.CatchClause:
      value = 'CatchClause';
      break;
    case SyntaxKind.PropertyAssignment:
      value = 'PropertyAssignment';
      break;
    case SyntaxKind.ShorthandPropertyAssignment:
      value = 'ShorthandPropertyAssignment';
      break;
    case SyntaxKind.SpreadAssignment:
      value = 'SpreadAssignment';
      break;
    case SyntaxKind.EnumMember:
      value = 'EnumMember';
      break;
    case SyntaxKind.UnparsedPrologue:
      value = 'UnparsedPrologue';
      break;
    case SyntaxKind.UnparsedPrepend:
      value = 'UnparsedPrepend';
      break;
    case SyntaxKind.UnparsedText:
      value = 'UnparsedText';
      break;
    case SyntaxKind.UnparsedInternalText:
      value = 'UnparsedInternalText';
      break;
    case SyntaxKind.UnparsedSyntheticReference:
      value = 'UnparsedSyntheticReference';
      break;
    case SyntaxKind.SourceFile:
      value = 'SourceFile';
      break;
    case SyntaxKind.Bundle:
      value = 'Bundle';
      break;
    case SyntaxKind.UnparsedSource:
      value = 'UnparsedSource';
      break;
    case SyntaxKind.InputFiles:
      value = 'InputFiles';
      break;
    case SyntaxKind.JSDocTypeExpression:
      value = 'JSDocTypeExpression';
      break;
    case SyntaxKind.JSDocNameReference:
      value = 'JSDocNameReference';
      break;
    case SyntaxKind.JSDocAllType:
      value = 'JSDocAllType';
      break;
    case SyntaxKind.JSDocUnknownType:
      value = 'JSDocUnknownType';
      break;
    case SyntaxKind.JSDocNullableType:
      value = 'JSDocNullableType';
      break;
    case SyntaxKind.JSDocNonNullableType:
      value = 'JSDocNonNullableType';
      break;
    case SyntaxKind.JSDocOptionalType:
      value = 'JSDocOptionalType';
      break;
    case SyntaxKind.JSDocFunctionType:
      value = 'JSDocFunctionType';
      break;
    case SyntaxKind.JSDocVariadicType:
      value = 'JSDocVariadicType';
      break;
    case SyntaxKind.JSDocNamepathType:
      value = 'JSDocNamepathType';
      break;
    case SyntaxKind.JSDocComment:
      value = 'JSDocComment';
      break;
    case SyntaxKind.JSDocTypeLiteral:
      value = 'JSDocTypeLiteral';
      break;
    case SyntaxKind.JSDocSignature:
      value = 'JSDocSignature';
      break;
    case SyntaxKind.JSDocTag:
      value = 'JSDocTag';
      break;
    case SyntaxKind.JSDocAugmentsTag:
      value = 'JSDocAugmentsTag';
      break;
    case SyntaxKind.JSDocImplementsTag:
      value = 'JSDocImplementsTag';
      break;
    case SyntaxKind.JSDocAuthorTag:
      value = 'JSDocAuthorTag';
      break;
    case SyntaxKind.JSDocDeprecatedTag:
      value = 'JSDocDeprecatedTag';
      break;
    case SyntaxKind.JSDocClassTag:
      value = 'JSDocClassTag';
      break;
    case SyntaxKind.JSDocPublicTag:
      value = 'JSDocPublicTag';
      break;
    case SyntaxKind.JSDocPrivateTag:
      value = 'JSDocPrivateTag';
      break;
    case SyntaxKind.JSDocProtectedTag:
      value = 'JSDocProtectedTag';
      break;
    case SyntaxKind.JSDocReadonlyTag:
      value = 'JSDocReadonlyTag';
      break;
    case SyntaxKind.JSDocCallbackTag:
      value = 'JSDocCallbackTag';
      break;
    case SyntaxKind.JSDocEnumTag:
      value = 'JSDocEnumTag';
      break;
    case SyntaxKind.JSDocParameterTag:
      value = 'JSDocParameterTag';
      break;
    case SyntaxKind.JSDocReturnTag:
      value = 'JSDocReturnTag';
      break;
    case SyntaxKind.JSDocThisTag:
      value = 'JSDocThisTag';
      break;
    case SyntaxKind.JSDocTypeTag:
      value = 'JSDocTypeTag';
      break;
    case SyntaxKind.JSDocTemplateTag:
      value = 'JSDocTemplateTag';
      break;
    case SyntaxKind.JSDocTypedefTag:
      value = 'JSDocTypedefTag';
      break;
    case SyntaxKind.JSDocSeeTag:
      value = 'JSDocSeeTag';
      break;
    case SyntaxKind.JSDocPropertyTag:
      value = 'JSDocPropertyTag';
      break;
    case SyntaxKind.SyntaxList:
      value = 'SyntaxList';
      break;
    case SyntaxKind.NotEmittedStatement:
      value = 'NotEmittedStatement';
      break;
    case SyntaxKind.PartiallyEmittedExpression:
      value = 'PartiallyEmittedExpression';
      break;
    case SyntaxKind.CommaListExpression:
      value = 'CommaListExpression';
      break;
    case SyntaxKind.MergeDeclarationMarker:
      value = 'MergeDeclarationMarker';
      break;
    case SyntaxKind.EndOfDeclarationMarker:
      value = 'EndOfDeclarationMarker';
      break;
    case SyntaxKind.SyntheticReferenceExpression:
      value = 'SyntheticReferenceExpression';
      break;
    case SyntaxKind.Count:
      value = 'Count';
      break;
    case SyntaxKind.FirstAssignment:
      value = 'FirstAssignment';
      break;
    case SyntaxKind.LastAssignment:
      value = 'LastAssignment';
      break;
    case SyntaxKind.FirstCompoundAssignment:
      value = 'FirstCompoundAssignment';
      break;
    case SyntaxKind.LastCompoundAssignment:
      value = 'LastCompoundAssignment';
      break;
    case SyntaxKind.FirstReservedWord:
      value = 'FirstReservedWord';
      break;
    case SyntaxKind.LastReservedWord:
      value = 'LastReservedWord';
      break;
    case SyntaxKind.FirstKeyword:
      value = 'FirstKeyword';
      break;
    case SyntaxKind.LastKeyword:
      value = 'LastKeyword';
      break;
    case SyntaxKind.FirstFutureReservedWord:
      value = 'FirstFutureReservedWord';
      break;
    case SyntaxKind.LastFutureReservedWord:
      value = 'LastFutureReservedWord';
      break;
    case SyntaxKind.FirstTypeNode:
      value = 'FirstTypeNode';
      break;
    case SyntaxKind.LastTypeNode:
      value = 'LastTypeNode';
      break;
    case SyntaxKind.FirstPunctuation:
      value = 'FirstPunctuation';
      break;
    case SyntaxKind.LastPunctuation:
      value = 'LastPunctuation';
      break;
    case SyntaxKind.FirstToken:
      value = 'FirstToken';
      break;
    case SyntaxKind.LastToken:
      value = 'LastToken';
      break;
    case SyntaxKind.FirstTriviaToken:
      value = 'FirstTriviaToken';
      break;
    case SyntaxKind.LastTriviaToken:
      value = 'LastTriviaToken';
      break;
    case SyntaxKind.FirstLiteralToken:
      value = 'FirstLiteralToken';
      break;
    case SyntaxKind.LastLiteralToken:
      value = 'LastLiteralToken';
      break;
    case SyntaxKind.FirstTemplateToken:
      value = 'FirstTemplateToken';
      break;
    case SyntaxKind.LastTemplateToken:
      value = 'LastTemplateToken';
      break;
    case SyntaxKind.FirstBinaryOperator:
      value = 'FirstBinaryOperator';
      break;
    case SyntaxKind.LastBinaryOperator:
      value = 'LastBinaryOperator';
      break;
    case SyntaxKind.FirstStatement:
      value = 'FirstStatement';
      break;
    case SyntaxKind.LastStatement:
      value = 'LastStatement';
      break;
    case SyntaxKind.FirstNode:
      value = 'FirstNode';
      break;
    case SyntaxKind.FirstJSDocNode:
      value = 'FirstJSDocNode';
      break;
    case SyntaxKind.LastJSDocNode:
      value = 'LastJSDocNode';
      break;
    case SyntaxKind.FirstJSDocTagNode:
      value = 'FirstJSDocTagNode';
      break;
    case SyntaxKind.LastJSDocTagNode:
      value = 'LastJSDocTagNode';
      break;
  }

  return value;
}
