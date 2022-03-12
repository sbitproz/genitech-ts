import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/package.helpers";
import { MODULE } from "@config/module.constants";
import { Generator } from "@interfaces/template.interface";

const generate = (config: Config) => {
  const template = `
  import { normalize } from 'polished';
  import { Global, css } from '@emotion/react'
  
  const GlobalStyles = () => (
    <Global
      styles={css\`
        \${normalize()}
  
        *,
        *::before,
        *::after{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      
        html {
          font-family: 'Roboto', 'Helvetica, Arial', 'sans-serif', -apple-system, BlinkMacSystemFont ;
        }
      
        body {
          font-size: 1rem;
          background-color: #ffffff;
          width: 100%;
          height: 100vh;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      
        #root {
          height: 100%;
        }
        \`}
    />
  )  
  
  export default GlobalStyles;
  
`
  return {
    template: translate(template,config),
    title: `Global Styles template`,
    fileName: `${moduleLibLocation(MODULE.UI)}theme/global.styles.tsx`,
  };
};

const GlobalStyleGenerator: Generator = {
  generate,
};

export default GlobalStyleGenerator;
