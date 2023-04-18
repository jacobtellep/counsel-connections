import Head from 'next/head';

function Layout({ children, pageTitle, pageDescription, ogImageUrl }) {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImageUrl} />
      </Head>
      <main>{children}</main>
    </div>
  );
}

export default Layout;