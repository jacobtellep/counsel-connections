import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
  NavbarContainer,
  NavBrand,
  NavMenu,
  NavItem,
  NavLink,
  HamburgerMenu,
} from './Navbar.styled';
import theme from '@/lib/theme';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContainer>
      <NavBrand href='/'>MyBrand</NavBrand>
      <HamburgerMenu onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} color={theme.colors.primary} />
      </HamburgerMenu>
      <NavMenu open={menuOpen}>
        <NavItem>
          <NavLink href='/'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/about'>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/contact'>Contact</NavLink>
        </NavItem>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
