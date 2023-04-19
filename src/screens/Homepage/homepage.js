import { Container } from './homepage.styled';
import Jumbotron from '@/components/Jumbotron';

const Homepage = (props) => {
  return (
    <Container>
      <Jumbotron {...props.jumbotron} />
    </Container>
  );
};

export default Homepage;
