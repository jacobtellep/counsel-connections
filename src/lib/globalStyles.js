import { createGlobalStyle } from 'styled-components';

// TODO: analyze these styles and make sure you want all of them.

const GlobalStyle = createGlobalStyle`
  /* Reset box-sizing */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Remove default margin and padding */
  body, h1, h2, h3, h4, p, figure, blockquote, dl, dd {
    margin: 0;
    padding: 0;
  }

  /* Set core root defaults */
  :root {
    --primary-color: #0077cc;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'], ol[role='list'] {
    list-style: none;
  }

  /* Set core body defaults */
  body {
    font-family: ${({ theme }) => theme.fontFamilies.base};
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    min-height: 100vh;
    color: #333;
  }

  /* Remove text decoration from anchor elements */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove outline on focused links and buttons */
  a:focus,
  button:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 4px;
  }

  /* Add any additional styles here */

`;

export default GlobalStyle;
