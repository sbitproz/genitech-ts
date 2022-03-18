import { Config } from "@interfaces/buildBase.interface";
import GeneratorApp from "@templates/app/app.template";
import GeneratorBaseLayout from "@templates/app/baseLayout.template";
import GeneratorUseAuth from "@templates/auth/authHook.template";
import GeneratorIgnore from "@templates/app/gitignore.template";
import GeneratorRoutes from "@templates/app/routes.template";
import { generatorCore } from "builders/generatorRunner";

export const appGenerators = (config: Config) => [
  { func: generatorCore(GeneratorApp), params: { config } },
  { func: generatorCore(GeneratorRoutes), params: { config } },
  { func: generatorCore(GeneratorBaseLayout), params: { config } },
  { func: generatorCore(GeneratorUseAuth), params: { config } },
  { func: generatorCore(GeneratorIgnore), params: { config } },
];
