import { Config, Schema } from "@interfaces/buildBase.interface";
import { translate } from "../util/buildBase/buildBase";
import { moduleLibLocation } from "../util/commands/package.helpers";
import { MODULE } from "../config/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";

const generate = (config: Config, event: Schema) => {
  const template = `
import { call, put, takeLatest } from 'redux-saga/effects'
import { {{refs}}API } from '@{{name}}/core-data';
import { 
  fetch{{model}}, fetch{{model}}Error, {{ref}}Fetched, 
  list{{models}}, list{{models}}Error, {{refs}}Listed,
  {{ref}}Updated , update{{model}}Error, update{{model}},
  remove{{model}}Error, remove{{model}}, {{ref}}Removed
} from './{{ref}}.slice';
import { {{model}} } from '@{{name}}/core-types';

function* fetch{{model}}Saga(action: any): Generator<any,any> {
  try {
      const {{ref}} = (yield call({{refs}}API.find, action.payload.id)) as {{model}};
      yield put({{ref}}Fetched({{ref}}));
  } catch (e: any) {
      yield put(fetch{{model}}Error(e.message));
  }
}

function* list{{models}}Saga(): Generator<any,any> {
  try {
      const {{refs}} = (yield call({{refs}}API.load)) as {{model}}[];
      yield put({{refs}}Listed({{refs}}));
  } catch (e: any) {
      yield put(list{{models}}Error(e.message));
  }
}

function* update{{model}}Saga(action: any): Generator<any,any> {
  try {
      const {{ref}} = (yield call({{refs}}API.update, action.payload)) as {{model}};
      yield put({{ref}}Updated({id: {{ref}}.id, changes: {{ref}} }));
  } catch (e: any) {
      yield put(update{{model}}Error(e.message));
  }
}

function* remove{{model}}Saga(action: any): Generator<any,any> {
  try {
      const {{ref}} = (yield call({{refs}}API.remove, action.payload.id)) as {{model}};
      yield put({{ref}}Removed({{ref}}.id));
  } catch (e: any) {
      yield put(remove{{model}}Error(e.message));
  }
}

function* {{ref}}Saga() {
  yield takeLatest(fetch{{model}}, fetch{{model}}Saga);
  yield takeLatest(list{{models}}, list{{models}}Saga);
  yield takeLatest(update{{model}}, update{{model}}Saga);
  yield takeLatest(remove{{model}}, remove{{model}}Saga);
}

export default {{ref}}Saga;

  `

  return {
    template: translate(template,config, entity),
    title: `Saga entity template`,
    fileName: `${moduleLibLocation(MODULE.STATE)}${entity.variations.ref}/${entity.variations.ref}.saga.ts`,
  };
};

const SagaEntityGenerator: GeneratorEntity = {
  generate,
};

export default SagaEntityGenerator;

