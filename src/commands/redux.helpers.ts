import GeneratorSlice from "@templates/redux/sliceEntity.template";
import GeneratorEpic from "@templates/redux/epicEntity.template";
import GeneratorRootEpic from "@templates/redux/rootEpic.template";
import GeneratorSaga from "@templates/redux/sagaEntity.template";
import GeneratorRootSaga from "@templates/redux/rootSaga.template";
import GeneratorSagaTypes from "@templates/redux/sagaTypes.template";
import GeneratorSelector from "@templates/redux/selector.template";
import GeneratorLibrary from "@templates/core/libraryExport.templates";
import GeneratorCore from "@templates/redux/redux.template";
import {
  generatorCore,
  generatorOther,
  generatorEntity,
  generatorSimpleEntity,
} from "builders/generatorRunner";
import { Config, Schema } from "@interfaces/buildBase.interface";
import { MODULE } from "@config/module.constants";
import GeneratorReducer from "@templates/redux/reducerEntity.template";
import GeneratorSimpleSelector from "@templates/redux/simpleSelector.template";

const extensions = (config: Config) => ["slice", "selectors"]
  .concat(config.reduxObservable ? ["epics"] : [])
  .concat(config.reduxSaga ? ["saga"] : [])

const reduceEntitiesLocations = (entities: Schema[], extensions: string[]) => entities.reduce(
  (files, entity) => {
    const { ref } = entity.variations;
    return [...files, ...extensions.map((ext) => `${ref}/${ref}.${ext}`)];
  },
  []
)

const reduxEntityFiles = (config: Config) =>
  [
    ...reduceEntitiesLocations(config.dataEntities, extensions(config)),
    ...reduceEntitiesLocations(config.stateEntities, ['reducer']),
    ...["store", 'events']
  ];

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
  { func: generatorSimpleEntity(GeneratorReducer), params: { config } },
  { func: generatorSimpleEntity(GeneratorSimpleSelector), params: { config } },
  {
    func: generatorOther(
      GeneratorLibrary,
      MODULE.STATE,
      reduxEntityFiles(config)
    ),
    params: { config },
  },
  { func: generatorCore(GeneratorSagaTypes), params: { config } },
  ...reduxObservable(config),
  ...reduxSagas(config),
];
