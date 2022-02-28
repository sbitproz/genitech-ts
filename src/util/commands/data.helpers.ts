import { Config } from "@interfaces/buildBase.interface";
import GeneratorEntity from "@templates/dataEntity.template";
import GeneratorCore from "@templates/dataCore.templates";
import { generatorCore, generatorEntity } from "@util/buildBase/generatorRunner";

export const dataGenerators = (config: Config) => [
    { func: generatorCore(GeneratorCore), params: { config }},
    { func: generatorEntity(GeneratorEntity), params: { config }},
]