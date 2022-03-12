import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/package.helpers";
import { MODULE } from "@config/module.constants";
import { Generator } from "@interfaces/template.interface";

const generate = (config: Config) => {
  const template = `
import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
    interface Theme {
      colors: {
        [x: string]: string | Function;
      };
      status: {
        danger: string;
      };
    }
    // allow configuration using \`createTheme\`
    interface ThemeOptions {
      colors?: {
        [x: string]: string | Function;
      };
      status?: {
      danger?: string;
    };
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    cardTitle100: React.CSSProperties;
  }

  // allow configuration using \`createTheme\`
  interface TypographyVariantsOptions {
    cardTitle100: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    cardTitle100: true;
  }
}
`;
  return {
    template: translate(template, config),
    title: `Theme typings template`,
    fileName: `${moduleLibLocation(MODULE.UI)}theme/types.d.ts`,
  };
};

const ThemeGenerator: Generator = {
  generate,
};

export default ThemeGenerator;
