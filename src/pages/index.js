import Layout from '@/layout';
import Homepage from '@/screens/Homepage';
import Contentful from '@/lib/contentful';
import { HOMEPAGE_ATTRIBUTES } from '@/lib/fragments';
import fixtures from '@/screens/Homepage/fixtures';

export async function getStaticProps() {
  try {
    const query = `
  ${HOMEPAGE_ATTRIBUTES}
  query {
    homepageCollection(limit: 1) {
      items {
        ...Homepage
      }
    }
  }
  `;

    const { data } = await Contentful.fetch(query, {});

    return {
      props: {
        ...data?.homepageCollection?.items?.[0],
      },
    };
  } catch (error) {
    console.error('error fetching data', error);
    throw error;
  }
}

const Home = (props) => {
  console.log('props', props);
  return (
    <Layout {...fixtures}>
      <Homepage {...fixtures.homepage} />
    </Layout>
  );
};

export default Home;
