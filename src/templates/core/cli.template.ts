import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { Generator } from "@interfaces/template.interface";

const generateTsLibrary = (name: string) => `nx generate @nrwl/workspace:library --name=${name} --buildable &&`

const generate = (config: Config) => {
  const template = `
    yarn config set "strict-ssl" false &&

    npx create-nx-workspace@latest --preset react --appName={{application}} --style=styled-components --interactive=false --packageManager=yarn --nx-cloud=false {{name}} &&
      cd {{name}}/ &&

    yarn add -D json-server concurrently @types/node &&

    jq '.scripts["mock-server"] = "json-server --port 3004 --watch ./mock/{{name}}-mock.json"' package.json > package-temp.json &&

    mv package-temp.json package.json &&

    ${generateTsLibrary('core-state')}
    ${generateTsLibrary('core-types')}
    ${generateTsLibrary('core-data')}
    ${generateTsLibrary('core-auth')}
    
    yarn add @mui/material @mui/styled-engine-sc styled-components @mui/icons-material && 

    yarn add axios &&

    {{#if this.reduxObservable}}
      yarn add redux-observable
    {{/if}}  

    {{#if this.reduxSaga}}
      yarn add redux-saga
    {{/if}}  


    {{#if this.observable}}
      yarn add rxjs &&
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
