import Layout from '@/layout';
import Homepage from '@/screens/Homepage';

const Home = () => {
  // TODO: Add a description and image for the homepage for open graph
  return (
    <Layout pageTitle='Home' pageDescription='Members of Counsel Connections' ogImageUrl=''>
      <Homepage />
    </Layout>
  );
};

export default Home;
