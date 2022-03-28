import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { Generator } from "@interfaces/template.interface";
import { MODULE } from "@config/module.constants";

const generateTsLibrary = (name: string) => `nx generate @nrwl/workspace:library --name=${name} --buildable &&`
const generateReactLibrary = (name: string) => `nx g @nrwl/react:library --name=${name} --buildable &&`

const generate = (config: Config) => {
  const template = 
`yarn config set "strict-ssl" false &&

npx create-nx-workspace@latest --preset react --appName={{application}} --style=styled-components --interactive=false --packageManager=yarn --nx-cloud=false {{name}} &&
  cd {{name}}/ &&

yarn add -D json-server concurrently @types/node &&

jq '.scripts["mock-server"] = "json-server --port 3004 --watch ./mock/{{name}}-mock.json"' package.json > package-temp.json &&

mv package-temp.json package.json &&

${generateTsLibrary(MODULE.STATE)}
${generateTsLibrary(MODULE.INTERFACE)}
${generateTsLibrary(MODULE.DATA)}
${generateTsLibrary(MODULE.AUTH)}

${generateReactLibrary(MODULE.UI)}
${generateReactLibrary(MODULE.HOOKS)}

yarn add @mui/material@^5.4.0 @mui/icons-material@^5.3.1 @mui/styled-engine-sc @emotion/react@^11.7.1 @emotion/styled@^11.6.0 polished@^4.1.4 && 

yarn add react-router-dom@^6.2.1 &&

yarn add axios &&

{{#if this.reduxObservable}}
  yarn add redux-observable@^2.0.0

{{/if}}  

{{#if this.reduxSaga}}
  yarn add redux-saga@^1.1.3
{{/if}}  


{{#if this.observable}}
  yarn add rxjs@^7.5.5 &&
{{/if}}  

yarn add @reduxjs\/toolkit@^1.8.0 &&
yarn add react-redux@^7.2.6 &&

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
