import Handlebars from "handlebars";
import {
  Config,
  Field,
  FieldVariations,
  NameVariations,
  Schema,
  SchemaEvents,
} from "@interfaces/buildBase.interface";

/*
https://chaseadams.io/posts/most-common-programming-case-types/
*/

const delimiters = {
  EMPTY: "",
  SPACE: " ",
  UNDERSCORE: "_",
  DASH: "-",
};

const replace = (target: string, replacement: string) => (source: string) =>
  source.split(target).join(replacement);

const stripDashes = replace(delimiters.DASH, delimiters.EMPTY);
const addDashes = replace(delimiters.SPACE, delimiters.DASH);
const stripUnderscores = replace(delimiters.UNDERSCORE, delimiters.EMPTY);
const addUnderscores = replace(delimiters.SPACE, delimiters.UNDERSCORE);
const stripSpaces = replace(delimiters.SPACE, delimiters.EMPTY);
const lowercase = (source: string) => source.toLowerCase();
const uppercase = (source: string) => source.toUpperCase();
const capitalize = (word: string) => `${word[0].toUpperCase()}${word.slice(1)}`;
const decapitalize = (word: string) =>
  `${word[0].toLowerCase()}${word.slice(1)}`;
const capitalizeWords = (
  source: string,
  delimiter: string = delimiters.SPACE
) => source.split(delimiter).map(capitalize).join(delimiter);

const _pipe = (a: Function, b: Function) => (source: string) => b(a(source));

const transformPipe = (...ops: any[]) => ops.reduce(_pipe);

const strip = transformPipe(stripDashes, stripUnderscores);
const startCase = transformPipe(strip, capitalizeWords);
const pascalCase = transformPipe(startCase, stripSpaces);
const camelCase = transformPipe(pascalCase, decapitalize);
const kababCase = transformPipe(strip, addDashes, lowercase);
const snakeCase = transformPipe(strip, addUnderscores, lowercase);
const constantCase = transformPipe(strip, addUnderscores, uppercase);

export const buildSingleParam = (v: NameVariations) => `${v.ref}: ${v.model}`;
export const buildMultiParam = (v: NameVariations) => `${v.refs}: ${v.model}[]`;

const buildBase = (schema: Schema): NameVariations => ({
  ref: camelCase(schema.model),
  refs: camelCase(schema.modelPlural),
  model: pascalCase(schema.model),
  models: pascalCase(schema.modelPlural),
  selector: `select${pascalCase(schema.model)}`,
  selectors: `select${pascalCase(schema.modelPlural)}`,
  constant: `${constantCase(schema.model)}`,
  constants: `${constantCase(schema.modelPlural)}`,
});

const buildFieldBase = (field: Field): FieldVariations => ({
  ref: camelCase(field.fieldname),
  model: pascalCase(field.fieldname),
  constant: `${constantCase(field.fieldname)}`,
});

export const buildRef = (ref: string): FieldVariations => ({
  ref,
  model: pascalCase(ref),
});

const addParams = (variations: NameVariations) => ({
  ...variations,
  singleParam: buildSingleParam(variations),
  multiParam: buildMultiParam(variations),
});

export const buildNameVariation = transformPipe(buildBase, addParams);

export const fieldNameVariation = (fields: Field[]) =>
  (fields ?? []).map((field) => ({
    ...field,
    ...buildFieldBase(field),
  }));

const prepareEntities = (dataEntities: Schema[]) => [
  ...dataEntities.map((entity) => ({
    ...entity,
    variations: buildNameVariation(entity),
    fields: fieldNameVariation(entity.fields),
  })),
];

const prepareEvents = (events: SchemaEvents[]) => [
  ...events.map((event) => ({
    ...event,
    variations: buildNameVariation(event),
  })),
];

const bySearchableFields = (field: Field) => field.searchable;

export const prepareConfig = ({
  dataEntities,
  events,
  stateEntities,
  ...config
}: Config) => ({
  ...config,
  dataEntities: [
    ...dataEntities.map((entity) => ({
      ...entity,
      variations: buildNameVariation(entity),
      fields: [entity.pkField, ...entity.fields, ...(entity.fkFields ?? [])],
      fkFields: fieldNameVariation(entity.fkFields),
      searchableFields: fieldNameVariation(entity.fields.filter(bySearchableFields)),
    })),
  ],
  events: prepareEvents(events),
  stateEntities: prepareEntities(stateEntities),
});

export const translate = (template: any, config: Config, other?: any) =>
  Handlebars.compile(template)({ ...config, ...flatten(other) });

export const flatten = (object = {}) => {
  return Object.keys(object).reduce((acc, key) => {
    if (typeof object[key] === "object" && !Array.isArray(object[key])) {
      return { ...acc, ...flatten(object[key]) };
    }

    return { ...acc, [key]: object[key] };
  }, {});
};
