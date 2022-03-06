import { MODULE } from "@config/module.constants";
import { Config, Schema } from "@interfaces/buildBase.interface";
import { GeneratorEntity } from "@interfaces/template.interface";
import { translate } from "@util/buildBase/buildBase";
import { moduleLibLocation } from "@util/commands/package.helpers";

const generate = (config: Config, entity: Schema) => {
  const template = `
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState,
  // PayloadAction,
} from '@reduxjs/toolkit';
import { {{model}} } from '@{{name}}/core-types';
    
export const {{constants}}_SLICE_FEATURE_KEY = '{{refs}}';

export interface {{model}}SliceState extends EntityState<{{model}}> {
  selectedId?: string | number; // which {{models}} record has been selected
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const {{ref}}SliceAdapter = createEntityAdapter<{{model}}>();

const initialState: {{model}}SliceState = {{ref}}SliceAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: undefined,
});
  
export const {{ref}}Slice = createSlice({
  name: {{constants}}_SLICE_FEATURE_KEY,
  initialState: initialState,
  reducers: {
    {{ref}}Added: {{ref}}SliceAdapter.addOne,
    {{ref}}Removed: {{ref}}SliceAdapter.removeOne,
    {{ref}}Updated: {{ref}}SliceAdapter.updateOne,
    {{ref}}Fetched: {{ref}}SliceAdapter.upsertOne,
    {{refs}}Listed: {{ref}}SliceAdapter.upsertMany,    
  },
});

export default {{ref}}Slice.reducer;

export const { {{ref}}Added, {{ref}}Removed, {{ref}}Updated, {{refs}}Listed, {{ref}}Fetched } = {{ref}}Slice.actions;

export const add{{model}} = createAction<{{model}}>('{{constant}}/ADD');

export const remove{{model}} = createAction<{{model}}>('{{constant}}/REMOVE');

export const update{{model}} = createAction<{{model}}>('{{constant}}/UPDATE');

export const fetch{{model}} = createAction<{{model}}>('{{constant}}/FETCH');

export const list{{models}} = createAction<{{model}}>('{{constant}}/LIST');




`
  return {
    template: translate(template, config, entity),
    title: `Slice for ${entity.variations.refs}`,
    fileName: `${moduleLibLocation(MODULE.STATE)}${entity.variations.ref}.slice.ts`,
  };
};

const Generator: GeneratorEntity = {
  generate,
};

export default Generator;