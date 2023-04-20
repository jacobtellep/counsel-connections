import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primaryLight};
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  max-height: 300px;
  padding: 0 8px;
  width: 100%;
`;

const Content = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  max-width: 500px;
  text-align: center;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    font-size: 1.4rem;
    width: 96%;
  }
`;

const Heading = styled.h1`
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  font-size: 2.2rem;
  justify-content: center;
  text-align: center;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    font-size: 1.8rem;
    width: 96%;
  }
`;

export { Container, Content, Heading };
