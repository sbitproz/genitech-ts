export interface Schema {
  model: string;
  modelPlural: string;
  variations?: NameVariations;
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
}

export interface Config {
  name: string;
  application: string;
  scope: string;
  type: string;
  packages?: string[];
  dependencies?: string[];
  libs?: string[];
  entities?: Schema[];
  detached?: {
    [key: string]: Schema;
  };
}