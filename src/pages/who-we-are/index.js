import Layout from '@/layout';
import WhoWeAre from '@/screens/WhoWeAre';
import fixtures from '@/screens/WhoWeAre/fixtures';

const WhoWeArePage = () => {
  return (
    <Layout {...fixtures}>
      <WhoWeAre {...fixtures.whoWeAre} />
    </Layout>
  );
};

export default WhoWeArePage;
