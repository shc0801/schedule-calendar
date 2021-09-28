import React from 'react';
import styled from 'styled-components';
import Calendar from '../components/Main/Schedule/Calendar/Calendar';

const Container = styled.div `
  width: calc(100vw - 110px);
  background-color: #F4F4FB;
`

const MainLeft = styled.div`
  width: 70%;
  height: 100%;

  position: relative;
  z-index: 100;
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

const MainPage: React.FC = () => {
  return (
    <Container>
      <MainBackground />
      <MainLeft>
        <Calendar />
      </MainLeft>
    </Container>
  );
};

export default MainPage;