import { MODULE } from "@config/module.constants";
import { Config } from "@interfaces/buildBase.interface";
import { Generator } from "@interfaces/template.interface";
import { translate } from "@util/buildBase/buildBase";
import { moduleLibLocation } from "@util/commands/package.helpers";

const generate = (config: Config) => {
  const template = `
import { configureStore } from '@reduxjs/toolkit'
import { Action } from 'redux';
import { OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';


{{#each entities}}
import {{this.variations.refs}}Reducer from './{{this.variations.refs}}.slice';
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

// --------------------------------------------------------

const keyHasType = (type: unknown, key: unknown) => {
  return type === key || (typeof key === 'function' && type === key.toString());
};

/**
 * Inferring the types of this is a bit challenging, and only works in newer
 * versions of TypeScript.
 *
 * @param ...types One or more Redux action types you want to filter for, variadic.
 */
export function ofType<
  // All possible actions your app can dispatch
  Input extends Action,
  // The types you want to filter for
  Type extends Input['type'],
  // The resulting actions that match the above types
  Output extends Input = Extract<Input, Action<Type>>
>(...types: [Type, ...Type[]]): OperatorFunction<Input, Output> {
  const len = types.length;

  if ((process as any).env.NODE_ENV !== 'production') {
    if (len === 0) {
      console.warn('ofType was called without any types!');
    }
    if (types.some(key => key === null || key === undefined)) {
        console.warn('ofType was called with one or more undefined or null values!');
    }
  }

  return filter(
    len === 1
      ? (action): action is Output => keyHasType(action.type, types[0])
      : (action): action is Output => {
        for (let i = 0; i < len; i++) {
          if (keyHasType(action.type, types[i])) {
            return true;
          }
        }

        return false;
      }
  );
}


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