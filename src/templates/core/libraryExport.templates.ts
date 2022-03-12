import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleRootLocation } from "commands/package.helpers";
import { Generator } from "@interfaces/template.interface";

const generate = (config: Config, module: string, files: string[], barrelDirSuffix: string = '', relativeImportLocation?: string) => {
  const template = `
  {{#each files}}  
export * from './${relativeImportLocation ?? 'lib/'}{{this}}';
  {{/each}}
  `

  return {
    template: translate(template, config, {files: files}),
    title: `Library exports`,
    fileName: `${moduleRootLocation(module)}${barrelDirSuffix}index.ts`,
  };
};

const LibraryGenerator: Generator = {
  generate,
};

export default LibraryGenerator;