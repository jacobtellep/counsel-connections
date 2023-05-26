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

const Description = styled.p`
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  padding: 0 16px;
  max-width: 800px;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    text-align: left;
  }
`;

const Heading = styled.h2`
  color: ${(props) => props.theme.colors.primaryLight};
  font-size: 2.2rem;
  padding-bottom: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    padding-left: 8px;
  }
`;

const LeadershipContainer = styled.div`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 0 8px;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    align-items: flex-start;
  }
`;

const Member = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  font-size: 1.6rem;
  max-width: 800px;
  padding-top: 20px;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    text-align: left;
  }
`;

const Name = styled.h2`
  color: ${(props) => props.theme.colors.primaryLight};
  font-family: ${(props) => props.theme.fontFamilies.base};
  font-size: 1.8rem;
`;

export { Container, Description, Heading, LeadershipContainer, Member, Name };
