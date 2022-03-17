import { Config } from "@interfaces/buildBase.interface";
import { MODULE } from "./module.constants";
import {
  events,
  userSchema,
  mentorSchema,
  menteeSchema,
  sprintSchema,
  goalsSchema,
  sprintTemplateSchema,
  goalTemplatesSchema,
  layoutSchema,
  homeSchema,
  loginSchema,
  currentUser,
} from "./mm-config-entities";

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
    MODULE.AUTH,
  ],
  dataEntities: [
    userSchema,
    mentorSchema,
    menteeSchema,
    sprintSchema,
    goalsSchema,
    sprintTemplateSchema,
    goalTemplatesSchema,
  ],
  stateEntities: [layoutSchema, currentUser],
  detached: {
    home: homeSchema,
    login: loginSchema,
  },
};
