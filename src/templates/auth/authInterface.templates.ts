import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/package.helpers";
import { MODULE } from "@config/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";

const generate = (config: Config) => {
  const template = `
  import { User, UserCredential } from 'firebase/auth';

  export interface BaseUser {
    name: string;
    email: string;
    password: string;
  }
  
  export interface AuthService {
    isAuthenticated: () => boolean;
    login: (username: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
    reset: (email: string) => Promise<void>;
    register: (user: BaseUser) => Promise<UserCredential>;
    currentUser: () => User | null;
  }
  
  `
  return {
    template: translate(template,config),
    title: `Auth Interface template`,
    fileName: `${moduleLibLocation(MODULE.AUTH)}auth.interfaces.ts`,
  };
};

const InterfaceGenerator: GeneratorEntity = {
  generate,
};

export default InterfaceGenerator;