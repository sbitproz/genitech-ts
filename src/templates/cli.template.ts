import { Config } from "../interfaces/buildBase.interface";
import { translate } from "../util/buildBase/buildBase";
import { Generator } from "../interfaces/template.interface";

const generate = (config: Config) => {
  const template = `
    yarn config set "strict-ssl" false &&

    npx create-nx-workspace@latest --preset react --appName={{application}} --style=styled-components --interactive=false --packageManager=yarn --nx-cloud=false {{name}} &&
      cd {{name}}/ &&

    yarn add -D json-server concurrently @types/node &&

    jq '.scripts["mock-server"] = "json-server --port 3004 --watch ./mock/{{name}}-mock.json"' package.json > package-temp.json &&

    mv package-temp.json package.json &&

    nx generate @nrwl/js:library --name=core-state --buildable &&

    {{#if this.data}}
      {{#each entities}}
    nx g slice {{this.variations.refs}} --project core-state &&
      {{/each}}
    {{/if}}

    nx generate @nrwl/js:library --name=core-types --buildable &&

    nx generate @nrwl/js:library --name=core-data --buildable &&

    nx generate @nrwl/js:library --name=core-auth --buildable &&

    yarn add @mui/material @mui/styled-engine-sc styled-components @mui/icons-material &&

    {{#if this.data}}
    yarn add axios &&

      {{#if this.observable}}
    yarn add rxjs &&
      {{/if}}  
    {{/if}}

    yarn add @reduxjs\/toolkit &&
    yarn add react-redux &&

    yarn config set "strict-ssl" true
  `

  return {
    template: translate(template,config),
    title: `CLI project builder`,
    fileName: `workspaceCliCommands.txt`,
  };
};

const Generator: Generator = {
  generate,
};

export default Generator;
