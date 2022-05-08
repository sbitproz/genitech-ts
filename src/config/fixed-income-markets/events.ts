import { SchemaEvents } from "@interfaces/buildBase.interface";

export const indicationEvents: SchemaEvents[] = [
  {
    model: "onRequestIndication",
    modelPlural: "onRequestIndications",
  },
  {
    model: "onCancelIndication",
    modelPlural: "onCancelIndications",
  },
  {
    model: "onAnswerIndication",
    modelPlural: "onAnswerIndications",
  },
].map(event => ({...event, group: 'indication'}));

export const events: SchemaEvents[] = [
  {
    model: "onGlobalFilter",
    modelPlural: "onGlobalFilters",
    group: 'global'
  },
  {
    model: "onUploadResource",
    modelPlural: "onUploadResources",
    group: 'user'
  },
  {
    model: "onUploadProfilePicture",
    modelPlural: "onUploadProfilePictures",
    group: 'user'
  },
  {
    model: "onUserLogin",
    modelPlural: "onUserLogin",
    group: 'auth'
  },
  {
    model: "onFetchUserByEmail",
    modelPlural: "onFetchUserByEmail",
    group: 'user'
  },
  {
    model: "onUserLogout",
    modelPlural: "onUserLogout",
    group: 'auth'
  },
  {
    model: "onUserResetPassword",
    modelPlural: "onUserResetPassword",
    group: 'auth'
  },
  {
    model: "onUserRegister",
    modelPlural: "onUserRegister",
    group: 'auth'
  },
  ...indicationEvents
];