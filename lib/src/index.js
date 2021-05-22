"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyze_text = exports.analyze_file = void 0;
var typescript_1 = require("typescript");
var fs_1 = require("fs");
var path_1 = require("path");
var source_analyzer_1 = require("./analyzers/source_analyzer");
__exportStar(require("./types"), exports);
__exportStar(require("./utils"), exports);
var analyzer = new source_analyzer_1.SourceAnalyzer();
function analyze_file(file_path) {
    var read_file = fs_1.readFileSync(file_path, { encoding: 'utf8' });
    return analyze_text(path_1.basename(file_path), read_file, typescript_1.ScriptTarget.Latest);
}
exports.analyze_file = analyze_file;
function analyze_text(file_content, file_name, file_version) {
    if (file_version === void 0) { file_version = typescript_1.ScriptTarget.Latest; }
    var source_file = typescript_1.createSourceFile(file_name, file_content, file_version);
    return analyzer.analyze(source_file).class_declarations;
}
exports.analyze_text = analyze_text;
