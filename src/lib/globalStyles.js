import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamilies.base};
  }
`;

export default GlobalStyle;
