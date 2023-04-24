import {
  Container,
  PublicationsContainer,
  Publication,
} from './publications.styled';
import ContentBlock from '@/components/ContentBlock';
import HorizontalLine from '@/components/HorizontalLine';

const Publications = (props) => {
  return (
    <Container>
      <ContentBlock {...props.contentBlock} />
      <PublicationsContainer>
        {props.publications.map((publication, index) => {
          return (
            <PublicationsContainer key={index}>
              <Publication href={publication.url} key={index}>
                {publication.description}
              </Publication>
              {index !== props.publications.length - 1 && (
                <HorizontalLine height='1px' list />
              )}
            </PublicationsContainer>
          );
        })}
      </PublicationsContainer>
    </Container>
  );
};

export default Publications;
