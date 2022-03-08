export const observableCondition = (contents: string) => `{{#if reduxObservable}}${contents}{{/if}}`

export const observableSnippets = {
  import: observableCondition("import { rootEpic } from './root.epic';"),
  configure: observableCondition("const sagaMiddleware = createSagaMiddleware()"),
  middleware: observableCondition(".concat(sagaMiddleware)"),
  run: observableCondition("sagaMiddleware.run(rootSaga)"),
};
