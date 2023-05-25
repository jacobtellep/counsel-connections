import Layout from '@/layout';
import Sponsors from '@/screens/Sponsors';
import Contentful from '@/lib/contentful';
import { SPONSORS_ATTRIBUTES } from '@/lib/fragments';

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

    const { title, sponsorList } = data?.sponsorsCollection?.items?.[0];

    const formattedProps = {
      contentBlock: {
        headingText: title,
        pageHeading: true,
      },
      sponsors: sponsorList.map((sponsor) => {
        return {
          description: sponsor,
        };
      }),
    };

    return {
      props: {
        pageTitle: 'Sponsors',
        pageDescription: 'Counsel Connections Sponsors',
        ogImageUrl: '',
        ...formattedProps,
      },
    };
  } catch (error) {
    console.error('error fetching data', error);
    throw error;
  }
}

const SponsorsPage = (props) => {
  return (
    <Layout {...props}>
      <Sponsors {...props} />
    </Layout>
  );
};

export default SponsorsPage;
