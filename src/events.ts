import { config, mentorSchema } from "./config/mm-config";
import { commands } from "@commands/buildProject";
import '@util/handlebars/helpers';

commands(mentorSchema, config);
