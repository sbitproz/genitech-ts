import { config } from "@config/mm-config";
import { commands } from "@builders/buildEvents";
import 'handlebars/helpers';

commands(config);
