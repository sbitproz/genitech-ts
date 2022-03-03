import { Config } from "../interfaces/buildBase.interface";
import { translate } from "../util/buildBase/buildBase";
import { moduleLibLocation } from "../util/commands/package.helpers";
import { MODULE } from "../config/module.constants";
import { Generator } from "../interfaces/template.interface";

const generate = (config: Config) => {
  const template = `
import axios from 'axios';

const BASE_URL = {
  dev: "http://localhost:3004/",
  prod: "${config.baseEndpoint}",
}

export interface BaseEntity {
  id: string;
}

const api = axios.create({
  baseURL: BASE_URL.dev,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

const load = (getUrl: Function) => () => api.get(\`\${getUrl()}\`)

const find = (getUrlWithId: Function) => (id: string) => api.get(\`\${getUrlWithId(id)}\`)

const create = (getUrl: Function) => (entity: BaseEntity) => api.post(\`\${getUrl()}\`, entity)

const update = (getUrlWithId: Function) => (entity: BaseEntity) => api.patch(\`\${getUrlWithId(entity.id)}\`, entity)

const remove = (getUrlWithId: Function) => (id: string) => api.delete(\`\${getUrlWithId(id)}\`)

export const baseAPI = (getUrl: Function, getUrlWithId: Function) => ({
  load: load(getUrl),
  find: find(getUrlWithId),
  create: create(getUrl),
  update: update(getUrlWithId),
  remove: remove(getUrlWithId)
}) 
  `

  return {
    template: translate(template,config),
    title: `Data config template`,
    fileName: `${moduleLibLocation(MODULE.DATA)}data.conf.ts`,
  };
};

const DataGenerator: Generator = {
  generate,
};

export default DataGenerator;