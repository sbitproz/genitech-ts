// import { buildNameVariation } from "../util/buildBase/buildBase";
// import { Schema } from "../interfaces/buildBase.interface";
import { Config } from "../interfaces/buildBase.interface";
import { translate } from "../util/buildBase/buildBase";

const generate = (config: Config) => {
  const template = `
    npx create-nx-workspace@latest --preset react --appName={{application}} --style=styled-components --interactive=false --packageManager=yarn --nx-cloud=false {{name}} &&
      cd {{name}}/ &&

    nx generate @nrwl/js:library --name=core-state --buildable &&

    {{#each entities}}
      nx g slice {{this.refs}}Slice --project core-state &&
    {{/each}}

    nx generate @nrwl/js:library --name=core-types --buildable &&

    nx generate @nrwl/js:library --name=core-data --buildable &&

    nx generate @nrwl/js:library --name=core-auth --buildable &&

    {{if observable}}
      
    {{endif}}
  `

  return {
    template: translate(template,config),
    title: `CLI project builder`,
    fileName: `na`,
  };
};

interface GenerateReturn {
  template: string;
  title: string;
  fileName: string;
}

interface Generator {
  generate: (config: Config) => GenerateReturn;
}

export const CliGenerator: Generator = {
  generate,
};
