import { MODULE } from "@config/module.constants";
import { Config, Schema } from "@interfaces/buildBase.interface";
import { GeneratorEntity } from "@interfaces/template.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/package.helpers";

const generate = (config: Config, entity: Schema) => {
  const template = `
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { {{ref}}SliceAdapter, {{ref}}Slice, {{model}}Slice, {{constants}}_SLICE_FEATURE_KEY } from './{{ref}}.slice';

const { selectAll, selectEntities } = {{ref}}SliceAdapter.getSelectors();

export const get{{models}}Slice = (rootState: RootState): {{model}}Slice =>
  rootState[{{constants}}_SLICE_FEATURE_KEY];

export const selectAll{{models}}Slice = createSelector(
  get{{models}}Slice,
  selectAll
);

export const select{{model}}Entities = createSelector(
  get{{models}}Slice,
  selectEntities
);

export default {{ref}}Slice.reducer
`
  return {
    template: translate(template, config, entity),
    title: `Slice for ${entity.variations.refs}`,
    fileName: `${moduleLibLocation(MODULE.STATE)}${entity.variations.ref}/${entity.variations.ref}.selectors.ts`,
  };
};

const Generator: GeneratorEntity = {
  generate,
};

export default Generator;