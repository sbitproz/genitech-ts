import { Config, Schema } from "../interfaces/buildBase.interface";
import { MODULE } from "./module.constants";

const sprintSchema: Schema = {
  model: "sprint",
  modelPlural: "sprints",
};

export const userSchema: Schema = {
  model: "user",
  modelPlural: "users",
  fields: [{
    name: 'id',
    type: 'uid'
  },{
    name: 'name',
    type: 'string'
  }]
}

export const mentorSchema: Schema = {
  model: "mentor",
  modelPlural: "mentors",
  fields: [{
    name: 'userId',
    type: 'uid'
  },{
    name: 'slug',
    type: 'string'
  },{
    name: 'profileIntro',
    type: 'string'
  },{
    name: 'profileDescription',
    type: 'string'
  }]
};

export const menteeSchema: Schema = {
  model: "mentee",
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
  baseEndpoint: 'mentor-mee',
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
    userSchema,
    mentorSchema,
    menteeSchema,
    sprintSchema,
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
