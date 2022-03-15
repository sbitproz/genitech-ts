
  export interface BaseUser {
    name: string;
    email: string;
    password: string;
  }
  
  export interface AuthService {
    isAuthenticated: () => boolean;
    login: (username: string, password: string) => Promise<any>;
    logout: () => Promise<void>;
    reset: (email: string) => Promise<void>;
    register: (user: BaseUser) => Promise<any>;
    currentUser: () => any | null;
  }
  
  