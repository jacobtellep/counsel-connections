import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 16px;
  width: 100%;
`;

const FeaturedGuestsContainer = styled.div`
  box-sizing: border-box;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 0 16px;
  width: 100%;
`;

const FeaturedGuestContainer = styled(FeaturedGuestsContainer)`
  padding: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    align-items: flex-start;
  }
`;

const FeaturedGuest = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  font-size: 1.6rem;
  max-width: 800px;
  text-align: center;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    text-align: left;
  }
`;

const Heading = styled.h2`
  color: ${(props) => props.theme.colors.primaryLight};
  font-size: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    width: 100%;
  }
`;

export {
  Container,
  FeaturedGuestsContainer,
  FeaturedGuestContainer,
  FeaturedGuest,
  Heading,
};
