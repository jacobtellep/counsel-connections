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
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
`;

const FeaturedGuest = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  font-size: 1.6rem;
  margin: 0.5rem;
  max-width: 800px;
  text-align: center;
`;

const Heading = styled.h2`
  color: ${(props) => props.theme.colors.primaryLight};
  font-size: 2rem;
`;

export { Container, FeaturedGuestsContainer, FeaturedGuest, Heading };
