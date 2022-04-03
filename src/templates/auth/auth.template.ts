import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";
import { MODULE } from "@config/core/module.constants";
import { GeneratorEntity } from "@interfaces/template.interface";

const generate = (config: Config) => {
  const template = `
  import { AuthService as IAuthService, BaseUser } from './auth.interfaces';
  
  const auth = getAuth();
  
  class AuthService implements IAuthService {
    login(username: string, password: string): Promise<any> {
      return Promise.resolve();
    }
  
    async register(user: BaseUser): Promise<any> {
      return Promise.resolve();
    }
  
    verify(username: string, password: string): Promise<any> {
      return Promise.resolve();
    }
  
    loginWithMain(): Promise<any> {
      return Promise.resolve();
    }
  
    onAuthStateChanged(onStateChange: (use: any) => void) {
      return Promise.resolve();
    }
  
    logout() {
      // return userService.signOut();
    }
  
    currentUser(): any | null {
      return null;
    }
  
    isAuthenticated() {
      return Boolean(this.currentUser());
    }
  
    reset(email: string) {
      return null;
    }
  }
  
  const authService = new AuthService();
    
  Object.freeze(authService);
  
  export { authService };
  `
  return {
    template: translate(template,config),
    title: `Auth template`,
    fileName: `${moduleLibLocation(MODULE.AUTH)}auth.service.ts`,
  };
};

const InterfaceGenerator: GeneratorEntity = {
  generate,
};

export default InterfaceGenerator;