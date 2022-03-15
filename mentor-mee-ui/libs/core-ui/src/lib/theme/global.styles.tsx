
  import { normalize } from 'polished';
  import { Global, css } from '@emotion/react'
  
  const GlobalStyles = () => (
    <Global
      styles={css`
        ${normalize()}
  
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
        `}
    />
  )  
  
  export default GlobalStyles;
  
