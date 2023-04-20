import Layout from '@/layout';
import Publications from '@/screens/Publications';
import fixtures from '@/screens/Publications/fixtures';

const PublicationsPage = () => {
  return (
    <Layout {...fixtures}>
      <Publications {...fixtures.publications} />
    </Layout>
  );
};

export default PublicationsPage;
