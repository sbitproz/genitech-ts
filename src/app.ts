import { config } from "@config/mm-config";
import { commands } from "@commands/buildProject";
import '@util/handlebars/helpers';

commands(config);
