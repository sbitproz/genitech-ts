import { Config } from "@interfaces/buildBase.interface";
import { GeneratorEntity, Generator } from "@interfaces/template.interface";

export const generatorEntity = (Generator: GeneratorEntity) => (config: Config) => config.entities.map((entity) => Generator.generate(config, entity));

export const generatorCore = (Generator: Generator) => (config: Config) => Generator.generate(config);

export const generatorOther = (Generator: Generator, ...other: any) => (config: Config) => Generator.generate(config, ...other);
