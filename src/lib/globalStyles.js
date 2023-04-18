import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

  body {
    font-family: ${({ theme }) => theme.fontFamilies.base};
  }
`;

export default GlobalStyle;
