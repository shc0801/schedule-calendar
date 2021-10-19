import React from 'react';
import styled from 'styled-components';
import { Calendar, Schedule } from '../components';

const Container = styled.div `
  width: calc(100vw - 110px);
  background-color: #F4F4FB;

  display: flex;
`

const MainBackground = styled.div`
  width: 100%;
  height: 160%;
  background-color: #fff;

  position: fixed;
  left: -40%; top: -30%;
  z-index: 10;

  border-radius: 0 50% 50% 0;
`

const MainLeft = styled.div`
  width: 60%;
  height: 100%;

  position: relative;
  z-index: 100;
`

const MainRight = styled.div`
  width: 40%;
  height: 100%;

  position: relative;
  z-index: 100;

  padding-top: 150px;
`

const MainPage: React.FC = () => {
  return (
    <Container>
      <MainBackground />
      <MainLeft>
        <Calendar />
      </MainLeft>
      <MainRight>
        <Schedule />
      </MainRight>
    </Container>
  );
};

export default MainPage;