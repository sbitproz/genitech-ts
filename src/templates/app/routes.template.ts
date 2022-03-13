import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { Generator } from "@interfaces/template.interface";
import { appRootLocation } from "@commands/package.helpers";

const generate = (config: Config) => {
  const template = `
export const APP_ROUTES = {
  REGISTER: '/register',
  LOGIN: '/login',
  HOME: '/',
  RESET: '/reset',
  GETTING_STARTED: '/getting-started',
  NEW_COURSE: '/courses/new',
};
  `

  return {
    template: translate(template,config),
    title: `App builder`,
    fileName: `${appRootLocation(config)}routes.tsx`,
  };
};

const Generator: Generator = {
  generate,
};

export default Generator;
