
  import React, { ReactNode } from 'react';
  import { createTheme, ThemeProvider as StyledProvider } from '@mui/material';
  import GlobalStyles from './global.styles';
  import { orange } from '@mui/material/colors';
  import colors from './colors';
  import spacings from './spacing';
  
  export const theme = createTheme({
    colors,
    status: {
      danger: orange[500],
    },
    palette: {
      primary: {
        main: colors.brand,
        contrastText: '#ffffff',
        dark: colors.brandDark,
      },
      success: {
        main: colors.brand,
      },
      error: {
        main: '#d9534f',
      },
    },
    components: {
      MuiCardContent: {
        /* styleOverrides: {
          root: {
            padding: '12px 42px',
            "&:last-child": {
              paddingBottom: 12,
            },
          }
        } */
      },
      MuiTextField: {
        /* defaultProps: {
          variant: 'standard'
        } */
      },
    },
    typography: {
      cardTitle100: {
        display: 'block',
        fontSize: 16,
        fontWeight: 500,
        color: colors.grey155,
        marginBottom: spacings.V2,
      },
    },
  });
  
  
  interface ThemeProviderProps {
    children: ReactNode;
  }
  
  export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    return (
      <>
        <GlobalStyles />
        <StyledProvider theme={theme}>{children}</StyledProvider>
      </>
    );
  };
  
  export default ThemeProvider;  
