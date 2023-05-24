import Layout from '@/layout';
import Publications from '@/screens/Publications';
import Contentful from '@/lib/contentful';
import { PUBLICATIONS_ATTRIBUTES } from '@/lib/fragments';

export async function getStaticProps() {
  try {
    const query = `
  ${PUBLICATIONS_ATTRIBUTES}
    query {
      publicationsCollection(limit: 1) {
        items {
          ...Publications
        }
      }
    }
  `;

    const { data } = await Contentful.fetch(query, {});

    return {
      props: {
        ...data?.publicationsCollection?.items?.[0],
      },
    };
  } catch (error) {
    console.error('error fetching data', error);
    throw error;
  }
}

import fixtures from '@/screens/Publications/fixtures';

const PublicationsPage = (props) => {
  console.log('props', props);
  return (
    <Layout {...fixtures}>
      <Publications {...fixtures.publications} />
    </Layout>
  );
};

export default PublicationsPage;
