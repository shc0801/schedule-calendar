import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: flex-end;
  color: rgb(75, 75, 75);
  font-weight: bold;
`;

const CalendarDayText = styled.p`
  width: 110px;

  font-size: 1.7em;
  text-align: center;
`;

interface Props {
  day: string;
}

const CalendarDay: FC<Props> = ({ day }) => {
  return (
    <Container>
      <CalendarDayText>{day}</CalendarDayText>
    </Container>
  );
};

export default CalendarDay;
