import Layout from '@/layout';
import FeaturedGuests from '@/screens/FeaturedGuests';
import Contentful from '@/lib/contentful';
import { FEATURED_GUESTS_ATTRIBUTES, FEATURED_GUEST_ATTRIBUTES } from '@/lib/fragments';

export async function getStaticProps() {
  try {
    const query = `
    ${FEATURED_GUEST_ATTRIBUTES}
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

    const {
      pastFeaturedGuestsCollection: { items },
      pastPartners,
      title,
    } = data?.featuredGuestsCollection?.items?.[0];

    const formattedProps = {
      contentBlock: {
        headingText: title,
        pageHeading: true,
      },
      featuredGuests: items.map((featuredGuest) => {
        const { name, title } = featuredGuest;
        return {
          name,
          title,
        };
      }),
      partners: pastPartners.map((partner) => {
        return {
          description: partner,
        };
      }),
    };

    return {
      props: {
        pageTitle: 'Featured Guests',
        pageDescription: 'Counsel Connections Featured Guests',
        ogImageUrl: '',
        ...formattedProps,
      },
    };
  } catch (error) {
    console.error('error fetching data', error);
    throw error;
  }
}

const FeaturedGuestsPage = (props) => {
  return (
    <Layout {...props}>
      <FeaturedGuests {...props} />
    </Layout>
  );
};

export default FeaturedGuestsPage;
