import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { RootState } from "../../../modules/reducer";
import ScheduleDetailItem from "./ScheduleDetailItem";
import { Ghost, EffectBackground } from "../../../assets/icon/index";
import { useHistory } from "react-router";
import { pageMove } from "../../../modules/actions";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-40px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

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

const ScheduleContainer = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  padding-top: 15vh;
`;

const EffectBackgroundImg = styled.img`
  width: 65%;
  position: absolute;
  top: 120px;
`

const GhostImg = styled.img`
  width: 200px;

  animation: ${bounce} 2s infinite;

  margin-right: 20px;
  margin-bottom: 40px;
`;

const SelectText = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.55em;
`;

const DetailText = styled.p`
  font-size: 0.9em;
  font-weight: 700;
  color: #707070;

  margin: 15px 0 30px 0;
`;
const DetailTextBold = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  color: #000;
`;

const AddScheduleBtn = styled.div`
  background-color: #6d6ec7;

  font-family: "Noto Sans KR", sans-serif;
  color: #fff;

  padding: 0.8em 4em;
  border-radius: 20px;
  cursor: pointer;
`;

const ScheduleDetail: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { date } = useSelector((state: RootState) => state.schedule);

  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;
  const day = new Date(date).getDate();

  const user =
    JSON.parse(window.localStorage.getItem("user")) === null
      ? { user_id: "" }
      : JSON.parse(window.localStorage.getItem("user"))[0];
  let schedule = JSON.parse(window.localStorage.getItem("schedules")).filter(
    (item) => {
      if (
        item.year === year &&
        item.month === month &&
        item.day === day &&
        item.user_id === user.user_id
      )
        return item;
      return false;
    }
  );

  const goEditPage = () => {
    dispatch(pageMove({ page: "/1/edit" }));
    history.push("/1/edit");
  };

  return (
    <ScheduleGroupContainer>
      {schedule.length === 0 ? (
        <ScheduleContainer>
          <EffectBackgroundImg src={EffectBackground} />
          <GhostImg src={Ghost} />
          <SelectText>????????? ???????????? ?????????!</SelectText>
          <DetailText>
            ????????? ????????? ????????? ?????? <br />
            <DetailTextBold>??????</DetailTextBold>??? ????????????!
          </DetailText>
          <AddScheduleBtn onClick={goEditPage}>?????? ????????????</AddScheduleBtn>
        </ScheduleContainer>
      ) : (
        <>
          {schedule.map((item) => (
            <ScheduleDetailItem
              key={item.id}
              id={item.id}
              start_time={item.start_time}
              end_time={item.end_time}
              tag_name={item.tag_name}
              content={item.content}
              color={item.color}
            />
          ))}
        </>
      )}
    </ScheduleGroupContainer>
  );
};

export default ScheduleDetail;
