import { Container, Content, Heading } from './ContentBlock.styled';

const ContentBlock = ({ headingText, content, pageHeading }) => {
  return (
    <Container>
      {headingText && <Heading pageHeading={pageHeading}>{headingText}</Heading>}
      {content && <Content>{content}</Content>}
    </Container>
  );
};

export default ContentBlock;
