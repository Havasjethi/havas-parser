import {
  createAbstractBuilder,
  createProgram,
  createSourceFile,
  ScriptTarget,
  SourceFile,
  Statement, SyntaxKind
} from 'typescript';
import {readFileSync} from 'fs';
import {resolve} from 'path';
import { SourceAnalyzer } from "./utils";

const main = () => {
  test_1();
};

const test_1 = () => {
  const file_path = resolve(__dirname, '../test_files/recipe_router.ts');
  const read_file = readFileSync(file_path, {encoding: 'utf8'});
  const file = createSourceFile('salom.ts', read_file, ScriptTarget.Latest);

  const analyzer = new SourceAnalyzer(file);

  file.statements.forEach(e =>{
    if (e.kind === SyntaxKind.ClassDeclaration) {
      analyzer.builder(e);
    }
  });
};

const file_writer = (file: SourceFile) => (some: Statement) => {
  // console.log(some);
  const start = some.pos;
  const end = some.end;
  return file.text.slice(start, end);
};

main ();
