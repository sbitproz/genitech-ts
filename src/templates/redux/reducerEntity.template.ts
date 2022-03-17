import { MODULE } from "@config/module.constants";
import { Config, Schema } from "@interfaces/buildBase.interface";
import { GeneratorEntity } from "@interfaces/template.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/package.helpers";

const generate = (config: Config, entity: Schema) => {
  const template = 
`import { {{model}} } from '@{{name}}/core-types';  
import {
  createAction,
  createReducer,
} from '@reduxjs/toolkit'

export const set{{model}} = createAction<Partial<{{model}}>>('{{refs}}/set{{model}}')

export const clear{{model}} = createAction('{{refs}}/clear{{model}}')

export const {{constants}}_FEATURE_KEY = '{{refs}}';

const initialState: Partial<{{model}}> = { };

const {{ref}}Reducer = createReducer(initialState,
  (builder) => {
    builder
      .addCase(set{{model}}, (state, action) => {
        return {...state, ...action.payload}
      })
      .addCase(clear{{model}}, () => {
        return {}
      })
  }
)

export default {{ref}}Reducer;`
  return {
    template: translate(template, config, entity),
    title: `Reducer for ${entity.variations.refs}`,
    fileName: `${moduleLibLocation(MODULE.STATE)}${entity.variations.ref}/${entity.variations.ref}.reducer.ts`,
  };
};

const GeneratorReducer: GeneratorEntity = {
  generate,
};

export default GeneratorReducer;