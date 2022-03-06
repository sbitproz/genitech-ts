export enum TypeOptions {
  uuid = 'uuid',
  string = 'string',
  lorem = 'lorem',
  number = 'number',
  boolean = 'boolean',
  forename = 'forename',
  lastname = 'lastname',
  fullname = 'fullname',
  email = 'email',
  password = 'password',
}

export type FieldTypes = `${TypeOptions}`;

type Field = {
  name: string;
  type: FieldTypes;
}

export const StringTypes: string[] = [TypeOptions.email, TypeOptions.uuid, 
  TypeOptions.lorem, TypeOptions.password, TypeOptions.fullname, 
  TypeOptions.forename, TypeOptions.lastname, TypeOptions.string];

export const NumberTypes: string[] = [TypeOptions.number];

export const BooleanTypes: string[] = [TypeOptions.boolean];

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
  events: string[];
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