import { Config, Schema } from "./buildBase.interface";

export interface GenerateReturn {
  template: string;
  title: string;
  fileName: string;
}

export interface Generator {
  generate: (config: Config) => GenerateReturn;
}

export interface GeneratorEntity {
  generate: (config: Config, entity: Schema) => GenerateReturn;
}