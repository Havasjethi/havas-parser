"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
test('Test_1', function () {
    var result = src_1.analyze_file('./tests/test_files/A.ts');
    console.log(result);
    expect(result.length).not.toBe(0);
    var only_class = result[0];
    expect(only_class.name).toBe('A');
    expect(only_class.methods.length).toBe(1); // Constructor is a method
    expect(only_class.properties).toContainEqual({
        name: 'x',
        type: { type: src_1.UnifiedTypes.Number },
        access_modifier: ['public']
    });
});
