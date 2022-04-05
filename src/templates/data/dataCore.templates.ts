import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";
import { MODULE } from "@config/core/module.constants";
import { Generator } from "@interfaces/template.interface";
import { firebaseSnippets } from "../../snippets/firebase.snippets";

const generate = (config: Config) => {
  const template = `
import axios, { AxiosResponse } from 'axios';

const BASE_URL = {
  dev: "http://localhost:3004/",
  prod: "${config.firebaseAPI ? firebaseSnippets.baseEndpoint : config.baseEndpoint}",
}

export interface BaseEntity {
  id: string;
}

export const api = axios.create({
  baseURL: BASE_URL.dev,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const unwrapData = (response: AxiosResponse) => response.data

const load = <T>(getUrl: () => string) => (queryString = '') => api.get<T>(\`\${getUrl()}\${queryString}\`).then(unwrapData) as Promise<T[]>

const loadBy = <T>(getUrlWithFkId: (fieldName: string, id: string) => string) => (fieldName: string, id: string) => api.get<T>(\`\${getUrlWithFkId(fieldName,id)}\`).then(unwrapData) as Promise<T[]>

const find = <T>(getUrlWithId: (id: string) => string) => (id: string) => api.get<T>(\`\${getUrlWithId(id)}\`).then(unwrapData) as Promise<T>

const create = <T>(getUrl: () => string) => (entity: BaseEntity) => api.post<T>(\`\${getUrl()}\`, entity).then(unwrapData) as Promise<T>

const update = <T>(getUrlWithId: (id: string) => string) => (entity: BaseEntity) => api.patch<T>(\`\${getUrlWithId(entity.id)}\`, entity).then(unwrapData) as Promise<T>

const remove = <T>(getUrlWithId: (id: string) => string) => (id: string) => api.delete<T>(\`\${getUrlWithId(id)}\`).then(unwrapData) as Promise<T>

export const baseAPI = <T>(getUrl: () => string, getUrlWithId: (id: string) => string, getUrlWithFkId: (fieldName: string, id: string) => string) => ({
  load: load<T>(getUrl),
  find: find<T>(getUrlWithId),
  create: create<T>(getUrl),
  update: update<T>(getUrlWithId),
  remove: remove<T>(getUrlWithId),
  loadBy: loadBy<T>(getUrlWithFkId),
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