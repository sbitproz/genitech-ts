import { Config, Schema } from "../interfaces/buildBase.interface";
import { MODULE } from "./module.constants";

const events = ["enrol", "leave"];

const sprintSchema: Schema = {
  model: "sprint",
  modelPlural: "sprints",
  fields: [
    {
      name: "id",
      type: "uuid",
    },
  ],
};

export const userSchema: Schema = {
  model: "user",
  modelPlural: "users",
  fields: [
    {
      name: "id",
      type: "uuid",
    },
    {
      name: "name",
      type: "fullname",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "slug",
      type: "lorem",
    },
  ],
};

export const mentorSchema: Schema = {
  model: "mentor",
  modelPlural: "mentors",
  fields: [
    {
      name: "id",
      type: "uuid",
    },
    {
      name: "slug",
      type: "lorem",
    },
    {
      name: "password",
      type: "password",
    },
    {
      name: "name",
      type: "fullname",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "profileIntro",
      type: "lorem",
    },
    {
      name: "profileDescription",
      type: "lorem",
    },
  ],
};

export const menteeSchema: Schema = {
  model: "mentee",
  modelPlural: "mentees",
  fields: [
    {
      name: "id",
      type: "uuid",
    },
    {
      name: "slug",
      type: "lorem",
    },
    {
      name: "password",
      type: "password",
    },
    {
      name: "name",
      type: "fullname",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "profileIntro",
      type: "lorem",
    },
    {
      name: "profileDescription",
      type: "lorem",
    },
  ],
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
  observable: true,
  reduxObservable: false,
  reduxSaga: true,
  firebase: true,
  scope: "acme",
  events,
  baseEndpoint: "mentor-mee",
  type: "react-express",
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
