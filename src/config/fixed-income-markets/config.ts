import { Config } from "@interfaces/buildBase.interface";
import { MODULE } from "../core/module.constants";
import { events } from './events'
import {
  userSchema,
  indicationSchema,
  issuanceSchema,
  issuerSchema,
  layoutSchema,
  homeSchema,
  globalFiltersSchema,
  loginSchema,
  currentUser,
} from "./entities";

export const config: Config = {
  name: "fixed-income-markets",
  application: "web-app",
  observable: true,
  reduxObservable: false,
  reduxSaga: true,
  firebase: true,
  firebaseAPI: false,
  events,
  baseEndpoint: "api-fixed-income-market",
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
    issuanceSchema,
    indicationSchema,
    issuerSchema,
  ],
  stateEntities: [layoutSchema, currentUser, globalFiltersSchema],
  detached: {
    home: homeSchema,
    login: loginSchema,
  },
};
