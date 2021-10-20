import React from "react";
import styled from "styled-components";
import CalendarDay from "./CalendarDay";
import CalendarDate from "./CalendarDate";
import { LeftAngle, RightAngle } from "../../../assets/icon/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../modules/reducer";
import { setScheduleDate } from "../../../modules/actions";
import Api from "../../../apis";

const Container = styled.div`
  width: 42vw;
  position: relative;

  padding: 15vh 0 0 3vw;
  user-select: none;
`;

const CalenderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CalenderMonth = styled.span`
  font-size: 2.6em;
  color: #6d6ec7;
  font-weight: bold;

  padding-left: 40px;
`;

const CalenderYear = styled.span`
  font-size: 0.8em;
  color: #bbc9f3;
  font-weight: bold;
`;

const CalendarControl = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;

  padding: 20px 40px 0 0;
`

const LeftAngleImg = styled.img`
  width: 40px;
  height: 25px;
`

const RightAngleImg = styled.img`
  width: 40px;
  height: 25px;
`

const CalenderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CalendarDayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 30px 0;
`;

const Calendar: React.FC = () => {
  const dispatch = useDispatch();
  
  const { schedulerDate } = useSelector((state: RootState) => state.schedule);
  const year = schedulerDate.getFullYear();
  const month = schedulerDate.getMonth() + 1;

  Api.post("/get/schedule")
    .then((res) => {
      window.localStorage.setItem("schedules", JSON.stringify(res.data.result));
    })
    .catch((err) => {
      throw err;
    });
  
  const prevDate = () => {
    dispatch(setScheduleDate({ schedulerDate: new Date(schedulerDate.setMonth(month - 2)) }));
  };

  const nextDate = () => {
    dispatch(setScheduleDate({ schedulerDate: new Date(schedulerDate.setMonth(month)) }));
  };

  const dayArr: string[] = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  return (
    <Container>
      <CalenderHeader>
        <CalenderMonth>
          {month}월, <CalenderYear>{year}</CalenderYear>
        </CalenderMonth>
        <CalendarControl>
        <LeftAngleImg src={LeftAngle} onClick={prevDate} />
        <RightAngleImg src={RightAngle} onClick={nextDate} />
        </CalendarControl>
      </CalenderHeader>
      <CalenderContent>
        <CalendarDayContainer>
          {dayArr.map((day) => (
            <CalendarDay key={day} day={day} />
          ))}
        </CalendarDayContainer>
        <CalendarDate />
      </CalenderContent>
    </Container>
  );
};

export default Calendar;
