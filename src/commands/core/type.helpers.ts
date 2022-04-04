import { MODULE } from "@config/core/module.constants";
import {
  Config,
  BooleanTypes,
  NumberTypes,
  Schema,
  TypeOptions,
  Field,
} from "@interfaces/buildBase.interface";
import GeneratorEntity from "@templates/core/typeEntity.template";
import {
  generatorEntity,
  generatorSimpleEntity,
  generatorOther,
} from "builders/generatorRunner";
import GeneratorLibrary from "@templates/core/libraryExport.templates";
import GeneratorCore from "@templates/core/typeCore.template";
import { buildRef } from "@builders/buildBase";

const typeEntityFiles = (entities: Schema[] = []) =>
  entities
    .map((entity) => `${entity.variations.ref}.interfaces`)
    .concat("core.interfaces");

export const typeGenerators = (config: Config) => [
  { func: generatorEntity(GeneratorEntity), params: { config } },
  { func: generatorSimpleEntity(GeneratorEntity), params: { config } },
  {
    func: generatorOther(GeneratorLibrary, MODULE.INTERFACE, [
      ...typeEntityFiles(config.stateEntities),
      ...typeEntityFiles(config.dataEntities),
    ]),
    params: { config },
  },
  { func: generatorOther(GeneratorCore), params: { config } },
];

export const calculateTypes = (type: TypeOptions, entity?: string) => {
  const entityModel = entity && buildRef(entity).model;

  return NumberTypes.indexOf(type) !== -1
    ? "number"
    : type === "array"
    ? "string[]"
    : type === "array:entity"
    ? `${entityModel}[]`
    : BooleanTypes.indexOf(type) !== -1
    ? "boolean"
    : "string";
};

export const calculateTypeImports = (fields: Field[]) => {
  const extractUniqueModels = fields.filter(
    (item, index, array) => !item.arrayEntity ? false :
      array.findIndex(
        (originItem) => originItem.arrayEntity === item.arrayEntity
      ) === index
  );

  return extractUniqueModels
    .map(
      (field) => {
        const names = buildRef(field.arrayEntity)
        return `import { ${names.model} } from "./${names.ref}.interfaces";`
      }
    )
};
