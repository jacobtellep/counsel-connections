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

const SponsorsContainer = styled.div`
  /* align-items: center; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 0 8px;
  width: 100%;
`;

const Sponsor = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  font-size: 1.6rem;
  max-width: 800px;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    text-align: left;
  }
`;

export { Container, SponsorsContainer, Sponsor };
