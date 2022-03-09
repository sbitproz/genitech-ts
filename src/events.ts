import { config } from "@config/mm-config";
import { commands } from "@commands/buildEvents";
import '@util/handlebars/helpers';

commands(config);
