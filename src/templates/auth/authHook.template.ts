import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { Generator } from "@interfaces/template.interface";
import { appRootLocation } from "@commands/core/package.helpers";

const generate = (config: Config) => {
  const template = `
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
  `

  return {
    template: translate(template,config),
    title: `useAuthentication hoook builder`,
    fileName: `${appRootLocation(config)}common/hooks/useAuthenticated.tsx`,
  };
};

const Generator: Generator = {
  generate,
};

export default Generator;

