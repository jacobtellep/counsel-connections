import Layout from '@/layout';
import WhoWeAre from '@/screens/whoWeAre';
import fixtures from '@/screens/whoWeAre/fixtures';

const WhoWeArePage = () => {
  return (
    <Layout {...fixtures}>
      <WhoWeAre {...fixtures.whoWeAre} />
    </Layout>
  );
};

export default WhoWeArePage;
