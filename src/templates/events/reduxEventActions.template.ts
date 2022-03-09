import { Config, Schema } from "@interfaces/buildBase.interface";
import { translate } from "@util/buildBase/buildBase";
import { moduleLibLocation } from "@util/commands/package.helpers";
import { MODULE } from "@config/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";

const generate = (config: Config, event: Schema) => {
  const template = `
import { createAction } from '@reduxjs/toolkit';

export const {{ref}}Start = createAction<any>('{{refs}}/{{ref}}Start');

export const {{ref}}Error = createAction<any>('{{refs}}/{{ref}}Error');

export const {{ref}}Success = createAction<any>('{{refs}}/{{ref}}Success');
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
