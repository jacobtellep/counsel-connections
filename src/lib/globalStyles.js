import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamilies.base};
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
