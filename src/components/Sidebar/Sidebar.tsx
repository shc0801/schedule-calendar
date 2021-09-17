import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Aside = styled.aside `
  width: 300px;
  background-color: #687af8;

  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px 50px;
`

const Sidebar: React.FC = () => {
  return (
    <Aside>
      Logo
      <Menu />
    </Aside>
  );
};

export default Sidebar;