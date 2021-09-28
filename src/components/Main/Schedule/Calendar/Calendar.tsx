import React from "react";
import styled from "styled-components";
// import CalendarDate from "./CalendarDate";
import CalendarDay from "./CalendarDay";

const Container = styled.div`
  width: calc(770px + 5vw);
  position: relative;

  padding: 15vh 0 0 3vw;
`;

const CalenderMonth = styled.span`
  font-size: 2.3em;
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

  padding-top: 30px;
`;

const CalendarDateContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`

const CalendarDate = styled.div`
  width: 110px;

  font-size: 1.7em;
  font-weight: bold;
  color: #838383;
  text-align: center;
  line-height: 100px;

  position: relative;
`

const CalendarAtiveDate = styled.div`
  width: 110px;

  font-size: 1.7em;
  font-weight: bold;
  color: #fff;
  text-align: center;
  line-height: 100px;

  position: relative;

  &::before {
    width: 100px;
    height: 100px;
    background-color: #F5A6AA;

    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

    border-radius: 50%;

    opacity: .43;

    content: '';
  }
  
  &::after {
    width: 80px;
    height: 80px;
    background-color: #F5A6AA;

    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

    border-radius: 50%;

    content: '';
  }
`

const Calendar: React.FC = () => {
  const dayArr: string[] = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const monthArr1: string[] = ["","","","","","","","","","","","","","","","","",""];
  const monthArr2: string[] = ["","","","","","","","","","","",""];
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
        <CalendarDateContainer>
          {
            monthArr1.map((item, i) => (
              <CalendarDate>{i + 1}</CalendarDate>
            ))
          }
          <CalendarAtiveDate>19</CalendarAtiveDate>
          {
            monthArr2.map((item, i) => (
              <CalendarDate>{i + 20}</CalendarDate>
            ))
          }
        </CalendarDateContainer>
      </CalenderContent>
    </Container>
  );
};

export default Calendar;
