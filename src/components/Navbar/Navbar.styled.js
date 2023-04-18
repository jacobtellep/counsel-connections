import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* padding: 0.5rem 1rem; */
  background-color: ${(props) => props.theme.colors.white};
`;

const NavBrand = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fontFamilies.primary};
  font-size: 1.5rem;
  text-decoration: none;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #333;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin-left: 1rem;
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export { NavbarContainer, NavBrand, NavMenu, NavItem, NavLink, HamburgerMenu };
