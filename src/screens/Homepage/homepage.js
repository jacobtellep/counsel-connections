import { Container } from './homepage.styled';
import Jumbotron from '@/components/Jumbotron';
import ContentBlock from '@/components/ContentBlock';

const Homepage = (props) => {
  return (
    <Container>
      <Jumbotron {...props.jumbotron} />
      <ContentBlock {...props.contentBlock} />
    </Container>
  );
};

export default Homepage;
