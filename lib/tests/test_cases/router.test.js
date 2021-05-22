"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
var fs = __importStar(require("fs"));
describe('Router test', function () {
    var read_file = fs.readFileSync('./tests/test_files/router.txt', { encoding: "utf8" });
    var result = src_1.analyze_text(read_file, 'router.ts')[0];
    test('Router found', function () {
        expect(result).toBeDefined();
    });
    test('Router - Name correct', function () {
        expect(result.name).toBe('UserRouter');
    });
    test('Router - @Path found', function () {
        var path_decor = result.decorators.find(function (e) { return e.name === 'Path'; });
        expect(path_decor).toBeDefined();
        if (path_decor) {
            expect(path_decor.parameters[0]).toBeDefined();
            expect(path_decor.parameters[0].value).toBe("'/user'");
        }
    });
    test('Router - Index method correct', function () {
        var index_method = result.methods.find(function (e) { return e.name === 'index'; });
        expect(index_method).toBeDefined();
        if (index_method) {
            expect(index_method.decorators).toBeDefined();
            var get_decor = index_method.decorators[0];
            expect(get_decor.name).toBe('Get');
            expect(get_decor.parameters[0].value).toBe("'/'"); // Result will be "'/'"
        }
        expect(index_method.parameters[0].name).toBe('req');
        expect(index_method.parameters[1].name).toBe('res');
    });
    test('Router - GetById test', function () {
        var method = result.methods.find(function (e) { return e.name === 'get_by_id'; });
        expect(method).toBeDefined();
        if (!method) {
            throw new Error();
        }
        expect(method.parameters).toBeDefined();
        expect(method.parameters.length).toBe(1);
        expect(method.parameters[0].name).toBe('id');
        if (method.parameters[0].decorators === undefined) {
            throw new Error('Decorators missing');
        }
        expect(method.parameters[0].decorators[0].name).toBe('PathVariable');
        expect(method.parameters[0].decorators[0].parameters[0].type.type).toBe(src_1.UnifiedTypes.String);
        expect(method.parameters[0].decorators[0].parameters[0].value).toBe("'id'");
        expect(method.return_value.type).toBe(src_1.UnifiedTypes.Object);
        expect(method.return_value.name).toBe('User');
    });
});
