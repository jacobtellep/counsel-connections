import Layout from '@/layout';
import Sponsors from '@/screens/Sponsors';
import Contentful from '@/lib/contentful';
import { SPONSORS_ATTRIBUTES } from '@/lib/fragments';
import fixtures from '@/screens/Sponsors/fixtures';

export async function getStaticProps() {
  try {
    const query = `
    ${SPONSORS_ATTRIBUTES}
    query {
      sponsorsCollection(limit: 1) {
        items {
          ...Sponsors
        }
      }
    }
    `;

    const { data } = await Contentful.fetch(query, {});

    return {
      props: {
        ...data?.sponsorsCollection?.items?.[0],
      },
    };
  } catch (error) {
    console.error('error fetching data', error);
    throw error;
  }
}

const SponsorsPage = (props) => {
  return (
    <Layout>
      <Sponsors {...fixtures.sponsors} />
    </Layout>
  );
};

export default SponsorsPage;
