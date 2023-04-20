import Layout from '@/layout';
import FeaturedGuests from '@/screens/FeaturedGuests';

import fixtures from '@/screens/FeaturedGuests/fixtures';

const FeaturedGuestsPage = () => {
  return (
    <Layout {...fixtures}>
      <FeaturedGuests {...fixtures.featuredGuests} />
    </Layout>
  );
};

export default FeaturedGuestsPage;
