import PropTypes from 'prop-types';
import {
  Container,
  FeaturedGuestsContainer,
  FeaturedGuestContainer,
  FeaturedGuest,
  Heading,
  Name,
} from './featuredGuests.styled';
import ContentBlock from '@/components/ContentBlock';
import HorizontalLine from '@/components/HorizontalLine';

const FeaturedGuests = ({ contentBlock, featuredGuests, partners }) => {
  return (
    <Container>
      <ContentBlock {...contentBlock} />
      <FeaturedGuestsContainer>
        <Heading>Past Guests</Heading>
        {featuredGuests.map((featuredGuest, index) => {
          return (
            <FeaturedGuestContainer key={index}>
              <FeaturedGuest>
                <Name>{featuredGuest.name}</Name>
                {featuredGuest.title}
              </FeaturedGuest>
              {index !== featuredGuests.length - 1 && <HorizontalLine height="1px" list />}
            </FeaturedGuestContainer>
          );
        })}
        <Heading>Past Partners</Heading>
        {partners.map((partner, index) => {
          return (
            <FeaturedGuestContainer key={index}>
              <FeaturedGuest key={index}>{partner.description}</FeaturedGuest>
              {index !== partners.length - 1 && <HorizontalLine height="1px" list />}
            </FeaturedGuestContainer>
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
