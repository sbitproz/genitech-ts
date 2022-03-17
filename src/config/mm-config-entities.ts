import { Schema } from "@interfaces/buildBase.interface";

export const events: Schema[] = [
  {
    model: "uploadResource",
    modelPlural: "uploadResources",
  },
  {
    model: "uploadProfilePicture",
    modelPlural: "uploadProfilePictures",
  },
  {
    model: "userLogin",
    modelPlural: "userLogin",
  },
  {
    model: "userLogout",
    modelPlural: "userLogout",
  },
  {
    model: "userResetPassword",
    modelPlural: "userResetPassword",
  },
  {
    model: "userRegister",
    modelPlural: "userRegister",
  },
];

export const goalsSchema: Schema = {
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

export const sprintSchema: Schema = {
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

export const goalTemplatesSchema: Schema = {
  model: "goalTemplate",
  modelPlural: "goalTemplates",
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

export const sprintTemplateSchema: Schema = {
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

export const currentUser: Schema = {
  model: "currentUser",
  modelPlural: "currentUser",
  pkField: {
    fieldname: "id",
    type: "uuid",
  },	
  fields:  [
    {
      fieldname: "name",
      type: "fullname",
    },
    {
      fieldname: "email",
      type: "email",
    },
    {
      fieldname: "lastLogin",
      type: "date",
    },
  ],
};

export const layoutSchema: Schema = {
  model: "layout",
  modelPlural: "layouts",
  fields: [
    {
      fieldname: "expandLeftSidebar",
      type: "boolean",
    },
    {
      fieldname: "expandRightSidebar",
      type: "boolean",
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

export const homeSchema: Schema = {
  model: "home",
  modelPlural: "home",
};

export const loginSchema: Schema = {
  model: "login",
  modelPlural: "login",
};
