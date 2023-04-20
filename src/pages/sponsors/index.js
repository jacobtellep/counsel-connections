import Layout from '@/layout';
import Sponsors from '@/screens/Sponsors';

import fixtures from '@/screens/Sponsors/fixtures';

const SponsorsPage = () => {
  return (
    <Layout>
      <Sponsors {...fixtures.sponsors} />
    </Layout>
  );
};

export default SponsorsPage;
