import { Config } from "../../interfaces/buildBase.interface";
import Generator from "../../templates/slice.template";

export const slice = (config: Config) => config.entities.map((entity) => Generator.generate(config, entity.variations.ref));
