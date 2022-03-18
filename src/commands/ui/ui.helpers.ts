import { Config } from "@interfaces/buildBase.interface";
import GeneratorColors from "@templates/ui/colors.templates";
import GeneratorGlobalStyles from "@templates/ui/globalStyles.templates";
import GeneratorSpacing from "@templates/ui/spacing.templates";
import GeneratorThemeTypings from "@templates/ui/themeTypings.templates";
import GeneratorTheme from "@templates/ui/theme.templates";
import GeneratorLibrary from "@templates/core/libraryExport.templates";
import { generatorCore, generatorOther } from "builders/generatorRunner";
import { MODULE } from "@config/module.constants";

export const uiGenerators = (config: Config) => [
  { func: generatorCore(GeneratorTheme), params: { config } },
  { func: generatorCore(GeneratorSpacing), params: { config } },
  { func: generatorCore(GeneratorGlobalStyles), params: { config } },
  { func: generatorCore(GeneratorColors), params: { config } },
  { func: generatorCore(GeneratorThemeTypings), params: { config } },
  {
    func: generatorOther(GeneratorLibrary, MODULE.UI, [
      "theme/colors",
      "theme/global.styles",
      "theme/spacing",
      "theme/theme",
      "theme/types.d",
    ]),
    params: { config },
  },
];
