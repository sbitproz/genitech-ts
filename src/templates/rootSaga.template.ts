import { MODULE } from "@config/module.constants";
import { Config } from "@interfaces/buildBase.interface";
import { Generator } from "@interfaces/template.interface";
import { translate } from "@util/buildBase/buildBase";
import { moduleLibLocation } from "@util/commands/package.helpers";

const generate = (config: Config) => {
  const template = `
import { all, fork } from 'redux-saga/effects';
{{#each entities}}
import {{model}}Saga from './{{model}}/{{model}}.saga';
{{/each}}      


export function* rootSaga(){
  yield all([
    {{#each entities}}
    fork({{model}}Saga),
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

const Sagaenerator: Generator = {
  generate,
};

export default Sagaenerator;