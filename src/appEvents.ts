import { config } from "@config/fixed-income-markets/config";
import { commands } from "@builders/buildEventsLayer";
import 'handlebars/helpers';

commands(config);
