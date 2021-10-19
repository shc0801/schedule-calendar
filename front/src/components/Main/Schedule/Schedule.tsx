import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { RootState } from '../../../modules/reducer';
import ScheduleDetail from './ScheduleDetail';

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

const ScheduleDateContainer = styled.div `
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
  // const dispatch = useDispatch();

  const { date } = useSelector((state: RootState) => state.schedule);
  const dayArr: string[] = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const day = dayArr[new Date(date).getDay()];
  const nowDate = new Date(date).getDate()

  return (
    <Container>
      {isNaN(nowDate) ? (
        <>
          없어
        </>
      ) : (
        <>
          <ScheduleDateContainer>
            <ScheduleDay>{`${day}, `}<ScheduleDate>{`${nowDate}일`}</ScheduleDate></ScheduleDay>
          </ScheduleDateContainer>
          <ScheduleDetail />
        </>
      )}
    </Container>
  );
};

export default Schedule;