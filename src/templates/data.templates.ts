// import { buildNameVariation } from "../util/buildBase/buildBase";
// import { Schema } from "../interfaces/buildBase.interface";
import { Config } from "../interfaces/buildBase.interface";
import { translate } from "../util/buildBase/buildBase";

const generate = (config: Config) => {
  const template = `
    
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
