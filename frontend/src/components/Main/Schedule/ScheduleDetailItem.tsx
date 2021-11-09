import React, { FC } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import Api from "../../../apis";
import { RecycleIcon } from "../../../assets/icon/index";

const ScheduleItem = styled.div`
  width: 90%;
  background-color: #fff;

  display: flex;

  transition: .5s;

  border-radius: 20px;
  padding: 20px 50px 20px 30px;
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
  width: 13%;

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
  background-color: ${(props) => props.color};

  border-radius: 10px;
  margin: 5px 30px 0 30px;
`

const ScheduleContent = styled.div`
  width: 90%;
  color: #474747;

  display: flex;
  flex-direction: column;

  padding-top: 5px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ScheduleContentTagName = styled.span`
  color: #9c9c9c;
`

const RecycleIconImg = styled.img`
  width: 7%;

  margin-left: 20px;
  cursor: pointer;
`

interface Props {
  id: number;
  start_time: string;
  end_time: string;
  tag_name: string;
  content: string;
  color: string;
}

const ScheduleDetailItem: FC<Props> = ({ id, start_time, end_time, tag_name, content, color }) => {
  const scheduleDelete = () => {
    Api.post("/delete/schedule", { id })
      .then((res) => {
        Api.post("/get/schedule")
          .then((res) => {
            window.localStorage.setItem("schedules", JSON.stringify(res.data.result));
          })
          .catch((err) => {
            throw err;
          });
        alert(res.data.msg);
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err.response.data.msg, {
          style: {
            border: "1px solid #6d6ec7",
            padding: "16px",
            color: "#6d6ec7",
          },
          iconTheme: {
            primary: "#6d6ec7",
            secondary: "#FFFAEE",
          },
        });
        throw err;
      });
  }

  return (
    <ScheduleItem>
      <ScheduleTimeContainer>
        <ScheduleStartTime>{start_time}</ScheduleStartTime>
        <ScheduleEndTime>{end_time}</ScheduleEndTime>
      </ScheduleTimeContainer>      
      <ScheduleContourLine color={color} />
      <ScheduleContent>
        <ScheduleContentTagName>{tag_name}</ScheduleContentTagName>
        {content}
      </ScheduleContent>
      <RecycleIconImg src={RecycleIcon} onClick={scheduleDelete} />
    </ScheduleItem>
  );
};

export default ScheduleDetailItem;