import React from 'react';
import styled from 'styled-components';
import { Header } from "../components";

const Container = styled.div `
  width: 100%;
`

const MainPage: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
    </>
  );
};

export default MainPage;