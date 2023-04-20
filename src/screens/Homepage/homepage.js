import { Container, Timeline } from './homepage.styled';
import Jumbotron from '@/components/Jumbotron';
import ContentBlock from '@/components/ContentBlock';
import TimelineItem from '@/components/TimelineItem';

const Homepage = (props) => {
  return (
    <Container>
      <Jumbotron {...props.jumbotron} />
      <ContentBlock {...props.contentBlock} />
        <Timeline>
          {props.timelineItems.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </Timeline>
    </Container>
  );
};

export default Homepage;
