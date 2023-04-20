import {
  Container,
  Description,
  Heading,
  LeadershipContainer,
  Member,
} from './whoWeAre.styled';
import ContentBlock from '@/components/ContentBlock';
import HorizontalLine from '@/components/HorizontalLine';

const WhoWeAre = (props) => {
  return (
    <Container>
      <ContentBlock {...props.contentBlock} />
      <Description>{props.pageDescription}</Description>
      <Heading>Leadership Team</Heading>
      <LeadershipContainer>
        {props.leadershipTeam.map((member, index) => {
          return (
            <>
              <Member key={index}>{member.description}</Member>
              {index !== props.leadershipTeam.length - 1 && (
                <HorizontalLine height='1px' />
              )}
            </>
          );
        })}
      </LeadershipContainer>
    </Container>
  );
};

export default WhoWeAre;
