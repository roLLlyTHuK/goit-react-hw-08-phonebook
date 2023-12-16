import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  `;
  
export const Header = styled.header`
  display: flex;
  gap: 16px;
  padding: 16px 10px;
  width: 800px;
  border-bottom: 2px solid lightgray;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderMenu = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;

  &.active {
    color: orange;
  }
`;
