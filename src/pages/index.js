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
      contentBlock: {
        headingText: "What We've Been Up To",
        content:
          "Springing into action: A look at our recent achievements and upcoming initiatives",
      },
    },
  };
  return (
    <Layout {...props}>
      <Homepage {...props.homepage} />
    </Layout>
  );
};

export default Home;
