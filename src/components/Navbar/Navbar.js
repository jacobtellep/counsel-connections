import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  CloseButton,
  HamburgerMenu,
  NavbarContainer,
  NavBrand,
  NavItem,
  NavLink,
  NavMenu,
} from './Navbar.styled';
import theme from '@/lib/theme';
import Image from '@/components/Image';
import items from './menuItems';

const Navbar = ({ setNavbarHeight }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (url) => {
    if (router.asPath === url) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (navbarRef.current) {
      const navbarHeight = navbarRef.current.clientHeight;
      setNavbarHeight(navbarHeight);
      document.body.style.paddingTop = `${navbarHeight}px`;
    }
  }, []);
  
  return (
    <NavbarContainer ref={navbarRef}>
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
        {items.map((item, index) => (
          <NavItem key={index}>
            <NavLink
              href={item.link}
              onClick={() => handleLinkClick(item.link)}
            >
              {item.name}
            </NavLink>
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
