import { MODULE } from "@config/module.constants";
import { Config, Schema } from "@interfaces/buildBase.interface";
import { GeneratorEntity } from "@interfaces/template.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/package.helpers";

const generate = (config: Config, entity: Schema) => {
  const template = `
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const select{{model}} = (state: RootState) => state.{{ref}}

{{#each fields}}
export const select{{@root.model}}{{this.model}} = createSelector(
  select{{@root.model}},
  ({ {{this.ref}} }) => {{this.ref}}
)
{{/each}}
`
  return {
    template: translate(template, config, entity),
    title: `Selector for ${entity.variations.refs}`,
    fileName: `${moduleLibLocation(MODULE.STATE)}${entity.variations.ref}/${entity.variations.ref}.selectors.ts`,
  };
};

const GeneratorSimpleSelector: GeneratorEntity = {
  generate,
};

export default GeneratorSimpleSelector;