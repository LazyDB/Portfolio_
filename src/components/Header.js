import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 60px;
  background: ${({ theme }) => theme.navbarBg};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.navbarText};
  font-weight: bold;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.navbarHoverText};
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.navbarText};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.navbarHoverText};
  }
`;

const Header = ({ toggleTheme, theme }) => {
  return (
    <Nav>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/logos-art">Logos & Art</NavLink>
        <NavLink to="/cv">CV</NavLink>
        <NavLink to="/contact-me">Contact Me</NavLink>
      </div>
      <ToggleButton onClick={toggleTheme}>
        {theme === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
      </ToggleButton>
    </Nav>
  );
};

export default Header;
