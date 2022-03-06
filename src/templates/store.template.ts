import { MODULE } from "@config/module.constants";
import { Config } from "@interfaces/buildBase.interface";
import { Generator } from "@interfaces/template.interface";
import { translate } from "@util/buildBase/buildBase";
import { moduleLibLocation } from "@util/commands/package.helpers";

const generate = (config: Config) => {
  const template = `
import { configureStore } from '@reduxjs/toolkit'
import { Action } from 'redux';
import { rootEpic } from './root.epic';
{{#each entities}}
import {{this.variations.refs}}Reducer from './{{this.variations.ref}}.slice';
{{/each}}

export const store = configureStore({
  reducer: {
    {{#each entities}}
      {{this.variations.refs}}: {{this.variations.refs}}Reducer,
    {{/each}}
  }
})

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