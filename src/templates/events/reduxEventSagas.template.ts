import { Config, Schema, SchemaEvents } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";
import { MODULE } from "@config/core/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";

const generate = (config: Config, event: SchemaEvents) => {
  const template = `
import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { {{ref}}Error, {{ref}}Start, {{ref}}Success, {{model}}Start } from './{{ref}}.actions';

function* {{ref}}Saga(action: PayloadAction<{{model}}Start>): Generator<any,any> {
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
    fileName: `${moduleLibLocation(MODULE.STATE)}events/${event.group}/${event.variations.ref}/${event.variations.ref}.saga.ts`,
  };
};

const EventSagaGenerator: GeneratorEntity = {
  generate,
};

export default EventSagaGenerator;
