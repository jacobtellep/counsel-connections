import Layout from '@/layout';
import WhoWeAre from '@/screens/whoWeAre';
import Contentful from '@/lib/contentful';
import { WHO_WE_ARE_ATTRIBUTES } from '@/lib/fragments';

import fixtures from '@/screens/whoWeAre/fixtures';

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

    return {
      props: {
        ...data?.whoWeAreCollection?.items?.[0],
      },
    };
  } catch (error) {
    console.error('error fetching data', error);
    throw error;
  }
}

const WhoWeArePage = (props) => {
  console.log('props', props);
  return (
    <Layout {...fixtures}>
      <WhoWeAre {...fixtures.whoWeAre} />
    </Layout>
  );
};

export default WhoWeArePage;
