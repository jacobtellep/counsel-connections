import GlobalStyle from '@/lib/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '@/lib/theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
