import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from "react-redux";
import { RootState } from '../../../modules/reducer';
import ScheduleDetail from './ScheduleDetail';
import { UFO, ArrowIcon } from '../../../assets/icon/index';

const BounceX = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-20px);
  }
  60% {
    transform: translateX(-10px);
  }
`

const BounceY = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  user-select: none;
`;

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 15vh;
`

const SelectText = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.4em;
`

const UFOImg = styled.img`
  width: 250px;
  
  animation: ${BounceY} 2s infinite;

  margin-right: 20px;
  margin-bottom: 25px;
`

const ArrowIconImg = styled.img`
  width: 30px;

  animation: ${BounceX} 2s infinite;

  margin-top: 25px;
`

const ScheduleDateContainer = styled.div`
  padding-left: 10px;
`

const ScheduleDay = styled.p`
  font-size: 2em;
  font-family: 'Noto Sans KR', sans-serif;
  color: #6d6ec7;
`

const ScheduleDate = styled.span`
  font-size: 0.95em;
  font-family: 'Noto Sans KR', sans-serif;
  color: #bbc9f3;
`;

const Schedule: React.FC = () => {
  const { date } = useSelector((state: RootState) => state.schedule);
  const dayArr: string[] = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const nowDay = dayArr[new Date(date).getDay()];
  const day = new Date(date).getDate()

  return (
    <Container>
      {isNaN(day) ? (
        <ScheduleContainer>
          <UFOImg src={UFO} />
          <SelectText>일정을 선택해주세요!</SelectText>
          <ArrowIconImg src={ArrowIcon} />
        </ScheduleContainer>
      ) : (
          <>
            <ScheduleDateContainer>
              <ScheduleDay>{`${nowDay}, `}<ScheduleDate>{`${day}일`}</ScheduleDate></ScheduleDay>
            </ScheduleDateContainer>
            <ScheduleDetail />
          </>
        )}
    </Container>
  );
};

export default Schedule;