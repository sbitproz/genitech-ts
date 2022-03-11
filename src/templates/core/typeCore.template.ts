import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/package.helpers";
import { MODULE } from "@config/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";

const generate = (config: Config) => {
  const template = `
export type TypeOrNull<T> = T | null;
  `
  return {
    template: translate(template,config),
    title: `Interface template`,
    fileName: `${moduleLibLocation(MODULE.INTERFACE)}core.interfaces.ts`,
  };
};

const InterfaceGenerator: GeneratorEntity = {
  generate,
};

export default InterfaceGenerator;