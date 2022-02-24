import { Config } from "@interfaces/buildBase.interface";
import GeneratorEntity from "@templates/dataEntity.template";
import GeneratorCore from "@templates/dataCore.templates";

export const dataEntity = (config: Config) => config.entities.map((entity) => GeneratorEntity.generate(config, entity));

export const dataCore = (config: Config) => GeneratorCore.generate(config);

