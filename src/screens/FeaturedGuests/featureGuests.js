import {
  Container,
  FeaturedGuestsContainer,
  FeaturedGuest,
  Heading,
} from './featuredGuests.styled';
import ContentBlock from '@/components/ContentBlock';
import HorizontalLine from '@/components/HorizontalLine';

const FeaturedGuests = (props) => {
  return (
    <Container>
      <ContentBlock {...props.contentBlock} />
      <FeaturedGuestsContainer>
        <Heading>Past Partners</Heading>
        {props.partners.map((partner, index) => {
          return (
            <FeaturedGuestsContainer key={index}>
              <FeaturedGuest key={index}>{partner.description}</FeaturedGuest>
              {index !== props.partners.length - 1 && (
                <HorizontalLine height='1px' width='12px' />
              )}
            </FeaturedGuestsContainer>
          );
        })}
        <Heading>Past Featured Guests</Heading>
        {props.featuredGuests.map((featuredGuest, index) => {
          return (
            <FeaturedGuestsContainer key={index}>
              <FeaturedGuest key={index}>
                {featuredGuest.description}
              </FeaturedGuest>
              {index !== props.featuredGuests.length - 1 && (
                <HorizontalLine height='1px' width='20px' />
              )}
            </FeaturedGuestsContainer>
          );
        })}
      </FeaturedGuestsContainer>
    </Container>
  );
};

export default FeaturedGuests;
