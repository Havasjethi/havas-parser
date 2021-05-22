"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_node_type = void 0;
var typescript_1 = require("typescript");
function get_node_type(some) {
    var value = '';
    switch (some.kind) {
        case typescript_1.SyntaxKind.Unknown:
            value = 'Unknown';
            break;
        case typescript_1.SyntaxKind.EndOfFileToken:
            value = 'EndOfFileToken';
            break;
        case typescript_1.SyntaxKind.SingleLineCommentTrivia:
            value = 'SingleLineCommentTrivia';
            break;
        case typescript_1.SyntaxKind.MultiLineCommentTrivia:
            value = 'MultiLineCommentTrivia';
            break;
        case typescript_1.SyntaxKind.NewLineTrivia:
            value = 'NewLineTrivia';
            break;
        case typescript_1.SyntaxKind.WhitespaceTrivia:
            value = 'WhitespaceTrivia';
            break;
        case typescript_1.SyntaxKind.ShebangTrivia:
            value = 'ShebangTrivia';
            break;
        case typescript_1.SyntaxKind.ConflictMarkerTrivia:
            value = 'ConflictMarkerTrivia';
            break;
        case typescript_1.SyntaxKind.NumericLiteral:
            value = 'NumericLiteral';
            break;
        case typescript_1.SyntaxKind.BigIntLiteral:
            value = 'BigIntLiteral';
            break;
        case typescript_1.SyntaxKind.StringLiteral:
            value = 'StringLiteral';
            break;
        case typescript_1.SyntaxKind.JsxText:
            value = 'JsxText';
            break;
        case typescript_1.SyntaxKind.JsxTextAllWhiteSpaces:
            value = 'JsxTextAllWhiteSpaces';
            break;
        case typescript_1.SyntaxKind.RegularExpressionLiteral:
            value = 'RegularExpressionLiteral';
            break;
        case typescript_1.SyntaxKind.NoSubstitutionTemplateLiteral:
            value = 'NoSubstitutionTemplateLiteral';
            break;
        case typescript_1.SyntaxKind.TemplateHead:
            value = 'TemplateHead';
            break;
        case typescript_1.SyntaxKind.TemplateMiddle:
            value = 'TemplateMiddle';
            break;
        case typescript_1.SyntaxKind.TemplateTail:
            value = 'TemplateTail';
            break;
        case typescript_1.SyntaxKind.OpenBraceToken:
            value = 'OpenBraceToken';
            break;
        case typescript_1.SyntaxKind.CloseBraceToken:
            value = 'CloseBraceToken';
            break;
        case typescript_1.SyntaxKind.OpenParenToken:
            value = 'OpenParenToken';
            break;
        case typescript_1.SyntaxKind.CloseParenToken:
            value = 'CloseParenToken';
            break;
        case typescript_1.SyntaxKind.OpenBracketToken:
            value = 'OpenBracketToken';
            break;
        case typescript_1.SyntaxKind.CloseBracketToken:
            value = 'CloseBracketToken';
            break;
        case typescript_1.SyntaxKind.DotToken:
            value = 'DotToken';
            break;
        case typescript_1.SyntaxKind.DotDotDotToken:
            value = 'DotDotDotToken';
            break;
        case typescript_1.SyntaxKind.SemicolonToken:
            value = 'SemicolonToken';
            break;
        case typescript_1.SyntaxKind.CommaToken:
            value = 'CommaToken';
            break;
        case typescript_1.SyntaxKind.QuestionDotToken:
            value = 'QuestionDotToken';
            break;
        case typescript_1.SyntaxKind.LessThanToken:
            value = 'LessThanToken';
            break;
        case typescript_1.SyntaxKind.LessThanSlashToken:
            value = 'LessThanSlashToken';
            break;
        case typescript_1.SyntaxKind.GreaterThanToken:
            value = 'GreaterThanToken';
            break;
        case typescript_1.SyntaxKind.LessThanEqualsToken:
            value = 'LessThanEqualsToken';
            break;
        case typescript_1.SyntaxKind.GreaterThanEqualsToken:
            value = 'GreaterThanEqualsToken';
            break;
        case typescript_1.SyntaxKind.EqualsEqualsToken:
            value = 'EqualsEqualsToken';
            break;
        case typescript_1.SyntaxKind.ExclamationEqualsToken:
            value = 'ExclamationEqualsToken';
            break;
        case typescript_1.SyntaxKind.EqualsEqualsEqualsToken:
            value = 'EqualsEqualsEqualsToken';
            break;
        case typescript_1.SyntaxKind.ExclamationEqualsEqualsToken:
            value = 'ExclamationEqualsEqualsToken';
            break;
        case typescript_1.SyntaxKind.EqualsGreaterThanToken:
            value = 'EqualsGreaterThanToken';
            break;
        case typescript_1.SyntaxKind.PlusToken:
            value = 'PlusToken';
            break;
        case typescript_1.SyntaxKind.MinusToken:
            value = 'MinusToken';
            break;
        case typescript_1.SyntaxKind.AsteriskToken:
            value = 'AsteriskToken';
            break;
        case typescript_1.SyntaxKind.AsteriskAsteriskToken:
            value = 'AsteriskAsteriskToken';
            break;
        case typescript_1.SyntaxKind.SlashToken:
            value = 'SlashToken';
            break;
        case typescript_1.SyntaxKind.PercentToken:
            value = 'PercentToken';
            break;
        case typescript_1.SyntaxKind.PlusPlusToken:
            value = 'PlusPlusToken';
            break;
        case typescript_1.SyntaxKind.MinusMinusToken:
            value = 'MinusMinusToken';
            break;
        case typescript_1.SyntaxKind.LessThanLessThanToken:
            value = 'LessThanLessThanToken';
            break;
        case typescript_1.SyntaxKind.GreaterThanGreaterThanToken:
            value = 'GreaterThanGreaterThanToken';
            break;
        case typescript_1.SyntaxKind.GreaterThanGreaterThanGreaterThanToken:
            value = 'GreaterThanGreaterThanGreaterThanToken';
            break;
        case typescript_1.SyntaxKind.AmpersandToken:
            value = 'AmpersandToken';
            break;
        case typescript_1.SyntaxKind.BarToken:
            value = 'BarToken';
            break;
        case typescript_1.SyntaxKind.CaretToken:
            value = 'CaretToken';
            break;
        case typescript_1.SyntaxKind.ExclamationToken:
            value = 'ExclamationToken';
            break;
        case typescript_1.SyntaxKind.TildeToken:
            value = 'TildeToken';
            break;
        case typescript_1.SyntaxKind.AmpersandAmpersandToken:
            value = 'AmpersandAmpersandToken';
            break;
        case typescript_1.SyntaxKind.BarBarToken:
            value = 'BarBarToken';
            break;
        case typescript_1.SyntaxKind.QuestionToken:
            value = 'QuestionToken';
            break;
        case typescript_1.SyntaxKind.ColonToken:
            value = 'ColonToken';
            break;
        case typescript_1.SyntaxKind.AtToken:
            value = 'AtToken';
            break;
        case typescript_1.SyntaxKind.QuestionQuestionToken:
            value = 'QuestionQuestionToken';
            break;
        case typescript_1.SyntaxKind.BacktickToken:
            value = 'BacktickToken';
            break;
        case typescript_1.SyntaxKind.EqualsToken:
            value = 'EqualsToken';
            break;
        case typescript_1.SyntaxKind.PlusEqualsToken:
            value = 'PlusEqualsToken';
            break;
        case typescript_1.SyntaxKind.MinusEqualsToken:
            value = 'MinusEqualsToken';
            break;
        case typescript_1.SyntaxKind.AsteriskEqualsToken:
            value = 'AsteriskEqualsToken';
            break;
        case typescript_1.SyntaxKind.AsteriskAsteriskEqualsToken:
            value = 'AsteriskAsteriskEqualsToken';
            break;
        case typescript_1.SyntaxKind.SlashEqualsToken:
            value = 'SlashEqualsToken';
            break;
        case typescript_1.SyntaxKind.PercentEqualsToken:
            value = 'PercentEqualsToken';
            break;
        case typescript_1.SyntaxKind.LessThanLessThanEqualsToken:
            value = 'LessThanLessThanEqualsToken';
            break;
        case typescript_1.SyntaxKind.GreaterThanGreaterThanEqualsToken:
            value = 'GreaterThanGreaterThanEqualsToken';
            break;
        case typescript_1.SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken:
            value = 'GreaterThanGreaterThanGreaterThanEqualsToken';
            break;
        case typescript_1.SyntaxKind.AmpersandEqualsToken:
            value = 'AmpersandEqualsToken';
            break;
        case typescript_1.SyntaxKind.BarEqualsToken:
            value = 'BarEqualsToken';
            break;
        case typescript_1.SyntaxKind.BarBarEqualsToken:
            value = 'BarBarEqualsToken';
            break;
        case typescript_1.SyntaxKind.AmpersandAmpersandEqualsToken:
            value = 'AmpersandAmpersandEqualsToken';
            break;
        case typescript_1.SyntaxKind.QuestionQuestionEqualsToken:
            value = 'QuestionQuestionEqualsToken';
            break;
        case typescript_1.SyntaxKind.CaretEqualsToken:
            value = 'CaretEqualsToken';
            break;
        case typescript_1.SyntaxKind.Identifier:
            value = 'Identifier';
            break;
        case typescript_1.SyntaxKind.PrivateIdentifier:
            value = 'PrivateIdentifier';
            break;
        case typescript_1.SyntaxKind.BreakKeyword:
            value = 'BreakKeyword';
            break;
        case typescript_1.SyntaxKind.CaseKeyword:
            value = 'CaseKeyword';
            break;
        case typescript_1.SyntaxKind.CatchKeyword:
            value = 'CatchKeyword';
            break;
        case typescript_1.SyntaxKind.ClassKeyword:
            value = 'ClassKeyword';
            break;
        case typescript_1.SyntaxKind.ConstKeyword:
            value = 'ConstKeyword';
            break;
        case typescript_1.SyntaxKind.ContinueKeyword:
            value = 'ContinueKeyword';
            break;
        case typescript_1.SyntaxKind.DebuggerKeyword:
            value = 'DebuggerKeyword';
            break;
        case typescript_1.SyntaxKind.DefaultKeyword:
            value = 'DefaultKeyword';
            break;
        case typescript_1.SyntaxKind.DeleteKeyword:
            value = 'DeleteKeyword';
            break;
        case typescript_1.SyntaxKind.DoKeyword:
            value = 'DoKeyword';
            break;
        case typescript_1.SyntaxKind.ElseKeyword:
            value = 'ElseKeyword';
            break;
        case typescript_1.SyntaxKind.EnumKeyword:
            value = 'EnumKeyword';
            break;
        case typescript_1.SyntaxKind.ExportKeyword:
            value = 'ExportKeyword';
            break;
        case typescript_1.SyntaxKind.ExtendsKeyword:
            value = 'ExtendsKeyword';
            break;
        case typescript_1.SyntaxKind.FalseKeyword:
            value = 'FalseKeyword';
            break;
        case typescript_1.SyntaxKind.FinallyKeyword:
            value = 'FinallyKeyword';
            break;
        case typescript_1.SyntaxKind.ForKeyword:
            value = 'ForKeyword';
            break;
        case typescript_1.SyntaxKind.FunctionKeyword:
            value = 'FunctionKeyword';
            break;
        case typescript_1.SyntaxKind.IfKeyword:
            value = 'IfKeyword';
            break;
        case typescript_1.SyntaxKind.ImportKeyword:
            value = 'ImportKeyword';
            break;
        case typescript_1.SyntaxKind.InKeyword:
            value = 'InKeyword';
            break;
        case typescript_1.SyntaxKind.InstanceOfKeyword:
            value = 'InstanceOfKeyword';
            break;
        case typescript_1.SyntaxKind.NewKeyword:
            value = 'NewKeyword';
            break;
        case typescript_1.SyntaxKind.NullKeyword:
            value = 'NullKeyword';
            break;
        case typescript_1.SyntaxKind.ReturnKeyword:
            value = 'ReturnKeyword';
            break;
        case typescript_1.SyntaxKind.SuperKeyword:
            value = 'SuperKeyword';
            break;
        case typescript_1.SyntaxKind.SwitchKeyword:
            value = 'SwitchKeyword';
            break;
        case typescript_1.SyntaxKind.ThisKeyword:
            value = 'ThisKeyword';
            break;
        case typescript_1.SyntaxKind.ThrowKeyword:
            value = 'ThrowKeyword';
            break;
        case typescript_1.SyntaxKind.TrueKeyword:
            value = 'TrueKeyword';
            break;
        case typescript_1.SyntaxKind.TryKeyword:
            value = 'TryKeyword';
            break;
        case typescript_1.SyntaxKind.TypeOfKeyword:
            value = 'TypeOfKeyword';
            break;
        case typescript_1.SyntaxKind.VarKeyword:
            value = 'VarKeyword';
            break;
        case typescript_1.SyntaxKind.VoidKeyword:
            value = 'VoidKeyword';
            break;
        case typescript_1.SyntaxKind.WhileKeyword:
            value = 'WhileKeyword';
            break;
        case typescript_1.SyntaxKind.WithKeyword:
            value = 'WithKeyword';
            break;
        case typescript_1.SyntaxKind.ImplementsKeyword:
            value = 'ImplementsKeyword';
            break;
        case typescript_1.SyntaxKind.InterfaceKeyword:
            value = 'InterfaceKeyword';
            break;
        case typescript_1.SyntaxKind.LetKeyword:
            value = 'LetKeyword';
            break;
        case typescript_1.SyntaxKind.PackageKeyword:
            value = 'PackageKeyword';
            break;
        case typescript_1.SyntaxKind.PrivateKeyword:
            value = 'PrivateKeyword';
            break;
        case typescript_1.SyntaxKind.ProtectedKeyword:
            value = 'ProtectedKeyword';
            break;
        case typescript_1.SyntaxKind.PublicKeyword:
            value = 'PublicKeyword';
            break;
        case typescript_1.SyntaxKind.StaticKeyword:
            value = 'StaticKeyword';
            break;
        case typescript_1.SyntaxKind.YieldKeyword:
            value = 'YieldKeyword';
            break;
        case typescript_1.SyntaxKind.AbstractKeyword:
            value = 'AbstractKeyword';
            break;
        case typescript_1.SyntaxKind.AsKeyword:
            value = 'AsKeyword';
            break;
        case typescript_1.SyntaxKind.AssertsKeyword:
            value = 'AssertsKeyword';
            break;
        case typescript_1.SyntaxKind.AnyKeyword:
            value = 'AnyKeyword';
            break;
        case typescript_1.SyntaxKind.AsyncKeyword:
            value = 'AsyncKeyword';
            break;
        case typescript_1.SyntaxKind.AwaitKeyword:
            value = 'AwaitKeyword';
            break;
        case typescript_1.SyntaxKind.BooleanKeyword:
            value = 'BooleanKeyword';
            break;
        case typescript_1.SyntaxKind.ConstructorKeyword:
            value = 'ConstructorKeyword';
            break;
        case typescript_1.SyntaxKind.DeclareKeyword:
            value = 'DeclareKeyword';
            break;
        case typescript_1.SyntaxKind.GetKeyword:
            value = 'GetKeyword';
            break;
        case typescript_1.SyntaxKind.InferKeyword:
            value = 'InferKeyword';
            break;
        case typescript_1.SyntaxKind.IntrinsicKeyword:
            value = 'IntrinsicKeyword';
            break;
        case typescript_1.SyntaxKind.IsKeyword:
            value = 'IsKeyword';
            break;
        case typescript_1.SyntaxKind.KeyOfKeyword:
            value = 'KeyOfKeyword';
            break;
        case typescript_1.SyntaxKind.ModuleKeyword:
            value = 'ModuleKeyword';
            break;
        case typescript_1.SyntaxKind.NamespaceKeyword:
            value = 'NamespaceKeyword';
            break;
        case typescript_1.SyntaxKind.NeverKeyword:
            value = 'NeverKeyword';
            break;
        case typescript_1.SyntaxKind.ReadonlyKeyword:
            value = 'ReadonlyKeyword';
            break;
        case typescript_1.SyntaxKind.RequireKeyword:
            value = 'RequireKeyword';
            break;
        case typescript_1.SyntaxKind.NumberKeyword:
            value = 'NumberKeyword';
            break;
        case typescript_1.SyntaxKind.ObjectKeyword:
            value = 'ObjectKeyword';
            break;
        case typescript_1.SyntaxKind.SetKeyword:
            value = 'SetKeyword';
            break;
        case typescript_1.SyntaxKind.StringKeyword:
            value = 'StringKeyword';
            break;
        case typescript_1.SyntaxKind.SymbolKeyword:
            value = 'SymbolKeyword';
            break;
        case typescript_1.SyntaxKind.TypeKeyword:
            value = 'TypeKeyword';
            break;
        case typescript_1.SyntaxKind.UndefinedKeyword:
            value = 'UndefinedKeyword';
            break;
        case typescript_1.SyntaxKind.UniqueKeyword:
            value = 'UniqueKeyword';
            break;
        case typescript_1.SyntaxKind.UnknownKeyword:
            value = 'UnknownKeyword';
            break;
        case typescript_1.SyntaxKind.FromKeyword:
            value = 'FromKeyword';
            break;
        case typescript_1.SyntaxKind.GlobalKeyword:
            value = 'GlobalKeyword';
            break;
        case typescript_1.SyntaxKind.BigIntKeyword:
            value = 'BigIntKeyword';
            break;
        case typescript_1.SyntaxKind.OfKeyword:
            value = 'OfKeyword';
            break;
        case typescript_1.SyntaxKind.QualifiedName:
            value = 'QualifiedName';
            break;
        case typescript_1.SyntaxKind.ComputedPropertyName:
            value = 'ComputedPropertyName';
            break;
        case typescript_1.SyntaxKind.TypeParameter:
            value = 'TypeParameter';
            break;
        case typescript_1.SyntaxKind.Parameter:
            value = 'Parameter';
            break;
        case typescript_1.SyntaxKind.Decorator:
            value = 'Decorator';
            break;
        case typescript_1.SyntaxKind.PropertySignature:
            value = 'PropertySignature';
            break;
        case typescript_1.SyntaxKind.PropertyDeclaration:
            value = 'PropertyDeclaration';
            break;
        case typescript_1.SyntaxKind.MethodSignature:
            value = 'MethodSignature';
            break;
        case typescript_1.SyntaxKind.MethodDeclaration:
            value = 'MethodDeclaration';
            break;
        case typescript_1.SyntaxKind.Constructor:
            value = 'Constructor';
            break;
        case typescript_1.SyntaxKind.GetAccessor:
            value = 'GetAccessor';
            break;
        case typescript_1.SyntaxKind.SetAccessor:
            value = 'SetAccessor';
            break;
        case typescript_1.SyntaxKind.CallSignature:
            value = 'CallSignature';
            break;
        case typescript_1.SyntaxKind.ConstructSignature:
            value = 'ConstructSignature';
            break;
        case typescript_1.SyntaxKind.IndexSignature:
            value = 'IndexSignature';
            break;
        case typescript_1.SyntaxKind.TypePredicate:
            value = 'TypePredicate';
            break;
        case typescript_1.SyntaxKind.TypeReference:
            value = 'TypeReference';
            break;
        case typescript_1.SyntaxKind.FunctionType:
            value = 'FunctionType';
            break;
        case typescript_1.SyntaxKind.ConstructorType:
            value = 'ConstructorType';
            break;
        case typescript_1.SyntaxKind.TypeQuery:
            value = 'TypeQuery';
            break;
        case typescript_1.SyntaxKind.TypeLiteral:
            value = 'TypeLiteral';
            break;
        case typescript_1.SyntaxKind.ArrayType:
            value = 'ArrayType';
            break;
        case typescript_1.SyntaxKind.TupleType:
            value = 'TupleType';
            break;
        case typescript_1.SyntaxKind.OptionalType:
            value = 'OptionalType';
            break;
        case typescript_1.SyntaxKind.RestType:
            value = 'RestType';
            break;
        case typescript_1.SyntaxKind.UnionType:
            value = 'UnionType';
            break;
        case typescript_1.SyntaxKind.IntersectionType:
            value = 'IntersectionType';
            break;
        case typescript_1.SyntaxKind.ConditionalType:
            value = 'ConditionalType';
            break;
        case typescript_1.SyntaxKind.InferType:
            value = 'InferType';
            break;
        case typescript_1.SyntaxKind.ParenthesizedType:
            value = 'ParenthesizedType';
            break;
        case typescript_1.SyntaxKind.ThisType:
            value = 'ThisType';
            break;
        case typescript_1.SyntaxKind.TypeOperator:
            value = 'TypeOperator';
            break;
        case typescript_1.SyntaxKind.IndexedAccessType:
            value = 'IndexedAccessType';
            break;
        case typescript_1.SyntaxKind.MappedType:
            value = 'MappedType';
            break;
        case typescript_1.SyntaxKind.LiteralType:
            value = 'LiteralType';
            break;
        case typescript_1.SyntaxKind.NamedTupleMember:
            value = 'NamedTupleMember';
            break;
        case typescript_1.SyntaxKind.TemplateLiteralType:
            value = 'TemplateLiteralType';
            break;
        case typescript_1.SyntaxKind.TemplateLiteralTypeSpan:
            value = 'TemplateLiteralTypeSpan';
            break;
        case typescript_1.SyntaxKind.ImportType:
            value = 'ImportType';
            break;
        case typescript_1.SyntaxKind.ObjectBindingPattern:
            value = 'ObjectBindingPattern';
            break;
        case typescript_1.SyntaxKind.ArrayBindingPattern:
            value = 'ArrayBindingPattern';
            break;
        case typescript_1.SyntaxKind.BindingElement:
            value = 'BindingElement';
            break;
        case typescript_1.SyntaxKind.ArrayLiteralExpression:
            value = 'ArrayLiteralExpression';
            break;
        case typescript_1.SyntaxKind.ObjectLiteralExpression:
            value = 'ObjectLiteralExpression';
            break;
        case typescript_1.SyntaxKind.PropertyAccessExpression:
            value = 'PropertyAccessExpression';
            break;
        case typescript_1.SyntaxKind.ElementAccessExpression:
            value = 'ElementAccessExpression';
            break;
        case typescript_1.SyntaxKind.CallExpression:
            value = 'CallExpression';
            break;
        case typescript_1.SyntaxKind.NewExpression:
            value = 'NewExpression';
            break;
        case typescript_1.SyntaxKind.TaggedTemplateExpression:
            value = 'TaggedTemplateExpression';
            break;
        case typescript_1.SyntaxKind.TypeAssertionExpression:
            value = 'TypeAssertionExpression';
            break;
        case typescript_1.SyntaxKind.ParenthesizedExpression:
            value = 'ParenthesizedExpression';
            break;
        case typescript_1.SyntaxKind.FunctionExpression:
            value = 'FunctionExpression';
            break;
        case typescript_1.SyntaxKind.ArrowFunction:
            value = 'ArrowFunction';
            break;
        case typescript_1.SyntaxKind.DeleteExpression:
            value = 'DeleteExpression';
            break;
        case typescript_1.SyntaxKind.TypeOfExpression:
            value = 'TypeOfExpression';
            break;
        case typescript_1.SyntaxKind.VoidExpression:
            value = 'VoidExpression';
            break;
        case typescript_1.SyntaxKind.AwaitExpression:
            value = 'AwaitExpression';
            break;
        case typescript_1.SyntaxKind.PrefixUnaryExpression:
            value = 'PrefixUnaryExpression';
            break;
        case typescript_1.SyntaxKind.PostfixUnaryExpression:
            value = 'PostfixUnaryExpression';
            break;
        case typescript_1.SyntaxKind.BinaryExpression:
            value = 'BinaryExpression';
            break;
        case typescript_1.SyntaxKind.ConditionalExpression:
            value = 'ConditionalExpression';
            break;
        case typescript_1.SyntaxKind.TemplateExpression:
            value = 'TemplateExpression';
            break;
        case typescript_1.SyntaxKind.YieldExpression:
            value = 'YieldExpression';
            break;
        case typescript_1.SyntaxKind.SpreadElement:
            value = 'SpreadElement';
            break;
        case typescript_1.SyntaxKind.ClassExpression:
            value = 'ClassExpression';
            break;
        case typescript_1.SyntaxKind.OmittedExpression:
            value = 'OmittedExpression';
            break;
        case typescript_1.SyntaxKind.ExpressionWithTypeArguments:
            value = 'ExpressionWithTypeArguments';
            break;
        case typescript_1.SyntaxKind.AsExpression:
            value = 'AsExpression';
            break;
        case typescript_1.SyntaxKind.NonNullExpression:
            value = 'NonNullExpression';
            break;
        case typescript_1.SyntaxKind.MetaProperty:
            value = 'MetaProperty';
            break;
        case typescript_1.SyntaxKind.SyntheticExpression:
            value = 'SyntheticExpression';
            break;
        case typescript_1.SyntaxKind.TemplateSpan:
            value = 'TemplateSpan';
            break;
        case typescript_1.SyntaxKind.SemicolonClassElement:
            value = 'SemicolonClassElement';
            break;
        case typescript_1.SyntaxKind.Block:
            value = 'Block';
            break;
        case typescript_1.SyntaxKind.EmptyStatement:
            value = 'EmptyStatement';
            break;
        case typescript_1.SyntaxKind.VariableStatement:
            value = 'VariableStatement';
            break;
        case typescript_1.SyntaxKind.ExpressionStatement:
            value = 'ExpressionStatement';
            break;
        case typescript_1.SyntaxKind.IfStatement:
            value = 'IfStatement';
            break;
        case typescript_1.SyntaxKind.DoStatement:
            value = 'DoStatement';
            break;
        case typescript_1.SyntaxKind.WhileStatement:
            value = 'WhileStatement';
            break;
        case typescript_1.SyntaxKind.ForStatement:
            value = 'ForStatement';
            break;
        case typescript_1.SyntaxKind.ForInStatement:
            value = 'ForInStatement';
            break;
        case typescript_1.SyntaxKind.ForOfStatement:
            value = 'ForOfStatement';
            break;
        case typescript_1.SyntaxKind.ContinueStatement:
            value = 'ContinueStatement';
            break;
        case typescript_1.SyntaxKind.BreakStatement:
            value = 'BreakStatement';
            break;
        case typescript_1.SyntaxKind.ReturnStatement:
            value = 'ReturnStatement';
            break;
        case typescript_1.SyntaxKind.WithStatement:
            value = 'WithStatement';
            break;
        case typescript_1.SyntaxKind.SwitchStatement:
            value = 'SwitchStatement';
            break;
        case typescript_1.SyntaxKind.LabeledStatement:
            value = 'LabeledStatement';
            break;
        case typescript_1.SyntaxKind.ThrowStatement:
            value = 'ThrowStatement';
            break;
        case typescript_1.SyntaxKind.TryStatement:
            value = 'TryStatement';
            break;
        case typescript_1.SyntaxKind.DebuggerStatement:
            value = 'DebuggerStatement';
            break;
        case typescript_1.SyntaxKind.VariableDeclaration:
            value = 'VariableDeclaration';
            break;
        case typescript_1.SyntaxKind.VariableDeclarationList:
            value = 'VariableDeclarationList';
            break;
        case typescript_1.SyntaxKind.FunctionDeclaration:
            value = 'FunctionDeclaration';
            break;
        case typescript_1.SyntaxKind.ClassDeclaration:
            value = 'ClassDeclaration';
            break;
        case typescript_1.SyntaxKind.InterfaceDeclaration:
            value = 'InterfaceDeclaration';
            break;
        case typescript_1.SyntaxKind.TypeAliasDeclaration:
            value = 'TypeAliasDeclaration';
            break;
        case typescript_1.SyntaxKind.EnumDeclaration:
            value = 'EnumDeclaration';
            break;
        case typescript_1.SyntaxKind.ModuleDeclaration:
            value = 'ModuleDeclaration';
            break;
        case typescript_1.SyntaxKind.ModuleBlock:
            value = 'ModuleBlock';
            break;
        case typescript_1.SyntaxKind.CaseBlock:
            value = 'CaseBlock';
            break;
        case typescript_1.SyntaxKind.NamespaceExportDeclaration:
            value = 'NamespaceExportDeclaration';
            break;
        case typescript_1.SyntaxKind.ImportEqualsDeclaration:
            value = 'ImportEqualsDeclaration';
            break;
        case typescript_1.SyntaxKind.ImportDeclaration:
            value = 'ImportDeclaration';
            break;
        case typescript_1.SyntaxKind.ImportClause:
            value = 'ImportClause';
            break;
        case typescript_1.SyntaxKind.NamespaceImport:
            value = 'NamespaceImport';
            break;
        case typescript_1.SyntaxKind.NamedImports:
            value = 'NamedImports';
            break;
        case typescript_1.SyntaxKind.ImportSpecifier:
            value = 'ImportSpecifier';
            break;
        case typescript_1.SyntaxKind.ExportAssignment:
            value = 'ExportAssignment';
            break;
        case typescript_1.SyntaxKind.ExportDeclaration:
            value = 'ExportDeclaration';
            break;
        case typescript_1.SyntaxKind.NamedExports:
            value = 'NamedExports';
            break;
        case typescript_1.SyntaxKind.NamespaceExport:
            value = 'NamespaceExport';
            break;
        case typescript_1.SyntaxKind.ExportSpecifier:
            value = 'ExportSpecifier';
            break;
        case typescript_1.SyntaxKind.MissingDeclaration:
            value = 'MissingDeclaration';
            break;
        case typescript_1.SyntaxKind.ExternalModuleReference:
            value = 'ExternalModuleReference';
            break;
        case typescript_1.SyntaxKind.JsxElement:
            value = 'JsxElement';
            break;
        case typescript_1.SyntaxKind.JsxSelfClosingElement:
            value = 'JsxSelfClosingElement';
            break;
        case typescript_1.SyntaxKind.JsxOpeningElement:
            value = 'JsxOpeningElement';
            break;
        case typescript_1.SyntaxKind.JsxClosingElement:
            value = 'JsxClosingElement';
            break;
        case typescript_1.SyntaxKind.JsxFragment:
            value = 'JsxFragment';
            break;
        case typescript_1.SyntaxKind.JsxOpeningFragment:
            value = 'JsxOpeningFragment';
            break;
        case typescript_1.SyntaxKind.JsxClosingFragment:
            value = 'JsxClosingFragment';
            break;
        case typescript_1.SyntaxKind.JsxAttribute:
            value = 'JsxAttribute';
            break;
        case typescript_1.SyntaxKind.JsxAttributes:
            value = 'JsxAttributes';
            break;
        case typescript_1.SyntaxKind.JsxSpreadAttribute:
            value = 'JsxSpreadAttribute';
            break;
        case typescript_1.SyntaxKind.JsxExpression:
            value = 'JsxExpression';
            break;
        case typescript_1.SyntaxKind.CaseClause:
            value = 'CaseClause';
            break;
        case typescript_1.SyntaxKind.DefaultClause:
            value = 'DefaultClause';
            break;
        case typescript_1.SyntaxKind.HeritageClause:
            value = 'HeritageClause';
            break;
        case typescript_1.SyntaxKind.CatchClause:
            value = 'CatchClause';
            break;
        case typescript_1.SyntaxKind.PropertyAssignment:
            value = 'PropertyAssignment';
            break;
        case typescript_1.SyntaxKind.ShorthandPropertyAssignment:
            value = 'ShorthandPropertyAssignment';
            break;
        case typescript_1.SyntaxKind.SpreadAssignment:
            value = 'SpreadAssignment';
            break;
        case typescript_1.SyntaxKind.EnumMember:
            value = 'EnumMember';
            break;
        case typescript_1.SyntaxKind.UnparsedPrologue:
            value = 'UnparsedPrologue';
            break;
        case typescript_1.SyntaxKind.UnparsedPrepend:
            value = 'UnparsedPrepend';
            break;
        case typescript_1.SyntaxKind.UnparsedText:
            value = 'UnparsedText';
            break;
        case typescript_1.SyntaxKind.UnparsedInternalText:
            value = 'UnparsedInternalText';
            break;
        case typescript_1.SyntaxKind.UnparsedSyntheticReference:
            value = 'UnparsedSyntheticReference';
            break;
        case typescript_1.SyntaxKind.SourceFile:
            value = 'SourceFile';
            break;
        case typescript_1.SyntaxKind.Bundle:
            value = 'Bundle';
            break;
        case typescript_1.SyntaxKind.UnparsedSource:
            value = 'UnparsedSource';
            break;
        case typescript_1.SyntaxKind.InputFiles:
            value = 'InputFiles';
            break;
        case typescript_1.SyntaxKind.JSDocTypeExpression:
            value = 'JSDocTypeExpression';
            break;
        case typescript_1.SyntaxKind.JSDocNameReference:
            value = 'JSDocNameReference';
            break;
        case typescript_1.SyntaxKind.JSDocAllType:
            value = 'JSDocAllType';
            break;
        case typescript_1.SyntaxKind.JSDocUnknownType:
            value = 'JSDocUnknownType';
            break;
        case typescript_1.SyntaxKind.JSDocNullableType:
            value = 'JSDocNullableType';
            break;
        case typescript_1.SyntaxKind.JSDocNonNullableType:
            value = 'JSDocNonNullableType';
            break;
        case typescript_1.SyntaxKind.JSDocOptionalType:
            value = 'JSDocOptionalType';
            break;
        case typescript_1.SyntaxKind.JSDocFunctionType:
            value = 'JSDocFunctionType';
            break;
        case typescript_1.SyntaxKind.JSDocVariadicType:
            value = 'JSDocVariadicType';
            break;
        case typescript_1.SyntaxKind.JSDocNamepathType:
            value = 'JSDocNamepathType';
            break;
        case typescript_1.SyntaxKind.JSDocComment:
            value = 'JSDocComment';
            break;
        case typescript_1.SyntaxKind.JSDocTypeLiteral:
            value = 'JSDocTypeLiteral';
            break;
        case typescript_1.SyntaxKind.JSDocSignature:
            value = 'JSDocSignature';
            break;
        case typescript_1.SyntaxKind.JSDocTag:
            value = 'JSDocTag';
            break;
        case typescript_1.SyntaxKind.JSDocAugmentsTag:
            value = 'JSDocAugmentsTag';
            break;
        case typescript_1.SyntaxKind.JSDocImplementsTag:
            value = 'JSDocImplementsTag';
            break;
        case typescript_1.SyntaxKind.JSDocAuthorTag:
            value = 'JSDocAuthorTag';
            break;
        case typescript_1.SyntaxKind.JSDocDeprecatedTag:
            value = 'JSDocDeprecatedTag';
            break;
        case typescript_1.SyntaxKind.JSDocClassTag:
            value = 'JSDocClassTag';
            break;
        case typescript_1.SyntaxKind.JSDocPublicTag:
            value = 'JSDocPublicTag';
            break;
        case typescript_1.SyntaxKind.JSDocPrivateTag:
            value = 'JSDocPrivateTag';
            break;
        case typescript_1.SyntaxKind.JSDocProtectedTag:
            value = 'JSDocProtectedTag';
            break;
        case typescript_1.SyntaxKind.JSDocReadonlyTag:
            value = 'JSDocReadonlyTag';
            break;
        case typescript_1.SyntaxKind.JSDocCallbackTag:
            value = 'JSDocCallbackTag';
            break;
        case typescript_1.SyntaxKind.JSDocEnumTag:
            value = 'JSDocEnumTag';
            break;
        case typescript_1.SyntaxKind.JSDocParameterTag:
            value = 'JSDocParameterTag';
            break;
        case typescript_1.SyntaxKind.JSDocReturnTag:
            value = 'JSDocReturnTag';
            break;
        case typescript_1.SyntaxKind.JSDocThisTag:
            value = 'JSDocThisTag';
            break;
        case typescript_1.SyntaxKind.JSDocTypeTag:
            value = 'JSDocTypeTag';
            break;
        case typescript_1.SyntaxKind.JSDocTemplateTag:
            value = 'JSDocTemplateTag';
            break;
        case typescript_1.SyntaxKind.JSDocTypedefTag:
            value = 'JSDocTypedefTag';
            break;
        case typescript_1.SyntaxKind.JSDocSeeTag:
            value = 'JSDocSeeTag';
            break;
        case typescript_1.SyntaxKind.JSDocPropertyTag:
            value = 'JSDocPropertyTag';
            break;
        case typescript_1.SyntaxKind.SyntaxList:
            value = 'SyntaxList';
            break;
        case typescript_1.SyntaxKind.NotEmittedStatement:
            value = 'NotEmittedStatement';
            break;
        case typescript_1.SyntaxKind.PartiallyEmittedExpression:
            value = 'PartiallyEmittedExpression';
            break;
        case typescript_1.SyntaxKind.CommaListExpression:
            value = 'CommaListExpression';
            break;
        case typescript_1.SyntaxKind.MergeDeclarationMarker:
            value = 'MergeDeclarationMarker';
            break;
        case typescript_1.SyntaxKind.EndOfDeclarationMarker:
            value = 'EndOfDeclarationMarker';
            break;
        case typescript_1.SyntaxKind.SyntheticReferenceExpression:
            value = 'SyntheticReferenceExpression';
            break;
        case typescript_1.SyntaxKind.Count:
            value = 'Count';
            break;
        case typescript_1.SyntaxKind.FirstAssignment:
            value = 'FirstAssignment';
            break;
        case typescript_1.SyntaxKind.LastAssignment:
            value = 'LastAssignment';
            break;
        case typescript_1.SyntaxKind.FirstCompoundAssignment:
            value = 'FirstCompoundAssignment';
            break;
        case typescript_1.SyntaxKind.LastCompoundAssignment:
            value = 'LastCompoundAssignment';
            break;
        case typescript_1.SyntaxKind.FirstReservedWord:
            value = 'FirstReservedWord';
            break;
        case typescript_1.SyntaxKind.LastReservedWord:
            value = 'LastReservedWord';
            break;
        case typescript_1.SyntaxKind.FirstKeyword:
            value = 'FirstKeyword';
            break;
        case typescript_1.SyntaxKind.LastKeyword:
            value = 'LastKeyword';
            break;
        case typescript_1.SyntaxKind.FirstFutureReservedWord:
            value = 'FirstFutureReservedWord';
            break;
        case typescript_1.SyntaxKind.LastFutureReservedWord:
            value = 'LastFutureReservedWord';
            break;
        case typescript_1.SyntaxKind.FirstTypeNode:
            value = 'FirstTypeNode';
            break;
        case typescript_1.SyntaxKind.LastTypeNode:
            value = 'LastTypeNode';
            break;
        case typescript_1.SyntaxKind.FirstPunctuation:
            value = 'FirstPunctuation';
            break;
        case typescript_1.SyntaxKind.LastPunctuation:
            value = 'LastPunctuation';
            break;
        case typescript_1.SyntaxKind.FirstToken:
            value = 'FirstToken';
            break;
        case typescript_1.SyntaxKind.LastToken:
            value = 'LastToken';
            break;
        case typescript_1.SyntaxKind.FirstTriviaToken:
            value = 'FirstTriviaToken';
            break;
        case typescript_1.SyntaxKind.LastTriviaToken:
            value = 'LastTriviaToken';
            break;
        case typescript_1.SyntaxKind.FirstLiteralToken:
            value = 'FirstLiteralToken';
            break;
        case typescript_1.SyntaxKind.LastLiteralToken:
            value = 'LastLiteralToken';
            break;
        case typescript_1.SyntaxKind.FirstTemplateToken:
            value = 'FirstTemplateToken';
            break;
        case typescript_1.SyntaxKind.LastTemplateToken:
            value = 'LastTemplateToken';
            break;
        case typescript_1.SyntaxKind.FirstBinaryOperator:
            value = 'FirstBinaryOperator';
            break;
        case typescript_1.SyntaxKind.LastBinaryOperator:
            value = 'LastBinaryOperator';
            break;
        case typescript_1.SyntaxKind.FirstStatement:
            value = 'FirstStatement';
            break;
        case typescript_1.SyntaxKind.LastStatement:
            value = 'LastStatement';
            break;
        case typescript_1.SyntaxKind.FirstNode:
            value = 'FirstNode';
            break;
        case typescript_1.SyntaxKind.FirstJSDocNode:
            value = 'FirstJSDocNode';
            break;
        case typescript_1.SyntaxKind.LastJSDocNode:
            value = 'LastJSDocNode';
            break;
        case typescript_1.SyntaxKind.FirstJSDocTagNode:
            value = 'FirstJSDocTagNode';
            break;
        case typescript_1.SyntaxKind.LastJSDocTagNode:
            value = 'LastJSDocTagNode';
            break;
    }
    return value;
}
exports.get_node_type = get_node_type;
