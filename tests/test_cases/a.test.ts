import { analyze_file, UnifiedTypes } from "../../src";

test('Test_1', () => {
  const result = analyze_file('./tests/test_files/A.ts');

  console.log(result);
  expect(result.length).not.toBe(0);

  const only_class = result[0];
  expect(only_class.name).toBe('A');
  expect(only_class.methods.length).toBe(1);  // Constructor is a method
  expect(only_class.properties).toContainEqual({
    name: 'x',
    type: {type: UnifiedTypes.Number},
    access_modifier: ['public']
  });
});
