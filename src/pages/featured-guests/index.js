import Layout from '@/layout';
import FeaturedGuests from '@/screens/FeaturedGuests';
import Contentful from '@/lib/contentful';
import { FEATURED_GUESTS_ATTRIBUTES } from '@/lib/fragments';
import fixtures from '@/screens/FeaturedGuests/fixtures';

export async function getStaticProps() {
  try {
    const query = `
  ${FEATURED_GUESTS_ATTRIBUTES}
    query {
      featuredGuestsCollection(limit: 1) {
        items {
          ...FeaturedGuests
        }
      }
    }
  `;

    const { data } = await Contentful.fetch(query, {});

    return {
      props: {
        ...data?.featuredGuestsCollection?.items?.[0],
      },
    };
  } catch (error) {
    console.error('error fetching data', error);
    throw error;
  }
}

const FeaturedGuestsPage = (props) => {
  console.log('props', props);
  return (
    <Layout {...fixtures}>
      <FeaturedGuests {...fixtures.featuredGuests} />
    </Layout>
  );
};

export default FeaturedGuestsPage;
