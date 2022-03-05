import { MODULE } from "@config/module.constants";
import { Config } from "@interfaces/buildBase.interface";
import GeneratorEntity from "@templates/typeEntity.template";
import { generatorEntity, generatorOther } from "@util/buildBase/generatorRunner";
import GeneratorLibrary from "@templates/libraryExport.templates";

const typeEntityFiles = (config: Config) => config.entities.map(entity => `${entity.variations.ref}.interfaces`)

export const typeGenerators = (config: Config) => [
     { func: generatorEntity(GeneratorEntity), params: { config }},
     { func: generatorOther(GeneratorLibrary, MODULE.INTERFACE, typeEntityFiles(config)), params: { config }}
]