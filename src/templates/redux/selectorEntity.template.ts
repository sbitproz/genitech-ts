import { MODULE } from "@config/core/module.constants";
import { Config, Schema } from "@interfaces/buildBase.interface";
import { GeneratorEntity } from "@interfaces/template.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";

const generate = (config: Config, entity: Schema) => {
  const template = `
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { {{ref}}SliceAdapter, {{model}}Slice, {{constants}}_SLICE_FEATURE_KEY } from './{{ref}}.slice';

const { selectAll, selectEntities, selectById: select{{model}}ById, selectIds: select{{model}}ByIds } = {{ref}}SliceAdapter.getSelectors();

export { select{{model}}ById, select{{model}}ByIds };

export const get{{models}} = (rootState: RootState): {{model}}Slice =>
  rootState[{{constants}}_SLICE_FEATURE_KEY];

export const selectAll{{models}} = createSelector(
  get{{models}},
  selectAll
);

export const select{{model}}Entities = createSelector(
  get{{models}},
  selectEntities
);

export const select{{model}}LoadingStatus = createSelector(
  get{{models}},
  ({loadingStatus, error}) => ({ loadingStatus, error })
);
`
  return {
    template: translate(template, config, entity),
    title: `Selector for ${entity.variations.refs}`,
    fileName: `${moduleLibLocation(MODULE.STATE)}${entity.variations.ref}/${entity.variations.ref}.selectors.ts`,
  };
};

const Generator: GeneratorEntity = {
  generate,
};

export default Generator;