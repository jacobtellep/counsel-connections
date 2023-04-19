import { Container, Content, Heading } from './ContentBlock.styled';

const ContentBlock = ({ headingText, content }) => {
  return (
    <Container>
      <Heading>{headingText}</Heading>
        <Content>{content}</Content>
    </Container>
  );
};

export default ContentBlock;
