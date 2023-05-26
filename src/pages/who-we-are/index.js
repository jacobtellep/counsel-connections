import Layout from '@/layout';
import WhoWeAre from '@/screens/whoWeAre';
import Contentful from '@/lib/contentful';
import { WHO_WE_ARE_ATTRIBUTES } from '@/lib/fragments';

export async function getStaticProps() {
  try {
    const query = `
  ${WHO_WE_ARE_ATTRIBUTES}
  query {
    whoWeAreCollection(limit: 1) {
      items {
        ...WhoWeAre
      }
    }
  }
  `;
    const { data } = await Contentful.fetch(query, {});

    const {
      title,
      description,
      leadershipTeamCollection: { items },
    } = data?.whoWeAreCollection?.items?.[0];

    const formattedProps = {
      contentBlock: {
        headingText: title,
        pageHeading: true,
      },
      pageDescription: description,
      leadershipTeam: items.map((item) => {
        const { name, company } = item;
        return {
          name,
          company,
        };
      }),
    };

    return {
      props: {
        pageTitle: 'Who We Are',
        pageDescription: 'Members of Counsel Connections',
        ogImageUrl: '',
        ...formattedProps,
      },
    };
  } catch (error) {
    console.error('error fetching data', error);
    throw error;
  }
}

const WhoWeArePage = (props) => {
  return (
    <Layout {...props}>
      <WhoWeAre {...props} />
    </Layout>
  );
};

export default WhoWeArePage;
