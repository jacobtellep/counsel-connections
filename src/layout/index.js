import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; // Make sure the container takes up the full viewport height
`;

const MainContent = styled.main`
  flex-grow: 1; // Make the main content take up the available space, pushing the footer to the bottom
  min-height: ${({ navbarHeight }) => `calc(100vh - ${navbarHeight}px)`};
`;

function Layout({ children, pageTitle, pageDescription, ogImageUrl }) {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <LayoutContainer>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:image' content={ogImageUrl} />
      </Head>
      <Navbar setNavbarHeight={setNavbarHeight} />
      <MainContent navbarHeight={navbarHeight}>{children}</MainContent>
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
