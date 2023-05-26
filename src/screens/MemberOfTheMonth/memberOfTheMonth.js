import { Container, DateText, Heading, MembersContainer, Member } from './memberOfTheMonth.styled';
import ContentBlock from '@/components/ContentBlock';
import HorizontalLine from '@/components/HorizontalLine';

const MemberOfTheMonth = ({ contentBlock, members }) => {
  return (
    <Container>
      <ContentBlock {...contentBlock} />
      <MembersContainer>
        {members.map((member, index) => {
          return (
            <Member key={index}>
              <Heading>{member.name}</Heading>
              {member.company}
              <DateText>{member.date}</DateText>
              {index !== members.length - 1 && <HorizontalLine height="1px" list />}
            </Member>
          );
        })}
      </MembersContainer>
    </Container>
  );
};

export default MemberOfTheMonth;
