import { MODULE } from "@config/module.constants";
import { Config, Schema } from "@interfaces/buildBase.interface";
import { GeneratorEntity } from "@interfaces/template.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";

const generate = (config: Config, entity: Schema) => {
  const template = `
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState
} from '@reduxjs/toolkit';
import { {{model}} } from '@{{name}}/core-types';
import {
  loadedStatus,
  loadedStatusFactory,
  loadingStatus,
  LoadingStatus,
  loadErrorStatus,
  GeneralState
} from '../redux.types';
    
export const {{constants}}_SLICE_FEATURE_KEY = '{{refs}}';

export interface {{model}}Slice extends EntityState<{{model}}>, GeneralState {
  selectedId?: string | number; // which {{models}} record has been selected
  loadingStatus: LoadingStatus;
  error?: string;
}

export const {{ref}}SliceAdapter = createEntityAdapter<{{model}}>();

const initialState: {{model}}Slice = {{ref}}SliceAdapter.getInitialState({
  loadingStatus: 'idle',
  error: undefined,
});

const upsertManyLoadedStatus = loadedStatusFactory<{{model}}Slice, {{model}}[]>({{ref}}SliceAdapter.upsertMany);
  
export const {{ref}}Slice = createSlice({
  name: {{constants}}_SLICE_FEATURE_KEY,
  initialState: initialState,
  reducers: {
    {{ref}}Added: (state, action) => {
      loadedStatus(state, action, {{ref}}SliceAdapter.addOne)
    }, 
    {{ref}}Removed: (state, action) => {
      loadedStatus(state, action, {{ref}}SliceAdapter.removeOne)
    }, 
    {{ref}}Updated: (state, action) => {
      loadedStatus(state, action, {{ref}}SliceAdapter.updateOne)
    }, 
    {{ref}}Fetched: (state, action) => {
      loadedStatus(state, action, {{ref}}SliceAdapter.upsertOne)
    },
    {{refs}}Listed: upsertManyLoadedStatus,
    {{#each fkFields}}
    {{@root.ref}}By{{model}}Listed: upsertManyLoadedStatus,
    {{/each}} 
    removalAll{{model}}: (state, action) => {
      loadedStatus(state, action, {{ref}}SliceAdapter.removeAll)
    },
    list{{models}}: (state) => loadingStatus(state),
    fetch{{model}}: (state, _) => loadingStatus(state),
    add{{model}}: (state, _) => loadingStatus(state),
    remove{{model}}: (state, _) => loadingStatus(state),
    update{{model}}: (state, _) => loadingStatus(state),    
    add{{model}}Error: loadErrorStatus,
    remove{{model}}Error: loadErrorStatus,
    update{{model}}Error: loadErrorStatus,
    fetch{{model}}Error: loadErrorStatus,
    list{{models}}Error: loadErrorStatus,
    {{#each fkFields}}
    list{{@root.models}}By{{model}}: (state, _) => loadingStatus(state),
    list{{@root.models}}By{{model}}Error: loadErrorStatus,
    {{/each}} 
  },
});

export default {{ref}}Slice.reducer;

export const { 
  add{{model}},
  remove{{model}},
  update{{model}},
  list{{models}}, 
  fetch{{model}},
  {{ref}}Added, 
  {{ref}}Removed, 
  {{ref}}Updated, 
  {{refs}}Listed, 
  {{ref}}Fetched, 
  {{#each fkFields}}
  list{{@root.models}}By{{model}},
  {{@root.ref}}By{{model}}Listed,
  list{{@root.models}}By{{model}}Error,
  {{/each}} 
  add{{model}}Error,
  remove{{model}}Error,
  update{{model}}Error,
  fetch{{model}}Error,
  list{{models}}Error,
} = {{ref}}Slice.actions;


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