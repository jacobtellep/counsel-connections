import {
  Container,
  SponsorsContainer,
  Sponsor,
} from './sponsors.styled';
import ContentBlock from '@/components/ContentBlock';
import HorizontalLine from '@/components/HorizontalLine';

const Sponsors = (props) => {
  return (
    <Container>
      <ContentBlock {...props.contentBlock} />
      <SponsorsContainer>
        {props.sponsors.map((sponsor, index) => {
          return (
            <SponsorsContainer key={index}>
              <Sponsor key={index}>{sponsor.description}</Sponsor>
              {index !== props.sponsors.length - 1 && (
                <HorizontalLine height='1px' width='20px' />
              )}
            </SponsorsContainer>
          );
        })}
      </SponsorsContainer>
    </Container>
  );
};

export default Sponsors;
