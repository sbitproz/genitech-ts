import { MODULE } from "@config/core/module.constants";
import { Config } from "@interfaces/buildBase.interface";
import { Generator } from "@interfaces/template.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";

const generate = (config: Config) => {
  const template = `
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { catchError } from "rxjs/operators";
{{#each dataEntities}}
import {{this.variations.ref}}Epic from './{{this.variations.ref}}.epics';
{{/each}}

const epics = [
{{#each dataEntities}}
  ...{{this.variations.ref}}Epic,
{{/each}}
];

export const rootEpic = (action$, store$, dependencies) =>
    combineEpics(...epics)(action$, store$, dependencies).pipe(
        catchError((error, source) => {
        console.error(error);
        return source;
    })
);

export const epicMiddleware = createEpicMiddleware();
`
  return {
    template: translate(template, config),
    title: `Root Epic for app`,
    fileName: `${moduleLibLocation(MODULE.STATE)}root.epic.ts`,
  };
};

const EpicGenerator: Generator = {
  generate,
};

export default EpicGenerator;