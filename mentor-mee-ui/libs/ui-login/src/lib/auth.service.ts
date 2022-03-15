
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
  