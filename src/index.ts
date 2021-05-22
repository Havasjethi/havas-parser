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

  return analyze_text(basename(file_path), read_file, ScriptTarget.Latest);
}

export function analyze_text(file_content: string, file_name: string, file_version = ScriptTarget.Latest): ClassDescription[] {
  const source_file = createSourceFile(file_content, file_name, file_version);

  return analyzer.analyze(source_file).class_declarations;
}
