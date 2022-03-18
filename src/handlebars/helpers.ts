import Handlebars from "handlebars";
import { calculateTypes } from "commands/core/type.helpers";

Handlebars.registerHelper("times", function (n, block) {
  var accum = "";
  for (var i = 0; i < n; ++i) accum += block.fn(i);
  return accum;
});

Handlebars.registerHelper("calculateTypes", function (value) {
  return calculateTypes(value);
});
