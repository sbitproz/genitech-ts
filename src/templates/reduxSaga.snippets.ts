export const sagaSnippets = {
  import: `
  {{#if reduxSaga}}
  import createSagaMiddleware from 'redux-saga'
  {{/if}}
    `,
  configure: `
  {{#if reduxSaga}}
  const sagaMiddleware = createSagaMiddleware()
  {{/if}}
  `,
  middleware: `
  {{#if reduxSaga}}
  sagaMiddleware,
  {{/if}}
  `,
  run: `
  {{#if reduxSaga}}
  sagaMiddleware.run(helloSaga)
  {{/if}}
  `,
};
