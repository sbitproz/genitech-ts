import { Config } from "@interfaces/buildBase.interface";
import GeneratorEntity from "@templates/data/dataEntity.template";
import GeneratorLibrary from "@templates/core/libraryExport.templates";
import GeneratorCore from "@templates/data/dataCore.templates";
import { generatorCore, generatorOther, generatorEntity } from "builders/generatorRunner";
import { MODULE } from "@config/module.constants";

const dataEntityFiles = (config: Config) => config.entities.map(entity => `${entity.variations.ref}.service`).concat('data.conf')

export const dataGenerators = (config: Config) => [
    { func: generatorCore(GeneratorCore), params: { config } },
    { func: generatorEntity(GeneratorEntity), params: { config } },
    { func: generatorOther(GeneratorLibrary, MODULE.DATA, dataEntityFiles(config)), params: { config } }
]