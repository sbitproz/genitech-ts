export const firebaseCondition = (contents: string) => `{{#if firebaseAPI}}${contents}{{/if}}`

export const firebaseSnippets = {
  apiSuffix: `${firebaseCondition('.json')}`,
  baseEndpoint: `${firebaseCondition('https://{{firebaseProjectId}}.firebaseio/')}` 
};
