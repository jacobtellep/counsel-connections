import Layout from '@/layout';
import Homepage from '@/screens/Homepage';

const Home = () => {
  // TODO: Add a description and image for the homepage for open graph

  const props = {
    pageTitle: 'Home',
    pageDescription: 'Members of Counsel Connections',
    ogImageUrl: '',
    homepage: {
      jumbotron: {
        headingText: 'Welcome to Counsel Connections',
        imageUrl: '/assets/placeholder.jpg',
      },
    },
  };
  return (
    <Layout {...props}>
      <Homepage
        {...{
          jumbotron: {
            headingText: 'Welcome to Counsel Connections',
            imageUrl: '/assets/placeholder.jpg',
          },
        }}
      />
    </Layout>
  );
};

export default Home;
