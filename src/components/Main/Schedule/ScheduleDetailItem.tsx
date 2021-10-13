import React from "react";
import styled from "styled-components";

const ScheduleItem = styled.div`
  width: 90%;
  background-color: #fff;

  display: flex;

  transition: .5s;

  border-radius: 20px;
  padding: 20px 100px 20px 30px;
  margin-bottom: 20px;


  & * {
    font-family: 'Noto Sans KR', sans-serif;
  }

  &:hover {
    transform: translate(-10px, -10px);
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
  }
`

const ScheduleTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ScheduleStartTime = styled.span`
  font-size: 1.5em;
  color: #6d6ec7;
`

const ScheduleEndTime = styled.span`
  font-size: 0.9em;
  color: #bbc9f3;
`

const ScheduleContourLine = styled.div`
  width: 3.5px;
  height: 50px;
  background-color: #6d6ec7;

  border-radius: 10px;
  margin: 5px 30px 0 30px;
`

const ScheduleContent = styled.div`
  color: #474747;

  display: flex;
  flex-direction: column;

  padding-top: 5px;
`

const ScheduleContentTagName = styled.span`
  color: #9c9c9c;
`

const ScheduleDetailItem: React.FC = () => {
  return (
    <ScheduleItem>
      <ScheduleTimeContainer>
        <ScheduleStartTime>08:30</ScheduleStartTime>
        <ScheduleEndTime>09:00</ScheduleEndTime>
      </ScheduleTimeContainer>      
      <ScheduleContourLine />
      <ScheduleContent>
        <ScheduleContentTagName>Developing</ScheduleContentTagName>
        SetUp Github
      </ScheduleContent>
    </ScheduleItem>
  );
};

export default ScheduleDetailItem;