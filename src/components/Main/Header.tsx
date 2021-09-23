import React from 'react';
import styled from 'styled-components';

const Head = styled.header `
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 150px;
  border-bottom: 1px solid #f0f0f0;
`

const Header: React.FC = () => {
  return (
    <Head>
      
    </Head>
  );
};

export default Header;