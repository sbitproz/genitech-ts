import GeneratorSlice from "@templates/redux/sliceEntity.template";
import GeneratorEpic from "@templates/redux/epicEntity.template";
import GeneratorRootEpic from "@templates/redux/rootEpic.template";
import GeneratorSaga from "@templates/redux/sagaEntity.template";
import GeneratorRootSaga from "@templates/redux/rootSaga.template";
import GeneratorSelector from "@templates/redux/selector.template";
import GeneratorLibrary from "@templates/core/libraryExport.templates";
import GeneratorCore from "@templates/redux/redux.template";
import {
  generatorCore,
  generatorOther,
  generatorEntity,
} from "builders/generatorRunner";
import { Config } from "@interfaces/buildBase.interface";
import { MODULE } from "@config/module.constants";

const extensions = (config: Config) => ["slice", "selectors"]
  .concat(config.reduxObservable ? ["epics"] : [])
  .concat(config.reduxSaga ? ["saga"] : [])

const reduxEntityFiles = (config: Config) =>
  config.entities.reduce(
    (files, entity) => {
      const { ref } = entity.variations;
      return [...files, ...extensions(config).map((ext) => `${ref}/${ref}.${ext}`)];
    },
    ["store", 'events']
  );

const reduxObservable = (config: Config) =>
  config.reduxObservable
    ? [
        { func: generatorEntity(GeneratorEpic), params: { config } },
        { func: generatorEntity(GeneratorRootEpic), params: { config } },
      ]
    : [];

const reduxSagas = (config: Config) =>
    config.reduxSaga
      ? [
          { func: generatorEntity(GeneratorSaga), params: { config } },
          { func: generatorEntity(GeneratorRootSaga), params: { config } },
        ]
      : [];
  

export const reduxGenerators = (config: Config) => [
  { func: generatorCore(GeneratorCore), params: { config } },
  { func: generatorEntity(GeneratorSlice), params: { config } },
  { func: generatorEntity(GeneratorSelector), params: { config } },
  {
    func: generatorOther(
      GeneratorLibrary,
      MODULE.STATE,
      reduxEntityFiles(config)
    ),
    params: { config },
  },
  ...reduxObservable(config),
  ...reduxSagas(config),
];
