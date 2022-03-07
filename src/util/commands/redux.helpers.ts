import GeneratorSlice from "@templates/sliceEntity.template";
import GeneratorEpic from "@templates/epicEntity.template";
import GeneratorRootEpic from "@templates/rootEpic.template";
import GeneratorSelector from "@templates/selector.template";
import GeneratorLibrary from "@templates/libraryExport.templates";
import GeneratorCore from "@templates/redux.template";
import {
  generatorCore,
  generatorOther,
  generatorEntity,
} from "@util/buildBase/generatorRunner";
import { Config } from "@interfaces/buildBase.interface";
import { MODULE } from "@config/module.constants";

const extensions = ["slice", "selectors", "epics"];

const reduxEntityFiles = (config: Config) =>
  config.entities.reduce(
    (files, entity) => {
      const { ref } = entity.variations;
      return [...files, ...extensions.map((ext) => `${ref}.${ext}`)];
    },
    ["store"]
  );

const reduxObservable = (config: Config) =>
  config.reduxObservable
    ? [
        { func: generatorEntity(GeneratorEpic), params: { config } },
        { func: generatorEntity(GeneratorRootEpic), params: { config } },
      ]
    : [];

const sagaObservable = (config: Config) =>
    config.reduxSaga
      ? [
          { func: generatorEntity(GeneratorEpic), params: { config } },
          { func: generatorEntity(GeneratorRootEpic), params: { config } },
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
  ...sagaObservable(config),
];
