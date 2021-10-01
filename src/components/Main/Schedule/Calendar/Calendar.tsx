import React from "react";
import styled from "styled-components";
import CalendarDay from "./CalendarDay";
import CalendarDate from "./CalendarDate";
import { useSelector } from "react-redux";
import { RootState } from "../../../../modules/reducer";

const Container = styled.div`
  width: 42vw;
  position: relative;

  padding: 15vh 0 0 3vw;
`;

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
  const { schedules, schedulerDate } = useSelector((state: RootState) => state.schedule);
  console.log(schedules, schedulerDate);
  const dayArr: string[] = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  return (
    <Container>
      <CalenderMonth>
        12월, <CalenderYear>2021</CalenderYear>
      </CalenderMonth>
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
