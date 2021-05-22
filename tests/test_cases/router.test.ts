import { analyze_file, UnifiedTypes } from "../../src";
import * as fs from "fs";

describe('Router test', () => {
  const result = analyze_file('./tests/test_files/router.ts')[0];

  test('Router found', () => {
    expect(result).toBeDefined()

  });
  test('Router - Name correct', () => {
    expect(result.name).toBe('UserRouter')

  });
  test('Router - @Path found', () => {
    const path_decor = result.decorators.find(e => e.name === 'Path');
    expect(path_decor).toBeDefined();
    if (path_decor) {
      expect(path_decor.parameters[0]).toBeDefined();
      expect(path_decor.parameters[0].value).toBe("'/user'");
    }

  });

  test('Router - Index method correct', () => {
    const index_method = result.methods.find(e => e.name === 'index');
    expect(index_method).toBeDefined();
    if (index_method){
      expect(index_method.decorators).toBeDefined();
      const get_decor = index_method.decorators![0];
      expect(get_decor.name).toBe('Get');
      expect(get_decor.parameters[0].value).toBe("'/'"); // Result will be "'/'"
    }

    expect(index_method!.parameters[0].name).toBe('req');
    expect(index_method!.parameters[1].name).toBe('res');
  });

  test('Router - GetById test', () => {
    const method = result.methods.find(e => e.name === 'get_by_id');
    expect(method).toBeDefined();
    if (!method) {
      throw new Error();
    }

    expect(method.parameters).toBeDefined()
    expect(method.parameters.length).toBe(1);
    expect(method.parameters[0].name).toBe('id');
    if (method.parameters[0].decorators === undefined) {
      throw new Error('Decorators missing');
    }
    expect(method.parameters[0].decorators[0].name).toBe('PathVariable');
    expect(method.parameters[0].decorators[0].parameters[0].type.type).toBe(UnifiedTypes.String);
    expect(method.parameters[0].decorators[0].parameters[0].value).toBe("'id'");
    expect(method.return_value.type).toBe(UnifiedTypes.Object);
    expect(method.return_value.name).toBe('User');
  });

});
