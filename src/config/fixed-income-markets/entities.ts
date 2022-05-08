import { Schema } from "@interfaces/buildBase.interface";

export const indicationSchema: Schema = {
  model: "indication",
  modelPlural: "indications",
  pkField: {
    fieldname: "id",
    type: "uuid",
  },
  fields: [
    {
      fieldname: "spread",
      type: "number",
    },
    {
      fieldname: "coupon",
      type: "number",
    },
    {
      fieldname: "maturity",
      type: "number",
    },
    {
      fieldname: "currency",
      type: "currency",
    },
  ],
  fkFields: [
    {
      fieldname: "issuerId",
      type: "uuid",
    },
  ],
};

export const issuanceSchema: Schema = {
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
      searchable: true,
    },
    {
      fieldname: "description",
      type: "lorem",
    },
  ],
  fkFields: [
    {
      fieldname: "issuerId",
      type: "uuid",
    },
  ],
};

export const issuerSchema: Schema = {
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
      fieldname: "avatar",
      type: "avatar",
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

export const globalFiltersSchema: Schema = {
  model: "globalFilter",
  modelPlural: "globalFilters",
  fields: [
    {
      fieldname: "search",
      type: "string",
    },
    {
      fieldname: "indications",
      type: "array:entity",
      arrayEntity: 'indication'
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
    {
      fieldname: "avatar",
      type: "avatar",
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
