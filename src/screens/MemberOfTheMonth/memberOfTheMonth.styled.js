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
  justify-content: center;
  max-width: 600px;
  padding: 0 16px;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    align-items: flex-start;
  }
`;

const Member = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  font-size: 1.6rem;
  justify-content: center;
  max-width: 800px;
  padding-bottom: 16px;
  text-align: center;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    align-items: flex-start;
    font-size: 1.2rem;
    text-align: left;
  }
`;

export { Container, Heading, MembersContainer, Member };
