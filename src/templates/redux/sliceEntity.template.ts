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

export interface {{model}}Slice extends EntityState<{{model}}> {
  selectedId?: string | number; // which {{models}} record has been selected
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const {{ref}}SliceAdapter = createEntityAdapter<{{model}}>();

const initialState: {{model}}Slice = {{ref}}SliceAdapter.getInitialState({
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

export const add{{model}} = createAction<{{model}}>('{{refs}}/add{{model}}');

export const remove{{model}} = createAction<{id: string}>('{{refs}}/remove{{model}}');

export const update{{model}} = createAction<{{model}}>('{{refs}}/update{{model}}');

export const fetch{{model}} = createAction<{id: string}>('{{refs}}/fetch{{model}}');

export const list{{models}} = createAction('{{refs}}/list{{models}}');

export const add{{model}}Error = createAction<string>('{{refs}}/add{{model}}Error');

export const remove{{model}}Error = createAction<string>('{{refs}}/remove{{model}}Error');

export const update{{model}}Error = createAction<string>('{{refs}}/update{{model}}Error');

export const fetch{{model}}Error = createAction<string>('{{refs}}/fetch{{model}}Error');

export const list{{models}}Error = createAction<string>('{{refs}}/list{{models}}Error');

`
  return {
    template: translate(template, config, entity),
    title: `Slice for ${entity.variations.refs}`,
    fileName: `${moduleLibLocation(MODULE.STATE)}${entity.variations.ref}/${entity.variations.ref}.slice.ts`,
  };
};

const Generator: GeneratorEntity = {
  generate,
};

export default Generator;