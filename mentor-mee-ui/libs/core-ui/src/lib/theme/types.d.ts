
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
    // allow configuration using `createTheme`
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

  // allow configuration using `createTheme`
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
