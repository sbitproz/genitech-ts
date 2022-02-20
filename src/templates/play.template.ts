import { Config } from "../interfaces/buildBase.interface";
import { Generator } from "../interfaces/template.interface";
import { translate } from "../util/buildBase/buildBase";

const generate = (config: Config) => {
  const template = `
    {{#if this.data}}
      data
    {{else if this.observable}}
      observable
    {{else}}
      else observable
    {{/if}}
      else data
    {{endif}}  
  `

  return {
    template: translate(template,config),
    title: `Playground project builder`,
    fileName: `na`,
  };
};

const Generator: Generator = {
  generate,
};

export default Generator;