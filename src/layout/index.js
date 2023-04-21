import Head from 'next/head';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Layout({ children, pageTitle, pageDescription, ogImageUrl }) {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:image' content={ogImageUrl} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
