import { createGlobalStyle } from 'styled-components';

// Use React-Helemet to inject css such as importing and setting font-family

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    position: relative;
    font-family: 'Roboto', sans-serif;
  }
`;
