import { MODULE } from "@config/module.constants";
import { Config } from "@interfaces/buildBase.interface";
import { Generator } from "@interfaces/template.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";

const generate = (config: Config) => {
  const template = `
import { PayloadAction } from '@reduxjs/toolkit';
import { PutEffect } from 'redux-saga/effects';

export type PutPayload<T> = PutEffect<PayloadAction<T>>;

export type LoadingStatus = 'idle' | 'loading' | 'loaded' | 'error';
interface GeneralState {
  loadingStatus: LoadingStatus;
}

export const loadedStatusFactory =
  <S extends GeneralState, T>(fn: (...args: any) => void) =>
  (
    state: S,
    action: PayloadAction<T>,
    status: LoadingStatus = 'loaded'
  ): void => {
    fn(state, action.payload);
    state.loadingStatus = status;
  };

export const loadedStatus = <S extends GeneralState, T>(
  state: S,
  action: PayloadAction<T>,
  fn: (...args: any) => void,
  status: LoadingStatus = 'loaded'
): void => {
  loadedStatusFactory(fn)(state,action,status)
};

export const loadingStatus = <S extends GeneralState>(
  state: S,
  status: LoadingStatus = 'loading'
): void => {
  state.loadingStatus = status;
};
`
  return {
    template: translate(template, config),
    title: `Redux Types for app`,
    fileName: `${moduleLibLocation(MODULE.STATE)}redux.types.ts`,
  };
};

const SagaTypeenerator: Generator = {
  generate,
};

export default SagaTypeenerator;