import GeneratorSlice from "@templates/sliceEntity.template";
import GeneratorEpic from "@templates/epicEntity.template";
import GeneratorSelector from "@templates/selector.template";
import GeneratorCore from "@templates/store.template";
import { generatorCore, generatorEntity } from "@util/buildBase/generatorRunner";
import { Config } from "@interfaces/buildBase.interface";

export const reduxGenerators = (config: Config) => [
    { func: generatorCore(GeneratorCore), params: { config }},
    { func: generatorEntity(GeneratorSlice), params: { config }},
    { func: generatorEntity(GeneratorSelector), params: { config }},
    { func: generatorEntity(GeneratorEpic), params: { config }},
]