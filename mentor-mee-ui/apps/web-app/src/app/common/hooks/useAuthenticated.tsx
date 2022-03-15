
import { useEffect, useState } from 'react';

const authService = {
  onAuthStateChanged: (a: Function) => {}
}

export const useAuthenticated = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authStateChange = (user: any) => {
      setIsLoggedIn(!!user);
    };

    authService.onAuthStateChanged(authStateChange);
  }, []);

  return { isLoggedIn };
};  
  