import { MODULE } from "@config/module.constants";
import { Config } from "@interfaces/buildBase.interface";
import { Generator } from "@interfaces/template.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";

const generate = (config: Config) => {
  const template = `
import { all, fork } from 'redux-saga/effects';
{{#each dataEntities}}
import {{model}}Saga from './{{model}}/{{model}}.saga';
{{/each}}      
{{#each events}}
import {{model}}EventsSaga from './events/{{model}}/{{model}}.saga';
{{/each}}


export function* rootSaga(){
  yield all([
    {{#each dataEntities}}
    fork({{model}}Saga),
    {{/each}}
    {{#each events}}
    fork({{model}}EventsSaga),
    {{/each}}
  ]);
}  
`
  return {
    template: translate(template, config),
    title: `Root Saga for app`,
    fileName: `${moduleLibLocation(MODULE.STATE)}root.saga.ts`,
  };
};

const GeneratorRootSaga: Generator = {
  generate,
};

export default GeneratorRootSaga;