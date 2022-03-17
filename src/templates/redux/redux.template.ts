import { MODULE } from "@config/module.constants";
import { Config } from "@interfaces/buildBase.interface";
import { Generator } from "@interfaces/template.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/package.helpers";
import { observableSnippets } from "../../snippets/reduxEpic.snippets";
import { sagaSnippets } from "../../snippets/reduxSaga.snippets";


const generate = (config: Config) => {
  const template = `
import { configureStore } from '@reduxjs/toolkit'
${observableSnippets.import}
${sagaSnippets.import}
{{#each entities}}
import {{this.variations.refs}}Reducer from './{{this.variations.ref}}/{{this.variations.ref}}.slice';
{{/each}}
{{#each simpleEntities}}
import {{this.variations.ref}}Reducer from './{{this.variations.ref}}/{{this.variations.ref}}.reducer';
{{/each}}

${sagaSnippets.configure}

export const store = configureStore({
  reducer: {
    {{#each entities}}
      {{this.variations.refs}}: {{this.variations.refs}}Reducer,
    {{/each}}
    {{#each simpleEntities}}
      {{this.variations.ref}}: {{this.variations.ref}}Reducer,
    {{/each}}
  },
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: false
  })${sagaSnippets.middleware}
})



${sagaSnippets.run}

export const rootState = store.getState();

// Infer the \`RootState\` and \`AppDispatch\` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

`
  return {
    template: translate(template, config),
    title: `Store for app`,
    fileName: `${moduleLibLocation(MODULE.STATE)}store.ts`,
  };
};

const Generator: Generator = {
  generate,
};

export default Generator;