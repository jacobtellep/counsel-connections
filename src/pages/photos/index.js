import Layout from '@/layout';
import Photos from '@/screens/Photos';
import Contentful from '@/lib/contentful';
import { ASSET_QUERY } from '@/lib/fragments';
import { parse } from '@fortawesome/fontawesome-svg-core';

export async function getStaticProps() {
  try {
    const query = ASSET_QUERY;

    const { data } = await Contentful.fetch(query, {});

    const { items } = data?.assetCollection;

    const formattedProps = {
      photos: items.map((item) => {
        const { title, url, width, height } = item;
        return {
          alt: title,
          src: url,
          width: width ? parseInt(width) : 0,
          height: height ? parseInt(height) : 0,
        };
      }),
    };

    return {
      props: {
        pageTitle: 'Photos',
        pageDescription: 'Counsel Connections Photos Page',
        ogImageUrl: '',
        ...formattedProps,
      },
    };
  } catch (error) {
    console.error('error fetching data', error);
    throw error;
  }
}

const PhotosPage = (props) => {
  return (
    <Layout {...props}>
      <Photos {...props} />
    </Layout>
  );
};

export default PhotosPage;
