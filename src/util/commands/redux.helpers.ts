import { Config } from "@interfaces/buildBase.interface";
import Generator from "@templates/slice.template";
import GeneratorSelector from "@templates/selector.template";
import GeneratorCore from "@templates/store.template";

export const reduxSlice = (config: Config) => config.entities.map((entity) => Generator.generate(config, entity));

export const reduxSelectors = (config: Config) => config.entities.map((entity) => GeneratorSelector.generate(config, entity));

export const reduxStore = (config: Config) => GeneratorCore.generate(config);