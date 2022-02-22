import { Config } from "../interfaces/buildBase.interface";
import { GenerateReturn } from "../interfaces/template.interface";
import { translate } from "../util/buildBase/buildBase";

const generate = (config: Config, entity: string) => {
  const template = `
    const {{model}}Slice = {
      myslice: ''
    }
  `

  return {
    template: translate(template, config, entity),
    title: `Slice for ${entity}`,
    fileName: `libs/core-state/src/lib/slices/${entity}Slice.ts`,
  };
};

export interface Generator {
  generate: (config: Config, entity: string) => GenerateReturn;
}

const Generator: Generator = {
  generate,
};

export default Generator;