import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    background-color: #fff;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
