import { Config, Schema } from "../interfaces/buildBase.interface";
import { MODULE } from "./module.constants";

export const mentorSchema: Schema = {
  model: "mentor",
  modelPlural: "mentors",
};

export const menteeSchema: Schema = {
  model: "mentor",
  modelPlural: "mentees",
};

const homeSchema: Schema = {
  model: "home",
  modelPlural: "home",
};

const loginSchema: Schema = {
  model: "login",
  modelPlural: "login",
};

export const config: Config = {
  name: "mentor-mee",
  application: "web-app",
  data: true,
  observable: true,
  firebase: true,
  scope: "acme",
  type: "react-express",
  packages: ["axios", "-D json-server", "-D concurrently", "@material-ui/core"],
  dependencies: [],
  libs: [
    MODULE.DATA,
    MODULE.STATE,
    MODULE.INTERFACE,
    MODULE.MATERIAL,
    MODULE.LOGIN,
  ],
  entities: [
    mentorSchema,
    menteeSchema,
    // sprintsSchema,
    // achievablesSchema,
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
