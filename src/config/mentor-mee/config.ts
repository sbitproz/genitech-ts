import { Config } from "@interfaces/buildBase.interface";
import { MODULE } from "../core/module.constants";
import { events } from './events'
import {
  userSchema,
  mentorSchema,
  menteeSchema,
  sprintSchema,
  goalsSchema,
  sprintTemplateSchema,
  goalTemplatesSchema,
  layoutSchema,
  homeSchema,
  globalFiltersSchema,
  loginSchema,
  currentUser,
} from "./entities";

export const config: Config = {
  name: "mentor-mee",
  application: "web-app",
  observable: true,
  reduxObservable: false,
  reduxSaga: true,
  firebase: true,
  firebaseAPI: false,
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
  stateEntities: [layoutSchema, currentUser, globalFiltersSchema],
  detached: {
    home: homeSchema,
    login: loginSchema,
  },
};
