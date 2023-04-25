import {
  Container,
  Heading,
  MembersContainer,
  Member,
} from './memberOfTheMonth.styled';
import ContentBlock from '@/components/ContentBlock';
import HorizontalLine from '@/components/HorizontalLine';

const MemberOfTheMonth = ({ contentBlock, members }) => {
  return (
    <Container>
      <ContentBlock {...contentBlock} />
      <MembersContainer>
        {members.map((member, index) => {
          return (
            <Member>
              <Heading>{member.date}</Heading>
              {index !== members.length - 1 && (
                <HorizontalLine height='1px' list />
              )}
              {member.name}
            </Member>
          );
        })}
      </MembersContainer>
    </Container>
  );
};

export default MemberOfTheMonth;
