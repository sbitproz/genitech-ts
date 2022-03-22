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
  LoadingStatus
} from '../redux.types';
    
export const {{constants}}_SLICE_FEATURE_KEY = '{{refs}}';

export interface {{model}}Slice extends EntityState<{{model}}> {
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
  },
});

export default {{ref}}Slice.reducer;

export const { 
  add{{model}},
  remove{{model}},
  update{{model}},
  list{{model}}s, 
  fetch{{model}},
  {{ref}}Added, 
  {{ref}}Removed, 
  {{ref}}Updated, 
  {{refs}}Listed, 
  {{ref}}Fetched, 
  {{#each fkFields}}
  {{@root.ref}}By{{model}}Listed,
  {{/each}} 
} = {{ref}}Slice.actions;

export const add{{model}}Error = createAction<string>('{{refs}}/add{{model}}Error');

export const remove{{model}}Error = createAction<string>('{{refs}}/remove{{model}}Error');

export const update{{model}}Error = createAction<string>('{{refs}}/update{{model}}Error');

export const fetch{{model}}Error = createAction<string>('{{refs}}/fetch{{model}}Error');

export const list{{models}}Error = createAction<string>('{{refs}}/list{{models}}Error');

{{#each fkFields}}
export const list{{@root.model}}By{{model}}Error = createAction<string>('{{@root.ref}}/list{{@root.model}}By{{model}}Error');

export const list{{@root.model}}By{{model}} = createAction<{ {{fieldname}}: string}>('{{@root.ref}}/listBy{{model}}')

{{/each}} 

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