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
  model: "goal",
  modelPlural: "goals",
  pkField: {
    fieldname: "id",
    type: "uuid",
  },
  fields: [
    {
      fieldname: "title",
      type: "lorem",
    },
    {
      fieldname: "profileDescription",
      type: "lorem",
    },
  ],
  fkFields: [
    {
      fieldname: "sprintId",
      type: "uuid",
    },
  ],
};

const sprintSchema: Schema = {
  model: "sprint",
  modelPlural: "sprints",
  pkField: {
    fieldname: "id",
    type: "uuid",
  },
  fields: [
    {
      fieldname: "title",
      type: "lorem",
    },
    {
      fieldname: "profileDescription",
      type: "lorem",
    },
  ],
  fkFields: [
    {
      fieldname: "mentorId",
      type: "uuid",
    },
    {
      fieldname: "sprintTemplateId",
      type: "uuid",
    },
    {
      fieldname: "menteeId",
      type: "uuid",
    },
  ],
};

const goalsTemplateSchema: Schema = {
  model: "goalsTemplate",
  modelPlural: "goalsTemplates",
  pkField: {
    fieldname: "id",
    type: "uuid",
  },
  fields: [
    {
      fieldname: "title",
      type: "lorem",
    },
    {
      fieldname: "profileDescription",
      type: "lorem",
    },
  ],
  fkFields: [
    {
      fieldname: "mentorId",
      type: "uuid",
    },
    {
      fieldname: "sprintTemplateId",
      type: "uuid",
    },
    {
      fieldname: "menteeId",
      type: "uuid",
    },
  ],
};

const sprintTemplateSchema: Schema = {
  model: "sprintTemplate",
  modelPlural: "sprintTemplates",
  pkField: {
    fieldname: "id",
    type: "uuid",
  },
  fields: [
    {
      fieldname: "title",
      type: "lorem",
    },
    {
      fieldname: "profileDescription",
      type: "lorem",
    },
  ],
  fkFields: [
    {
      fieldname: "mentorId",
      type: "uuid",
    },
  ],
};

export const userSchema: Schema = {
  model: "user",
  modelPlural: "users",
  pkField: {
    fieldname: "id",
    type: "uuid",
  },
  fields: [
    {
      fieldname: "name",
      type: "fullname",
    },
    {
      fieldname: "email",
      type: "email",
    },
    {
      fieldname: "password",
      type: "password",
    },
    {
      fieldname: "lastLogin",
      type: "date",
    },
  ],
};

export const mentorSchema: Schema = {
  model: "mentor",
  modelPlural: "mentors",
  pkField: {
    fieldname: "id",
    type: "uuid",
  },
  fields: [
    {
      fieldname: "slug",
      type: "lorem",
    },
    {
      fieldname: "profileIntro",
      type: "lorem",
    },
    {
      fieldname: "profileDescription",
      type: "lorem",
    },
  ],
};

export const menteeSchema: Schema = {
  model: "mentee",
  modelPlural: "mentees",
  pkField: {
    fieldname: "id",
    type: "uuid",
  },
  fields: [
    {
      fieldname: "slug",
      type: "lorem",
    },
    {
      fieldname: "profileIntro",
      type: "lorem",
    },
    {
      fieldname: "profileDescription",
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
