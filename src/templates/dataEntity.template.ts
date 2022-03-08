import { Config, Schema } from "@interfaces/buildBase.interface";
import { translate } from "../util/buildBase/buildBase";
import { moduleLibLocation } from "../util/commands/package.helpers";
import { MODULE } from "../config/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";
import { firebaseSnippets } from "../snippets/firebase.snippets";

const generate = (config: Config, entity: Schema) => {
  const template = `
import { baseAPI } from './data.conf';
import { {{model}} } from '@{{name}}/${MODULE.INTERFACE}';

const getUrl = () => \`{{refs}}${firebaseSnippets.apiSuffix}\`;

const getUrlWithId = (id: string) => \`{{refs}}/\${id}${firebaseSnippets.apiSuffix}\`;

export const {{refs}}API = baseAPI<{{model}}>(getUrl, getUrlWithId);
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