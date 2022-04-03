import { config } from "@config/mentor-mee/config";
import { commands } from "@builders/buildEventsLayer";
import 'handlebars/helpers';

commands(config);
