export const sagaCondition = (contents: string) => `{{#if reduxSaga}}${contents}{{/if}}`

export const sagaSnippets = {
  import: `${sagaCondition(`import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root.saga';`)}`,
  configure: sagaCondition("const sagaMiddleware = createSagaMiddleware()"),
  middleware: sagaCondition(".concat(sagaMiddleware)"),
  run: sagaCondition("sagaMiddleware.run(rootSaga)"),
};
