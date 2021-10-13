import React from "react"; // useEffect // useCallback, // useMemo, // ReactElement,
import styled from "styled-components";
import ScheduleDetailItem from "./ScheduleDetailItem";

const ScheduleGroupContainer = styled.div`
  height: 60vh;

  display: flex;
  flex-direction: column;

  padding: 20px;
  margin-top: 10px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScheduleDetail: React.FC = () => {
  const arr = [
    {
      id: 1,
      startTime: "08:30",
      endTime: "09:00",
      TagName: "Developing",
      content: "SetUp Github",
    },
    {
      id: 2,
      startTime: "09:30",
      endTime: "10:45",
      TagName: "Strategy Planning",
      content: "3categories of rocks",
    },
    {
      id: 3,
      startTime: "11:00",
      endTime: "12:15",
      TagName: "Discovery",
      content: "Financian prijec",
    }
  ];

  return (
    <ScheduleGroupContainer>
      {arr.map((item) => (
        <ScheduleDetailItem
          key={item.id}
          startTime={item.startTime}
          endTime={item.endTime}
          TagName={item.TagName}
          content={item.content}
        />
      ))}
    </ScheduleGroupContainer>
  );
};

export default ScheduleDetail;
