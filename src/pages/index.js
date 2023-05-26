import Layout from '@/layout';
import Homepage from '@/screens/Homepage';
import Contentful from '@/lib/contentful';
import { HOMEPAGE_ATTRIBUTES } from '@/lib/fragments';
import { formatDate, replaceImageURL } from '@/lib/utils';

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

    const {
      title,
      subtitle,
      timelineCollection: { items },
    } = data?.homepageCollection?.items?.[0];

    let count = 0;

    const formattedProps = {
      contentBlock: {
        headingText: subtitle,
      },
      jumbotron: {
        headingText: title,
        imageUrl: '/assets/huntington-live-on-the-levy.jpg',
        imageAlt:
          'Photo of Live on the Levy found at http://charlestonstormwater.org/river-proud/ and Photo of Huntington found at https://www.cityofhuntington.com/residents/photo-gallery/',
        mobileImageUrl: '/assets/mobile-jumbo.jpg',
      },
      timelineItems: items.map((item) => {
        const { eventDate, featuredGuest, title, image } = item;
        return {
          date: formatDate(eventDate),
          id: count++,
          eventGuests: featuredGuest.map((guest) => {
            return { name: guest };
          }),
          image: {
            alt: title,
            src: image.url,
            height: image.height ? parseInt(image.height) : 0,
            width: image.width ? parseInt(image.width) : 0,
          },
        };
      }),
    };

    return {
      props: {
        pageTitle: 'Home',
        pageDescription: 'Counsel Connections WV',
        ogImageUrl: '',
        ...formattedProps,
      },
    };
  } catch (error) {
    console.error('error fetching data', error);
    throw error;
  }
}

const Home = (props) => {
  return (
    <Layout {...props}>
      <Homepage {...props} />
    </Layout>
  );
};

export default Home;
