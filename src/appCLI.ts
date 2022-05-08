import { config } from "@config/fixed-income-markets/config";
import { commands } from "@builders/buildEntityLayer";
import 'handlebars/helpers';

commands(config);
