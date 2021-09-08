import React from 'react';
import styled from 'styled-components';
import Logo from "../../assets/logo.png";

const Head = styled.header `
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 150px;

  & > img { 
    width: 150px;
  }
`

const Header: React.FC = () => {
  return (
    <Head>
        <img src={Logo} alt="logo" />
    </Head>
  );
};

export default Header;