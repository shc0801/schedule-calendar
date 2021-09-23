import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  padding-top: 50px; 

  & > a { 
    font-size: 1.2em; 
    padding: 15px 0;
  }
  & > a:nth-child(2) { color: #000 } 
`

const Sidebar: React.FC = () => {
  return (
    <Nav>
      <Link to="/">Schedule Page</Link>
      <Link to="/">DashBoard</Link>
      <Link to="/">My Page</Link>
      <Link to="/">My Page</Link>
      <Link to="/">My Page</Link>
      <Link to="/">My Page</Link>
      <Link to="/">My Page</Link>
      <Link to="/">My Page</Link>
    </Nav>
  );
};

export default Sidebar;