import { Config, Schema } from "../interfaces/buildBase.interface";
import { GenerateReturn } from "../interfaces/template.interface";
import { translate } from "../util/buildBase/buildBase";

const generate = (config: Config, entity: Schema) => {
  const template = `
import {
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  // PayloadAction,
} from '@reduxjs/toolkit';
    
export const {{models}}_SLICE_FEATURE_KEY = '{{refs}}';

export interface {{model}}SliceEntity {
  id: number;
}

export interface {{model}}SliceState extends EntityState<{{model}}SliceEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const {{ref}}SliceAdapter = createEntityAdapter<{{model}}SliceEntity>();

export const initialSliceState: {{model}}SliceState = {{ref}}SliceAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: undefined,
});
  
export const {{model}}Slice = createSlice({
name: {{models}}_SLICE_FEATURE_KEY,
initialState: initialSliceState,
reducers: {
  add: {{ref}}SliceAdapter.addOne,
  remove: {{ref}}SliceAdapter.removeOne,
},
});

const { selectAll, selectEntities } = {{ref}}SliceAdapter.getSelectors();

export const get{{models}}SliceState = (rootState: unknown): {{model}}SliceState =>
  rootState[{{models}}_SLICE_FEATURE_KEY];

export const selectAll{{models}}Slice = createSelector(
  get{{models}}SliceState,
  selectAll
);

export const select{{models}}SliceEntities = createSelector(
  get{{models}}SliceState,
  selectEntities
);
`
console.log('entity', entity);

  return {
    template: translate(template, config, entity),
    title: `Slice for ${entity.variations.refs}`,
    fileName: `libs/core-state/src/lib/${entity.variations.refs}.slice.ts`,
  };
};

export interface Generator {
  generate: (config: Config, entity: Schema) => GenerateReturn;
}

const Generator: Generator = {
  generate,
};

export default Generator;