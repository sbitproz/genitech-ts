import { config } from "@config/mm-config";
import { commands } from "@builders/buildProject";
import 'handlebars/helpers';

commands(config);
