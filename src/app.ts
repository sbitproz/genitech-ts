import Handlebars from "handlebars";
import { config, mentorSchema } from "./config/mm-config";
import { commands } from "@commands/buildProject";
import { calculateTypes } from "@util/commands/type.helpers";

Handlebars.registerHelper("times", function (n, block) {
  var accum = "";
  for (var i = 0; i < n; ++i) accum += block.fn(i);
  return accum;
});

Handlebars.registerHelper("calculateTypes", function (value) {
  return calculateTypes(value);
});

commands(mentorSchema, config);
