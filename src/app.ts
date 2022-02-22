// import * as fs from 'fs';
import { config, mentorSchema } from "./config/mm-config";
// import Generator from "./templates/cli.template";
// import { buildNameVariation, prepareConfig } from "./util/buildBase/buildBase";
import { commands } from './util/commands/buildProject';

// console.log('!!', buildNameVariation(mentorSchema))

// const newConfig = prepareConfig(config);

// fs.writeFile('test.txt', Generator.generate(newConfig).template, () => { });

commands(mentorSchema, config); 
