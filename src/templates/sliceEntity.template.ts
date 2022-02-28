import { MODULE } from "@config/module.constants";
import { Config, Schema } from "@interfaces/buildBase.interface";
import { GeneratorEntity } from "@interfaces/template.interface";
import { translate } from "@util/buildBase/buildBase";
import { moduleLocation } from "@util/commands/package.helpers";

const generate = (config: Config, entity: Schema) => {
  const template = `
import {
  createEntityAdapter,
  createSlice,
  EntityState,
  // PayloadAction,
} from '@reduxjs/toolkit';
    
export const {{constants}}_SLICE_FEATURE_KEY = '{{refs}}';

export interface {{model}}SliceEntity {
  id: number;
}

export interface {{model}}SliceState extends EntityState<{{model}}SliceEntity> {
  selectedId?: string | number; // which {{models}} record has been selected
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const {{ref}}SliceAdapter = createEntityAdapter<{{model}}SliceEntity>();

export const initialSliceState: {{model}}SliceState = {{ref}}SliceAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: undefined,
});
  
export const {{ref}}Slice = createSlice({
  name: {{constants}}_SLICE_FEATURE_KEY,
  initialState: initialSliceState,
  reducers: {
    add: {{ref}}SliceAdapter.addOne,
    remove: {{ref}}SliceAdapter.removeOne,
  },
});

export default {{ref}}Slice.reducer
`
  return {
    template: translate(template, config, entity),
    title: `Slice for ${entity.variations.refs}`,
    fileName: `${moduleLocation(MODULE.STATE)}${entity.variations.refs}.slice.ts`,
  };
};

const Generator: GeneratorEntity = {
  generate,
};

export default Generator;