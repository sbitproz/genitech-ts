import { config, mentorSchema } from "./config/mm-config";
import { commands } from '@commands/buildProject';

commands(mentorSchema, config); 