import * as fs from 'fs';
import { config, mentorSchema } from "./config/mm-config";
import Generator from "./templates/play.template";
import { buildNameVariation, prepareConfig } from "./util/buildBase/buildBase";
import { commands } from './util/cli/buildProject';

console.log('!!',buildNameVariation(mentorSchema))

const newConfig = prepareConfig(config);

fs.writeFile('test.txt', Generator.generate(newConfig).template, () => {});

commands.m
