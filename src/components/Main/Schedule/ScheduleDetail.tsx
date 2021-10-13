import React, {
  // ReactElement,
  // useMemo,
  // useCallback,
  // useEffect
} from "react";
import styled from "styled-components";
import ScheduleDetailItem from "./ScheduleDetailItem";

const ScheduleGroupContainer = styled.div`
  height: 60vh;

  display: flex;
  flex-direction: column;

  padding: 20px;
  margin-top: 10px;

  overflow-y: scroll;

  &::-webkit-scrollbar { display: none; }
`

const ScheduleDetail: React.FC = () => {

  return (
    <ScheduleGroupContainer>
      <ScheduleDetailItem></ScheduleDetailItem>
      <ScheduleDetailItem></ScheduleDetailItem>
      <ScheduleDetailItem></ScheduleDetailItem>
      <ScheduleDetailItem></ScheduleDetailItem>
      <ScheduleDetailItem></ScheduleDetailItem>
      <ScheduleDetailItem></ScheduleDetailItem>
      <ScheduleDetailItem></ScheduleDetailItem>
      <ScheduleDetailItem></ScheduleDetailItem>
      <ScheduleDetailItem></ScheduleDetailItem>
      <ScheduleDetailItem></ScheduleDetailItem>
      <ScheduleDetailItem></ScheduleDetailItem>
      <ScheduleDetailItem></ScheduleDetailItem>
      <ScheduleDetailItem></ScheduleDetailItem>
    </ScheduleGroupContainer>
  );
};

export default ScheduleDetail;