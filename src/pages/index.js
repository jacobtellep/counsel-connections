import Layout from '@/layout';
import Homepage from '@/screens/Homepage';
import fixtures from '@/screens/Homepage/fixtures';

const Home = () => {
  // TODO: Add a description and image for the homepage for open graph

  return (
    <Layout {...fixtures}>
      <Homepage {...fixtures.homepage} />
    </Layout>
  );
};

export default Home;
