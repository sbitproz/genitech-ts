type FieldTypes = 'uid' | 'string' | 'number' | 'boolean';

type Field = {
  name: string;
  type: FieldTypes;
}

export interface Schema {
  model: string;
  modelPlural: string;
  variations?: NameVariations;
  fields?: Field[]
}

export interface NameVariations {
  ref: string;
  refs: string;
  model: string;
  models: string;
  selector: string;
  selectors: string;
  modelParam?: string;
  modelParams?: string;
  constant?: string;
  constants?: string;
}

export interface Config {
  name: string;
  data: boolean;
  observable?: boolean;
  firebase?: boolean;
  application: string;
  scope: string;
  type: string;
  baseEndpoint: string;
  packages?: string[];
  dependencies?: string[];
  libs?: string[];
  entities?: Schema[];
  detached?: {
    [key: string]: Schema;
  };
}