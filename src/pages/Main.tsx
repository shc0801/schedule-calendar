import React from 'react';
import styled from 'styled-components';
import { Header, Sidebar } from "../components";

const Container = styled.div `
  width: 100%;
`

const MainPage: React.FC = () => {

  return (
    <>
      <Sidebar />
      <Container>
        <Header />
      </Container>
    </>
  );
};

export default MainPage;