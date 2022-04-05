import GeneratorLibrary from "@templates/core/libraryExport.templates";
import { generatorOther, generatorEvents, generatorEntity } from "builders/generatorRunner";
import { Config } from "@interfaces/buildBase.interface";
import { MODULE } from "@config/core/module.constants";
import EventSagaGenerator from "@templates/events/reduxEventSagas.template";
import EventActionsGenerator from "@templates/events/reduxEventActions.template";
import GeneratorRootSaga from "@templates/redux/rootSaga.template";

// Generate Saga + Action for each event,
// Create and index file export under the events folder

const extensions = (config: Config) => ["actions"]
  .concat(config.reduxObservable ? ["epics"] : [])
  .concat(config.reduxSaga ? ["saga"] : [])

const reduxEntityFiles = (config: Config) =>
  config.events?.reduce(
    (files, event) => {
      const { ref } = event.variations;
      return [...files, ...extensions(config).map((ext) => `${event.group}/${ref}/${ref}.${ext}`)];
    },
    []
  );

const rootSagas = (config: Config) =>
  config.reduxSaga
    ? [
        { func: generatorEntity(GeneratorRootSaga), params: { config } },
      ]
    : [];


const sagaObservable = (config: Config) =>
    config.reduxSaga
      ? [
          { func: generatorEvents(EventSagaGenerator), params: { config } },
          { func: generatorEvents(EventActionsGenerator), params: { config } },
        ]
      : [];
  

export const reduxEventsGenerators = (config: Config) => [
  {
    func: generatorOther(
      GeneratorLibrary,
      MODULE.STATE,
      reduxEntityFiles(config),
      'lib/events/',
      ''
    ),
    params: { config },
  },
  ...sagaObservable(config),
  ...rootSagas(config)
];
