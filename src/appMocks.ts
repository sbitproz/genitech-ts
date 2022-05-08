import { config } from "@config/fixed-income-markets/config";
import { commands } from "@builders/buildMockLayer";
import 'handlebars/helpers';

commands(config);
