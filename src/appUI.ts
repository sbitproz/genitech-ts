import { config } from "@config/fixed-income-markets/config";
import { commands } from "@builders/buildAppLayer";
import 'handlebars/helpers';

commands(config);
