import { Config, Schema } from "../interfaces/buildBase.interface"

// THE INGREDIENTS
const INTERFACE_MODULE = 'core-interfaces';
const DATA_MODULE = 'core-data';
const STATE_MODULE = 'core-state';
const MATERIAL_MODULE = 'material';
const LOGIN_MODULE = 'ui-login';

export const mentorSchema: Schema = {
  model: "mentor",
  modelPlural: "mentors"
}

export const menteeSchema: Schema = {
  model: "mentor",
  modelPlural: "mentees"
}

const homeSchema: Schema = {
  model: 'home',
  modelPlural: 'home',
};

const loginSchema: Schema = {
  model: 'login',
  modelPlural: 'login',
};

export const config: Config = {
  name: 'mentor-mee',
  application: 'web-app',
  scope: 'acme',
  type: 'react-express',
  packages: ['axios', '-D json-server', '-D concurrently', '@material-ui/core'],
  dependencies: [],
  libs: [DATA_MODULE, STATE_MODULE, INTERFACE_MODULE, MATERIAL_MODULE, LOGIN_MODULE],
  entities: [
    mentorSchema,
    menteeSchema,    
  ],
  detached: {
    home: homeSchema,
    login: loginSchema,
  },
};

const suffixes = {
  style: `--style=scss`,
  lib: `--parent-module=apps/${config.application}/src/app/app.module.ts`,
  component: `-m app.module.ts --style=scss`,
};