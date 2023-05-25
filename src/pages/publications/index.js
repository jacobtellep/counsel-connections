import Layout from '@/layout';
import Publications from '@/screens/Publications';
import Contentful from '@/lib/contentful';
import { PUBLICATIONS_ATTRIBUTES, LINK_ATTRIBUTES } from '@/lib/fragments';

export async function getStaticProps() {
  try {
    const query = `
    ${LINK_ATTRIBUTES}
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

    const {
      title,
      linksCollection: { items },
    } = data?.publicationsCollection?.items?.[0];

    const formattedProps = {
      contentBlock: {
        headingText: title,
        pageHeading: true,
      },
      publications: items.map((item) => {
        const { title, url } = item;
        return {
          description: title,
          url,
        };
      }),
    };

    return {
      props: {
        pageTitle: 'Publications',
        pageDescription: 'Counsel Connections Publications',
        ogImageUrl: '',
        ...formattedProps,
      },
    };
  } catch (error) {
    console.error('error fetching data', error);
    throw error;
  }
}

const PublicationsPage = (props) => {
  return (
    <Layout {...props}>
      <Publications {...props} />
    </Layout>
  );
};

export default PublicationsPage;
