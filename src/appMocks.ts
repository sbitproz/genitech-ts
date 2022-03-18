import { config } from "@config/mm-config";
import { commands } from "@builders/buildMockLayer";
import 'handlebars/helpers';

commands(config);
