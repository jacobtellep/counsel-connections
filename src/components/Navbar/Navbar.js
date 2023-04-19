import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  CloseButton,
  NavbarContainer,
  NavBrand,
  NavMenu,
  NavItem,
  NavLink,
  HamburgerMenu,
} from './Navbar.styled';
import theme from '@/lib/theme';
import Image from '@/components/Image';
import items from './menuItems';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // ------------------------------------

  return (
    <NavbarContainer>
      <NavBrand href='/'>
        <Image
          blurDataURL='/assets/logo.png?w=10&h=10'
          src='/assets/logo.png'
          height={40}
          width={65}
        />
        Counsel Connections
      </NavBrand>
      <HamburgerMenu open={menuOpen} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} color={theme.colors.primary} />
      </HamburgerMenu>
      <NavMenu open={menuOpen}>
        {items.map((item) => (
          <NavItem key={item.id}>
            <NavLink href={item.link}>{item.name}</NavLink>
          </NavItem>
        ))}
      </NavMenu>
      {menuOpen && (
        <CloseButton onClick={toggleMenu}>
          <FontAwesomeIcon icon={faTimes} color={theme.colors.primary} />
        </CloseButton>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
