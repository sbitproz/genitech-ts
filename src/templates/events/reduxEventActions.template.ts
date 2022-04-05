import { Config, Schema, SchemaEvents } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";
import { MODULE } from "@config/core/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";

const generate = (config: Config, event: SchemaEvents) => {
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
    fileName: `${moduleLibLocation(MODULE.STATE)}events/${event.group}/${event.variations.ref}/${event.variations.ref}.actions.ts`,
  };
};

const EventActionsGenerator: GeneratorEntity = {
  generate,
};

export default EventActionsGenerator;
