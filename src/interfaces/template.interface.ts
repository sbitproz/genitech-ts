import { Config, Schema } from "./buildBase.interface";

export interface GenerateReturn {
  template: string;
  title: string;
  fileName: string;
}

export interface Generator {
  generate: (config: Config, ...otherParameters: any) => GenerateReturn;
}

export interface GeneratorEntity<T = GenerateReturn> {
  generate: (config: Config, entity: Schema) => T;
}