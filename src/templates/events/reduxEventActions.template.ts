import { Config, Schema } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/package.helpers";
import { MODULE } from "@config/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";

const generate = (config: Config, event: Schema) => {
  const template = `
import { createAction } from '@reduxjs/toolkit';

export interface {{model}}Start { }

export const {{ref}}Start = createAction<{{model}}Start>('{{refs}}/{{ref}}Start');

export const {{ref}}Error = createAction<string>('{{refs}}/{{ref}}Error');

export interface {{model}}Success { }

export const {{ref}}Success = createAction<{{model}}Success>('{{refs}}/{{ref}}Success');
`
  return {
    template: translate(template,config, event),
    title: `Action events template`,
    fileName: `${moduleLibLocation(MODULE.STATE)}events/${event.variations.ref}/${event.variations.ref}.actions.ts`,
  };
};

const EventActionsGenerator: GeneratorEntity = {
  generate,
};

export default EventActionsGenerator;
