import { Config, Schema } from "@interfaces/buildBase.interface";
import { MODULE } from "./module.constants";

const events: Schema[] = [
  {
    model: "uploadResource",
    modelPlural: "uploadResources",
  },
  {
    model: "uploadProfilePicture",
    modelPlural: "uploadProfilePictures",
  },
];

const goalsSchema: Schema = {
  model: "goals",
  modelPlural: "sprints",
  pkField: {
    name: "id",
    type: "uuid",
  },
  fields: [
    {
      name: "title",
      type: "lorem",
    },
    {
      name: "profileDescription",
      type: "lorem",
    },
  ],
  fkFields: [
    {
      name: "sprintId",
      type: "uuid",
    },
  ],
};

const sprintSchema: Schema = {
  model: "sprint",
  modelPlural: "sprints",
  pkField: {
    name: "id",
    type: "uuid",
  },
  fields: [
    {
      name: "title",
      type: "lorem",
    },
    {
      name: "profileDescription",
      type: "lorem",
    },
  ],
  fkFields: [
    {
      name: "mentorId",
      type: "lorem",
    },
    {
      name: "sprintTemplateId",
      type: "lorem",
    },
    {
      name: "menteeId",
      type: "lorem",
    },
  ],
};

const goalsTemplateSchema: Schema = {
  model: "goals",
  modelPlural: "sprints",
  pkField: {
    name: "id",
    type: "uuid",
  },
  fields: [
    {
      name: "title",
      type: "lorem",
    },
    {
      name: "profileDescription",
      type: "lorem",
    },
  ],
  fkFields: [
    {
      name: "mentorId",
      type: "lorem",
    },
    {
      name: "sprintTemplateId",
      type: "lorem",
    },
    {
      name: "menteeId",
      type: "lorem",
    },
  ],
};

const sprintTemplateSchema: Schema = {
  model: "sprint",
  modelPlural: "sprints",
  pkField: {
    name: "id",
    type: "uuid",
  },
  fields: [
    {
      name: "title",
      type: "lorem",
    },
    {
      name: "profileDescription",
      type: "lorem",
    },
  ],
  fkFields: [
    {
      name: "mentorId",
      type: "uuid",
    },
  ],
};

export const userSchema: Schema = {
  model: "user",
  modelPlural: "users",
  pkField: {
    name: "id",
    type: "uuid",
  },
  fields: [
    {
      name: "name",
      type: "fullname",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "password",
      type: "password",
    },
    {
      name: "lastLogin",
      type: "date",
    },
  ],
};

export const mentorSchema: Schema = {
  model: "mentor",
  modelPlural: "mentors",
  pkField: {
    name: "id",
    type: "uuid",
  },
  fields: [
    {
      name: "slug",
      type: "lorem",
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
  pkField: {
    name: "id",
    type: "uuid",
  },
  fields: [
    {
      name: "slug",
      type: "lorem",
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
  firebaseAPI: false,
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
    goalsSchema,
    sprintTemplateSchema,
    goalsTemplateSchema,
  ],
  detached: {
    home: homeSchema,
    login: loginSchema,
  },
};
