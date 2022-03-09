import { Config } from "@interfaces/buildBase.interface";
import Generator from "@templates/core/cli.template";
import { generatorCore } from "builders/generatorRunner";

export const workspaceGenerators = (config: Config) => [
    { func: generatorCore(Generator), params: { config }},
]