import { Config } from "@interfaces/buildBase.interface";
import Generator from "@templates/cli.template";

export const workspace = (config: Config) => Generator.generate(config)