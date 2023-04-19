import styled from 'styled-components';
import Link from 'next/link';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  position: relative;
`;

// ------------------------------------

const NavBrand = styled.a`
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  font-family: ${(props) => props.theme.fontFamilies.primary};
  font-size: 1.5rem;
  justify-content: center;
  /* max-width: 300px; */
  padding: 0.5rem 0.5rem;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 200px;
  }
`;

// ------------------------------------

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0.5rem 0.5rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.white};
    width: 100%;
    height: 100%;
    opacity: ${(props) => (props.open ? 0.75 : 1)};
    justify-content: center;
    /* align-items: center; */
    z-index: 9998;
    padding: 0 1rem;
    font-size: 2.6rem;
    margin-top: 0;
  }
`;

// ------------------------------------

const NavItem = styled.li`
  margin-left: 1rem;
  position: relative;

  /* add a vertical line on desktop screens */
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0;
    right: -0.5rem;
    height: 100%;
    border-right: 1px solid ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    /* hide the vertical lines on mobile screens */
    &:not(:last-child)::after {
      display: none;
    }
  }
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    /* color: #ccc; */
  }
`;

// ------------------------------------

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10000;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'none' : 'block')};
  }
`;

// ------------------------------------

const CloseButton = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10000;

  @media (max-width: 768px) {
    display: block;
    z-index: 9999;
  }
`;

// ------------------------------------

export {
  CloseButton,
  NavbarContainer,
  NavBrand,
  NavMenu,
  NavItem,
  NavLink,
  HamburgerMenu,
};
