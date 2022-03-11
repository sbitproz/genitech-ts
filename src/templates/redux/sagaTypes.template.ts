import { MODULE } from "@config/module.constants";
import { Config } from "@interfaces/buildBase.interface";
import { Generator } from "@interfaces/template.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/package.helpers";

const generate = (config: Config) => {
  const template = `
import { PutEffect } from 'redux-saga/effects';

export type PutPayload<T> = PutEffect<PayloadAction<T>>;
  `
  return {
    template: translate(template, config),
    title: `Saga Types for app`,
    fileName: `${moduleLibLocation(MODULE.STATE)}saga.types.ts`,
  };
};

const SagaTypeenerator: Generator = {
  generate,
};

export default SagaTypeenerator;