import { Config, Schema } from "@interfaces/buildBase.interface";
import { translate } from "../util/buildBase/buildBase";
import { moduleLocation } from "../util/commands/package.helpers";
import { MODULE } from "../config/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";

// https://stackblitz.com/edit/rad-event-storming-generator?file=generators%2Feffects.ts

const generate = (config: Config, entity: Schema) => {
  const template = `
// {{model}} Epic
const {{ref}}Epic$ = actions\$ => actions\$.pipe(
  ofType({{models}}Actions.label{{model}}), // Trigger Event
  pessimisticUpdate({
    run: (action) => this.{{refs}}Service.label(action.{{ref}}).pipe(
      map(({{singleParam}}) => {{models}}Actions.label{{model}}Success({ {{ref}} })) // Completion Event
    ),
    onError: (action, error) => {{models}}Actions.{label}{{model}}Failure({ error }) // Completion Event
  })
);
  `

  return {
    template: translate(template,config, entity),
    title: `Epic entity template`,
    fileName: `${moduleLocation(MODULE.STATE)}${entity.variations.ref}.epic.ts`,
  };
};

const DataGenerator: GeneratorEntity = {
  generate,
};

export default DataGenerator;

