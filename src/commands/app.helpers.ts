import { Config } from "@interfaces/buildBase.interface";
import GeneratorApp from "@templates/app/app.template";
import { generatorCore } from "builders/generatorRunner";

export const appGenerators = (config: Config) => [
  { func: generatorCore(GeneratorApp), params: { config } },
];
