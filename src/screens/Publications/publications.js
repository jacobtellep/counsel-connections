import {
  Container,
  PublicationsContainer,
  Publication,
} from './publications.styled';
import ContentBlock from '@/components/ContentBlock';

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
            </PublicationsContainer>
          );
        })}
      </PublicationsContainer>
    </Container>
  );
};

export default Publications;
