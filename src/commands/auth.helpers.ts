import { Config } from "@interfaces/buildBase.interface";
import GeneratorAuthService from "@templates/auth/auth.template";
import GeneratorAuthInterface from "@templates/auth/authInterface.templates";
import { generatorCore } from "builders/generatorRunner";

export const authGenerators = (config: Config) => [
  { func: generatorCore(GeneratorAuthService), params: { config } },
  { func: generatorCore(GeneratorAuthInterface), params: { config } },
];
