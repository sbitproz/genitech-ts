import { Config, Schema } from "@interfaces/buildBase.interface";
import { translate } from "@util/buildBase/buildBase";
import { moduleLibLocation } from "@util/commands/package.helpers";
import { MODULE } from "@config/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";

const generate = (config: Config, event: Schema) => {
  const template = `
import { call, put, takeLatest } from 'redux-saga/effects'
import { {{ref}}Error, {{ref}}Start, {{ref}}Success } from './{{ref}}.actions';

function* {{ref}}Saga(action: any): Generator<any,any> {
  try {
      // put your business logic here
      // yield call(someAPI, action.payload.someParam);
      // yield put({{ref}}Success({{ref}}));
  } catch (e: any) {
      yield put({{ref}}Error(e.message));
  }
}

function* {{ref}}EventsSaga() {
  yield takeLatest({{ref}}Start, {{ref}}Saga);
}

export default {{ref}}EventsSaga;
`

  return {
    template: translate(template,config, event),
    title: `Saga entity template`,
    fileName: `${moduleLibLocation(MODULE.STATE)}events/${event.variations.ref}/${event.variations.ref}.saga.ts`,
  };
};

const EventSagaGenerator: GeneratorEntity = {
  generate,
};

export default EventSagaGenerator;
