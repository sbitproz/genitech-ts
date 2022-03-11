import { MODULE } from "@config/module.constants";
import {
  Config,
  BooleanTypes,
  NumberTypes,
} from "@interfaces/buildBase.interface";
import GeneratorEntity from "@templates/core/typeEntity.template";
import { generatorEntity, generatorOther } from "builders/generatorRunner";
import GeneratorLibrary from "@templates/core/libraryExport.templates";
import GeneratorCore from "@templates/core/typeCore.template";

const typeEntityFiles = (config: Config) =>
  config.entities.map((entity) => `${entity.variations.ref}.interfaces`);

export const typeGenerators = (config: Config) => [
  { func: generatorEntity(GeneratorEntity), params: { config } },
  {
    func: generatorOther(
      GeneratorLibrary,
      MODULE.INTERFACE,
      typeEntityFiles(config)
    ),
    params: { config },
  },
  { func: generatorOther(GeneratorCore), params: { config } },
];

export const calculateTypes = (type: string) =>
  NumberTypes.indexOf(type) !== -1
    ? "number"
    : BooleanTypes.indexOf(type) !== -1
    ? "boolean"
    : "string";