import { config } from "@config/mm-config";
import { commands } from "@builders/buildAppLayer";
import 'handlebars/helpers';

commands(config);
