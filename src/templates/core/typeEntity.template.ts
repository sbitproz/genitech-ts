import { Config, Schema } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";
import { MODULE } from "@config/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";

const generate = (config: Config, entity: Schema) => {
  const template = `
export interface {{model}} {
{{#each fields}}
  {{this.fieldname}}: {{calculateTypes this.type}};
{{/each}}
}
  `

  return {
    template: translate(template,config, entity),
    title: `Interface template`,
    fileName: `${moduleLibLocation(MODULE.INTERFACE)}${entity.variations.ref}.interfaces.ts`,
  };
};

const InterfaceGenerator: GeneratorEntity = {
  generate,
};

export default InterfaceGenerator;