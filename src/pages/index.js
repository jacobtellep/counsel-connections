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
          'Springing into action: A look at our recent achievements and upcoming initiatives',
      },
        timelineItems: [
          {
            date: 'February 23, 2023',
            id: 1,
            eventGuests: [
              {
                name: 'Marshall Health & The Joan C. Edwards School of Medicine',
              },
              {
                name: 'West Virginia School of Osteopathic Medicine',
              },
            ],
            image: {
              alt: 'February 23, 2023',
              src: '/assets/feb-23-event.jpeg',
              width: 854,
              height: 640,
            }
          },
          {
            date: 'February 23, 2023',
            id: 2,
            eventGuests: [
              {
                name: 'Marshall Health & The Joan C. Edwards School of Medicine',
              },
              {
                name: 'West Virginia School of Osteopathic Medicine',
              },
            ],
            image: {
              alt: 'February 23, 2023',
              src: '/assets/feb-23-event.jpeg',
              width: 854,
              height: 640,
            }
          },
          {
            date: 'February 23, 2023',
            id: 3,
            eventGuests: [
              {
                name: 'Marshall Health & The Joan C. Edwards School of Medicine',
              },
              {
                name: 'West Virginia School of Osteopathic Medicine',
              },
            ],
            image: {
              alt: 'February 23, 2023',
              src: '/assets/feb-23-event.jpeg',
              width: 854,
              height: 640,
            },
          },
        ],
    },
  };
  return (
    <Layout {...props}>
      <Homepage {...props.homepage} />
    </Layout>
  );
};

export default Home;
