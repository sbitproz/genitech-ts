import { Config } from "@interfaces/buildBase.interface";
import { GeneratorEntity, Generator as GeneratorCore } from "@interfaces/template.interface";

export const generatorIterator = (Generator: GeneratorEntity, key: 'dataEntities' | 'simpleEntities' | 'events' ) => 
    (config: Config) => config[key].map((item) => Generator.generate(config, item));

export const generatorEntity = (Generator: GeneratorEntity) => generatorIterator(Generator, 'dataEntities');

export const generatorSimpleEntity = (Generator: GeneratorEntity) => generatorIterator(Generator, 'simpleEntities');

export const generatorEvents = (Generator: GeneratorEntity) => generatorIterator(Generator, 'events');

export const generatorCore = (Generator: GeneratorCore) => (config: Config) => Generator.generate(config);

export const generatorOther = (Generator: GeneratorCore, ...other: any) => (config: Config) => Generator.generate(config, ...other);
