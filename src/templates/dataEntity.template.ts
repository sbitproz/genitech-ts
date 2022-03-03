import { Config, Schema } from "@interfaces/buildBase.interface";
import { translate } from "../util/buildBase/buildBase";
import { moduleLibLocation } from "../util/commands/package.helpers";
import { MODULE } from "../config/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";

const generate = (config: Config, entity: Schema) => {
  const template = `
import { baseAPI } from './data.conf';

const getUrl = () => \`{{refs}}/\`;

const getUrlWithId = (id: string) => \`{{refs}}/\${id}\`;

export const {{refs}}API = baseAPI(getUrl, getUrlWithId);
  `

  return {
    template: translate(template,config, entity),
    title: `Data entity template`,
    fileName: `${moduleLibLocation(MODULE.DATA)}${entity.variations.ref}.service.ts`,
  };
};

const DataGenerator: GeneratorEntity = {
  generate,
};

export default DataGenerator;