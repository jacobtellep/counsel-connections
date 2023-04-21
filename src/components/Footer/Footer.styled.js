import styled from 'styled-components';
import NextLink from 'next/link';

const Container = styled.footer`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primaryLight};
  display: flex;
  flex-direction: column;
  height: 200px;
  row-gap: 16px;
  justify-content: center;
`;

const Heading = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  font-size: 1.8rem;
`;

const Link = styled(NextLink)`
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  text-decoration: none;

  &:hover {
    /* color: #ccc; */
  }
`;

const SocialMediaContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: center;
  width: 100%;
`;

export { Container, Heading, Link, SocialMediaContainer };
