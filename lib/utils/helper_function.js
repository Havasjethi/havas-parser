"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdentifierName = exports.has_jsdoc = exports.is_identifier = exports.print_type = void 0;
var typescript_1 = require("typescript");
var get_node_type_1 = require("./get_node_type");
function print_type(statement) {
    console.log(get_node_type_1.get_node_type(statement));
}
exports.print_type = print_type;
function untangle(expression) {
    // TODO :: Analyze expression, it be readable, Like (3), (new A())
    return expression;
}
function is_identifier(x) {
    return x.escapedText !== undefined;
}
exports.is_identifier = is_identifier;
function has_jsdoc(node) {
    return node.hasOwnProperty('jsDoc');
}
exports.has_jsdoc = has_jsdoc;
function getIdentifierName(input) {
    var str = '';
    if (!input) {
        return str;
    }
    switch (input.kind) {
        case (typescript_1.SyntaxKind.Identifier):
            str = input.escapedText.toString();
            break;
        case (typescript_1.SyntaxKind.PropertyAccessExpression):
            str = input.name.escapedText.toString();
            break;
        case typescript_1.SyntaxKind.StringLiteral:
        case typescript_1.SyntaxKind.NumericLiteral:
            str = input.text;
            break;
        case typescript_1.SyntaxKind.ComputedPropertyName:
        case typescript_1.SyntaxKind.PrivateIdentifier:
            console.log('ComputedPropertyName / PrivateIdentifier found');
            break;
    }
    return str;
}
exports.getIdentifierName = getIdentifierName;
