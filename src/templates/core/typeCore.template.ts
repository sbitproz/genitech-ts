import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";
import { MODULE } from "@config/core/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";

const generate = (config: Config) => {
  const template = `
export type TypeOrNull<T> = T | null;

export type LabelValue = {
  label: string;
  value: number | string;
}
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