import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";
import { MODULE } from "@config/core/module.constants";
import { Generator } from "@interfaces/template.interface";

const generate = (config: Config) => {
  const template = `
  const spacings = {
    V1: 4,
    V2: 8,
    V3: 12,
    V4: 16,
    V5: 20,
    V6: 24,
    V7: 28,
    V8: 32,
    V9: 36,
    V10: 40,
    V11: 44,
    V12: 48,
    V13: 52,
    V14: 56,
    H1: 4,
    H2: 8,
    H3: 12,
    H4: 16,
    H5: 20,
    H6: 24,
    H7: 28,
    H8: 32,
    H9: 36,
    H10: 40,
    H11: 44,
    H12: 48,
    H13: 52,
    H14: 56,
  };
  
  export type SpacingTypes = typeof spacings;
  
  export default spacings;  
`
  return {
    template: translate(template,config),
    title: `Spacing template`,
    fileName: `${moduleLibLocation(MODULE.UI)}theme/spacing.ts`,
  };
};

const SpacingGenerator: Generator = {
  generate,
};

export default SpacingGenerator;