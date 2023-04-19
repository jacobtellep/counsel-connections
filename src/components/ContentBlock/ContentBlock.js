import { Container, Content, Heading } from './ContentBlock.styled';

const ContentBlock = ({ headingText, content }) => {
  return (
    <Container>
      {headingText && <Heading>{headingText}</Heading>}
      {content && <Content>{content}</Content>}
    </Container>
  );
};

export default ContentBlock;
