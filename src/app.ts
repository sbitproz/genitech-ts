import * as fs from 'fs';
import { config, mentorSchema } from "./config/mm-config";
import { CliGenerator } from "./templates/cli.template";
import { buildNameVariation, prepareConfig } from "./util/buildBase/buildBase";

console.log('!!',buildNameVariation(mentorSchema))

const newConfig = prepareConfig(config);

fs.writeFile('test.txt', CliGenerator.generate(newConfig).template, () => {});
