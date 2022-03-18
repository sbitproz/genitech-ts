import { Config, Schema } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";
import { MODULE } from "@config/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";

// https://stackblitz.com/edit/rad-event-storming-generator?file=generators%2Feffects.ts

const generate = (config: Config, entity: Schema) => {
  const template = `

import { of, switchMap } from "rxjs";
import { ofType } from "redux-observable";
import { list{{models}}, fetch{{model}}, update{{model}}, remove{{model}}, add{{model}} } from "./{{ref}}.slice";

// {{model}} Epic
export const {{ref}}Epic$ = (actions$: any) => actions$.pipe(
  ofType(list{{models}}),
  switchMap(() => {
    console.log('requesting')
    return of([])
  })
);

export default [
  {{ref}}Epic$
]  
  `

  return {
    template: translate(template,config, entity),
    title: `Epic entity template`,
    fileName: `${moduleLibLocation(MODULE.STATE)}${entity.variations.ref}.epics.ts`,
  };
};

const DataGenerator: GeneratorEntity = {
  generate,
};

export default DataGenerator;

