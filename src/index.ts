import { createSourceFile, ScriptTarget, } from 'typescript';
import { readFileSync } from 'fs';
import { basename } from 'path';
import { SourceAnalyzer } from "./analyzers/source_analyzer";
import { ClassDescription } from "./types";

export * from "./types";
export * from "./utils";

const analyzer = new SourceAnalyzer();

export function analyze_file(file_path: string): ClassDescription[] {
  const read_file = readFileSync(file_path, {encoding: 'utf8'});
  const source_file = createSourceFile(basename(file_path), read_file, ScriptTarget.Latest);

  return analyzer.analyze(source_file).class_declarations;
}
