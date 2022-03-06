import { Config } from "@interfaces/buildBase.interface";
import GeneratorEntity from "@templates/dataEntity.template";
import GeneratorLibrary from "@templates/libraryExport.templates";
import GeneratorCore from "@templates/dataCore.templates";
import { generatorCore, generatorOther, generatorEntity } from "@util/buildBase/generatorRunner";
import { MODULE } from "@config/module.constants";

const dataEntityFiles = (config: Config) => config.entities.map(entity => `${entity.variations.ref}.service`)

export const dataGenerators = (config: Config) => [
    { func: generatorCore(GeneratorCore), params: { config } },
    { func: generatorEntity(GeneratorEntity), params: { config } },
    { func: generatorOther(GeneratorLibrary, MODULE.DATA, dataEntityFiles(config)), params: { config } }
]