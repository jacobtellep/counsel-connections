import {
  Container,
  Description,
  Heading,
  LeadershipContainer,
  Member,
  Name,
} from './whoWeAre.styled';
import ContentBlock from '@/components/ContentBlock';
import HorizontalLine from '@/components/HorizontalLine';

const WhoWeAre = (props) => {
  return (
    <Container>
      <ContentBlock {...props.contentBlock} />
      <Description>{props.pageDescription}</Description>
      <LeadershipContainer>
        <Heading>Leadership Team</Heading>
        {props.leadershipTeam.map((member, index) => {
          return (
            <LeadershipContainer key={index}>
              <Member key={index}>
                <Name>{member.name}</Name>
                {member.company}
              </Member>
              {index !== props.leadershipTeam.length - 1 && <HorizontalLine height="1px" list />}
            </LeadershipContainer>
          );
        })}
      </LeadershipContainer>
    </Container>
  );
};

export default WhoWeAre;
