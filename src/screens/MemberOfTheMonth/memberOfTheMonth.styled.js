import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 16px;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    align-items: flex-start;
  }
`;

const Heading = styled.h2`
  color: ${(props) => props.theme.colors.primaryLight};
  font-size: 2rem;
`;

const MembersContainer = styled.div`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 0 16px;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    align-items: flex-start;
  }
`;

const Member = styled.p`
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

export { Container, Heading, MembersContainer, Member };
