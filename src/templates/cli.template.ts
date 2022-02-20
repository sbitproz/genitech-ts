import { Config } from "../interfaces/buildBase.interface";
import { translate } from "../util/buildBase/buildBase";
import { Generator } from "../interfaces/template.interface";

const generate = (config: Config) => {
  const template = `
    npx create-nx-workspace@latest --preset react --appName={{application}} --style=styled-components --interactive=false --packageManager=yarn --nx-cloud=false {{name}} &&
      cd {{name}}/ &&

    nx generate @nrwl/js:library --name=core-state --buildable &&

    {{#if this.data}}
      {{#each entities}}
        nx g slice {{this.refs}}Slice --project core-state &&
      {{/each}}
    {{/if}}

    nx generate @nrwl/js:library --name=core-types --buildable &&

    nx generate @nrwl/js:library --name=core-data --buildable &&

    nx generate @nrwl/js:library --name=core-auth --buildable &&

    {{#if this.data}}
      yarn add axios &&

      {{#if this.observable}}
        yarn add rxjs &&
      {{/if}}  
    {{/if}}

    yarn add @reduxjs/toolkit &&
    yarn add react-redux
  `

  return {
    template: translate(template,config),
    title: `CLI project builder`,
    fileName: `na`,
  };
};

const Generator: Generator = {
  generate,
};

export default Generator;
