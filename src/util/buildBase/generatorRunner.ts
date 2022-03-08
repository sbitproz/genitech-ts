import { Config } from "@interfaces/buildBase.interface";
import { GeneratorEntity, Generator as GeneratorCore } from "@interfaces/template.interface";

export const generatorEntity = (Generator: GeneratorEntity) => (config: Config) => config.entities.map((entity) => Generator.generate(config, entity));

export const generatorCore = (Generator: GeneratorCore) => (config: Config) => Generator.generate(config);

export const generatorOther = (Generator: GeneratorCore, ...other: any) => (config: Config) => Generator.generate(config, ...other);
