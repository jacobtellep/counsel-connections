import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 16px;
  width: 100%;
`;

const ContactsContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  min-height: 300px;
  padding: 0 16px;
  width: 100%;
  row-gap: 32px;
`;

const Contact = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  font-size: 1.6rem;
  max-width: 800px;
  text-align: center;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    font-size: 1.2rem;
    text-align: left;
  }
`;

const ContactLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  font-size: 1.6rem;
  max-width: 800px;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.primaryHover};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    font-size: 1.2rem;
  }
`;

export { Container, ContactsContainer, Contact, ContactLink };
