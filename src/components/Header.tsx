import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const NavLinks = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Logo href="#">Portfolio</Logo>
        <NavLinks>
          <li><NavLink href="#hero">Home</NavLink></li>
          <li><NavLink href="#skills">Skills</NavLink></li>
          <li><NavLink href="#projects">Projects</NavLink></li>
          <li><NavLink href="#contact">Contact</NavLink></li>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
};