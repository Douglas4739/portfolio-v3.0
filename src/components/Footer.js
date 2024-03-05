import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 1000px;
  background-color: rgb(47, 47, 47);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  color: white;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: #222;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 30px;
`;

const NavLink = styled(Link)`
  font-size: 1.2rem;
  color: #222;
  text-decoration: none;
  `;

  export default Nav;