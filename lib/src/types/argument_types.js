"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnifiedTypes = exports.ExtraValue = exports.ArgumentType = exports.ArgumentLiteral = void 0;
var ArgumentLiteral;
(function (ArgumentLiteral) {
    ArgumentLiteral["ObjectLiteralExpression"] = "ObjectLiteralExpression";
    ArgumentLiteral["StringLiteral"] = "StringLiteral";
    ArgumentLiteral["NumericLiteral"] = "NumericLiteral";
})(ArgumentLiteral = exports.ArgumentLiteral || (exports.ArgumentLiteral = {}));
var ArgumentType;
(function (ArgumentType) {
    ArgumentType["Identifier"] = "Identifier";
    ArgumentType["NullKeyword"] = "NullKeyword";
    ArgumentType["ArrowFunction"] = "ArrowFunction";
})(ArgumentType = exports.ArgumentType || (exports.ArgumentType = {}));
var ExtraValue;
(function (ExtraValue) {
    ExtraValue["Undefined"] = "Undefined";
    ExtraValue["Unknown"] = "Unknown";
    ExtraValue["Variable"] = "Variable";
    ExtraValue["FunctionCall"] = "FunctionCall";
    ExtraValue["Union"] = "Union";
    ExtraValue["Any"] = "Any";
    ExtraValue["Intersection"] = "Intersection";
    ExtraValue["Boolean"] = "Boolean";
    ExtraValue["Void"] = "Void";
    ExtraValue["Array"] = "Array";
})(ExtraValue = exports.ExtraValue || (exports.ExtraValue = {}));
var UnifiedTypes;
(function (UnifiedTypes) {
    UnifiedTypes["Object"] = "ObjectLiteralExpression";
    UnifiedTypes["String"] = "StringLiteral";
    UnifiedTypes["Number"] = "NumericLiteral";
    UnifiedTypes["Callable"] = "ArrowFunction";
    UnifiedTypes["Null"] = "NullKeyword";
    UnifiedTypes["Undefined"] = "Undefined";
    UnifiedTypes["Unknown"] = "Unknown";
    UnifiedTypes["Variable"] = "Variable";
    UnifiedTypes["FunctionCall"] = "FunctionCall";
    UnifiedTypes["Union"] = "Union";
    UnifiedTypes["Any"] = "Any";
    UnifiedTypes["Intersection"] = "Intersection";
    UnifiedTypes["Boolean"] = "Boolean";
    UnifiedTypes["Void"] = "Void";
    UnifiedTypes["Array"] = "Array";
})(UnifiedTypes = exports.UnifiedTypes || (exports.UnifiedTypes = {}));
