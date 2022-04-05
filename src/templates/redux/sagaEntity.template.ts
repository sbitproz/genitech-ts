import { Config, Schema } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";
import { MODULE } from "@config/core/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";

const generate = (config: Config, entity: Schema) => {
  const template = `
import { call, put, takeLatest, CallEffect } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { {{refs}}API, BaseEntity } from '@{{name}}/core-data';
import { PutPayload } from "../redux.types";
import { 
  fetch{{model}}, fetch{{model}}Error, {{ref}}Fetched, 
  list{{models}}, list{{models}}Error, {{refs}}Listed,
  {{ref}}Updated , update{{model}}Error, update{{model}},
  remove{{model}}Error, remove{{model}}, {{ref}}Removed,
  {{#each fkFields}}
  list{{@root.models}}By{{model}},
  list{{@root.models}}By{{model}}Error,
  {{@root.ref}}By{{this.model}}Listed,
  {{/each}}
  {{#each searchableFields}}
  list{{@root.models}}By{{model}},
  list{{@root.models}}By{{model}}Error,
  {{@root.ref}}By{{this.model}}Listed,
  {{/each}}
} from './{{ref}}.slice';
import { {{model}} } from '@{{name}}/core-types';

function* fetch{{model}}Saga(action: PayloadAction<BaseEntity>): Generator<CallEffect<BaseEntity> | PutPayload<{{model}}> | PutPayload<string>, void, {{model}}> {
  try {
      const {{ref}} = yield call({{refs}}API.find, action.payload.id);
      yield put({{ref}}Fetched({{ref}}));
  } catch (e: any) {
      yield put(fetch{{model}}Error(e.message));
  }
}

function* list{{models}}Saga(): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, {{model}}[]> {
  try {
      const {{refs}} = yield call({{refs}}API.load);
      yield put({{refs}}Listed({{refs}}));
  } catch (e: any) {
      yield put(list{{models}}Error(e.message));
  }
}

function* update{{model}}Saga(action: PayloadAction<{{model}}>): Generator<CallEffect<{{model}}> | PutPayload<any> | PutPayload<string>, void, {{model}}> { 
  try {
      const {{ref}} = yield call({{refs}}API.update, action.payload);
      yield put({{ref}}Updated({id: {{ref}}.id, changes: {{ref}} }));
  } catch (e: any) {
      yield put(update{{model}}Error(e.message));
  }
}

function* remove{{model}}Saga(action: PayloadAction<BaseEntity>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, {{model}}> {
  try {
      const {{ref}} = yield call({{refs}}API.remove, action.payload.id);
      yield put({{ref}}Removed({{ref}}.id));
  } catch (e: any) {
      yield put(remove{{model}}Error(e.message));
  }
}

{{#each fkFields}}
function* list{{@root.models}}By{{model}}Saga(action: PayloadAction<{ {{ref}}: {{calculateTypes type arrayEntity}} }>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, {{@root.model}}[]> {
  try {
      const {{@root.ref}} = yield call({{@root.refs}}API.loadBy, '{{fieldname}}', action.payload.{{fieldname}});
      yield put({{@root.ref}}By{{model}}Listed({{@root.ref}}));
      
  } catch (e: any) {
      yield put(list{{@root.models}}By{{model}}Error(e.message));
  }
}

{{/each}} 

{{#each searchableFields}}
function* list{{@root.models}}By{{model}}Saga(action: PayloadAction<{ {{ref}}: {{calculateTypes type arrayEntity}} }>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, {{@root.model}}[]> {
  try {
      const {{@root.ref}} = yield call({{@root.refs}}API.load, \`?{{fieldname}}_like=\${action.payload.{{fieldname}} }\`);
      yield put({{@root.ref}}By{{model}}Listed({{@root.ref}}));
      
  } catch (e: any) {
      yield put(list{{@root.models}}By{{model}}Error(e.message));
  }
}

{{/each}}

function* {{ref}}Saga() {
  yield takeLatest(fetch{{model}}, fetch{{model}}Saga);
  yield takeLatest(list{{models}}, list{{models}}Saga);
  yield takeLatest(update{{model}}, update{{model}}Saga);
  yield takeLatest(remove{{model}}, remove{{model}}Saga);
  {{#each fkFields}}
  yield takeLatest(list{{@root.models}}By{{model}}, list{{@root.models}}By{{model}}Saga);
  {{/each}}   
  {{#each searchableFields}}
  yield takeLatest(list{{@root.models}}By{{model}}, list{{@root.models}}By{{model}}Saga);
  {{/each}}   
}

export default {{ref}}Saga;

  `

  return {
    template: translate(template, config, entity),
    title: `Saga entity template`,
    fileName: `${moduleLibLocation(MODULE.STATE)}${entity.variations.ref}/${entity.variations.ref}.saga.ts`,
  };
};

const SagaEntityGenerator: GeneratorEntity = {
  generate,
};

export default SagaEntityGenerator;

