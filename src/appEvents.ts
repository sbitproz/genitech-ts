import { config } from "@config/mm-config";
import { commands } from "@builders/buildEventsLayer";
import 'handlebars/helpers';

commands(config);
