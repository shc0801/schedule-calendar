import React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import { Header, Sidebar } from "../components";
=======
import { Header } from "../components";
>>>>>>> legacy

const Container = styled.div `
  width: 100%;
`

const MainPage: React.FC = () => {
<<<<<<< HEAD

  return (
    <>
      <Sidebar />
=======
  return (
    <>
>>>>>>> legacy
      <Container>
        <Header />
      </Container>
    </>
  );
};

export default MainPage;