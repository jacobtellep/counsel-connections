import PropTypes from 'prop-types';
import {
  Container,
  FeaturedGuestsContainer,
  FeaturedGuest,
  Heading,
} from './featuredGuests.styled';
import ContentBlock from '@/components/ContentBlock';
import HorizontalLine from '@/components/HorizontalLine';

const FeaturedGuests = ({ contentBlock, featuredGuests, partners }) => {
  return (
    <Container>
      <ContentBlock {...contentBlock} />
      <FeaturedGuestsContainer>
        <Heading>Past Featured Guests</Heading>
        {featuredGuests.map((featuredGuest, index) => {
          return (
            <FeaturedGuestsContainer key={index}>
              <FeaturedGuest key={index}>
                {featuredGuest.description}
              </FeaturedGuest>
              {index !== featuredGuests.length - 1 && (
                <HorizontalLine height='1px' width='20px' list />
              )}
            </FeaturedGuestsContainer>
          );
        })}
        <Heading>Past Partners</Heading>
        {partners.map((partner, index) => {
          return (
            <FeaturedGuestsContainer key={index}>
              <FeaturedGuest key={index}>{partner.description}</FeaturedGuest>
              {index !== partners.length - 1 && (
                <HorizontalLine height='1px' width='12px' list />
              )}
            </FeaturedGuestsContainer>
          );
        })}
      </FeaturedGuestsContainer>
    </Container>
  );
};

FeaturedGuests.propTypes = {
  contentBlock: PropTypes.shape({
    headingText: PropTypes.string,
    content: PropTypes.string,
    pageHeading: PropTypes.bool,
  }),
  featuredGuests: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
    })
  ),
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
    })
  ),
};

export default FeaturedGuests;
