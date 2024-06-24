import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Open Sans', sans-serif;
    transition: all 0.50s linear;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  * {
    box-sizing: border-box;
  }
`;
