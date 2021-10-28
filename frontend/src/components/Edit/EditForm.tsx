import React, { FC, useState } from "react";
import styled from "styled-components";
import ColorPicker from "react-pick-color";
import toast from "react-hot-toast";
import Api from "../../apis";
import { pageMove } from "../../modules/actions";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const Container = styled.form`
  font-size: 1.4em;

  display: flex;
  flex-direction: column;

  position: relative;
  z-index: 100;

  padding-top: 40px;
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 8px;
`;

const FormTop = styled.div`
  display: flex;
`;
const FormMid = styled.div`
  display: flex;
`;
const FormBottom = styled.div`
  display: flex;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 100px 50px 0;
`;

const FormLabel = styled.label`
  font-size: 0.8em;
  font-weight: 400;
`;

const ClearBtn = styled.div`
  font-size: 0.7em;
  color: #6d6ec7;
  cursor: pointer;
`;

const ScheduleTitleInput = styled.input`
  width: 25vw;
  height: 50px;

  border: 1px solid #aaa;
  border-radius: 10px;
  margin-top: 8px;
  padding: 0 20px;
`;

const ScheduleStartDateInput = styled.input`
  width: 25vw;
  height: 50px;

  border: 1px solid #aaa;
  border-radius: 10px;
  margin-top: 8px;
  padding: 0 20px;
`;

const ScheduleStartTimeInput = styled.input`
  width: 25vw;
  height: 50px;

  border: 1px solid #aaa;
  border-radius: 10px;
  margin-top: 8px;
  margin-left: 20px;
  padding: 0 20px;
`;

const ScheduleTagNameInput = styled.input`
  width: 25vw;
  height: 50px;

  border: 1px solid #aaa;
  border-radius: 10px;
  margin-top: 8px;
  padding: 0 20px;
`;

const ScheduleContentTextArea = styled.textarea`
  width: 30vw;
  height: 250px;

  border: 1px solid #aaa;
  border-radius: 10px;
  margin-top: 8px;
  padding: 10px;
`;

const ColorPickerContainer = styled.div`
  margin-top: 8px;
`;

const ScheduleAddBtn = styled.div`
  background-color: #6d6ec7;

  color: #fff;
  font-size: 0.7em;
  font-weight: 700;

  position: fixed;
  right: 8%;
  bottom: 5%;

  margin-top: 50px;
  padding: 20px 80px;
  border-radius: 10px;
  cursor: pointer;
`;

const FormResetText = styled.p`
  font-size: 0.6em;
  font-weight: bold;

  position: fixed;
  right: 45%;
  bottom: 5%;
`;

const FormResetTextBold = styled.u`
  cursor: pointer;
`;

const EditForm: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [color, setColor] = useState("#fff");

  const [schedule, setSchedule] = useState({
    title: "",
    date: "",
    start_time: "",
    end_time: "",
    tag_name: "",
    content: "",
  });
  const { title, date, start_time, end_time, tag_name, content } = schedule;
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setSchedule({ ...schedule, [name]: value });
  };

  const allReset = () => {
    setSchedule({
      title: "",
      date: "",
      start_time: "",
      end_time: "",
      tag_name: "",
      content: "",
    });
  };

  const resetTitle = () => {
    setSchedule({
      title: "",
      date: date,
      start_time: start_time,
      end_time: end_time,
      tag_name: tag_name,
      content: content,
    });
  };

  const resetStartDateTime = () => {
    setSchedule({
      title: title,
      date: "",
      start_time: "",
      end_time: end_time,
      tag_name: tag_name,
      content: content,
    });
  };

  const resetendTime = () => {
    setSchedule({
      title: title,
      date: date,
      start_time: start_time,
      end_time: "",
      tag_name: tag_name,
      content: content,
    });
  };

  const resetTagName = () => {
    setSchedule({
      title: title,
      date: date,
      start_time: start_time,
      end_time: end_time,
      tag_name: "",
      content: content,
    });
  };

  const resetContent = () => {
    setSchedule({
      title: title,
      date: date,
      start_time: start_time,
      end_time: end_time,
      tag_name: tag_name,
      content: "",
    });
  };

  const Edit = async () => {
    if (
      title.trim() === "" ||
      date.trim() === "" ||
      start_time.trim() === "" ||
      end_time.trim() === "" ||
      tag_name.trim() === "" ||
      content.trim() === ""
    ) {
      toast.error("공백이 존재합니다!", {
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
      return;
    }

    const { user_id } = JSON.parse(localStorage.getItem("user"))[0];
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();
    
    Api.post("/edit", {
      title,
      user_id,
      tag_name,
      year, 
      month, 
      day,
      start_time,
      end_time,
      content,
      color,
    })
      .then((res) => {
        alert(res.data.msg);
        dispatch(pageMove({ page: "/1/home" }));
        history.push("/1/home");
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
  };

  return (
    <Container>
      <FormTop>
        <FormGroup>
          <FlexBetween>
            <FormLabel>제목</FormLabel>
            <ClearBtn onClick={resetTitle}>Clear</ClearBtn>
          </FlexBetween>
          <ScheduleTitleInput
            name="title"
            onChange={onChangeInput}
            value={title}
            placeholder="제목을 입력해주세요"
          />
        </FormGroup>
        <FormGroup>
          <FlexBetween>
            <FormLabel>날짜, 시작 시간</FormLabel>
            <ClearBtn onClick={resetStartDateTime}>Clear</ClearBtn>
          </FlexBetween>
          <FlexBetween>
            <ScheduleStartDateInput
              name="date"
              onChange={onChangeInput}
              value={date}
              type="date"
            />
            <ScheduleStartTimeInput
              name="start_time"
              onChange={onChangeInput}
              value={start_time}
              type="time"
            />
          </FlexBetween>
        </FormGroup>
      </FormTop>
      <FormMid>
        <FormGroup>
          <FlexBetween>
            <FormLabel>태그</FormLabel>
            <ClearBtn onClick={resetTagName}>Clear</ClearBtn>
          </FlexBetween>
          <ScheduleTagNameInput
            name="tag_name"
            onChange={onChangeInput}
            value={tag_name}
            placeholder="태그 이름을 입력해주세요"
          />
        </FormGroup>
        <FormGroup>
          <FlexBetween>
            <FormLabel>마감 시간</FormLabel>
            <ClearBtn onClick={resetendTime}>Clear</ClearBtn>
          </FlexBetween>
          <ScheduleStartDateInput
            name="end_time"
            onChange={onChangeInput}
            value={end_time}
            type="time"
          />
        </FormGroup>
      </FormMid>
      <FormMid>
        <FormGroup>
          <FlexBetween>
            <FormLabel>내용</FormLabel>
            <ClearBtn onClick={resetContent}>Clear</ClearBtn>
          </FlexBetween>
          <ScheduleContentTextArea
            name="content"
            onChange={onChangeInput}
            value={content}
            placeholder="내용을 입력해주세요"
          />
        </FormGroup>
        <FormGroup>
          <FlexBetween>
            <FormLabel>색상</FormLabel>
          </FlexBetween>
          <ColorPickerContainer>
            <ColorPicker
              color={color}
              onChange={(color) => setColor(color.hex)}
            />
          </ColorPickerContainer>
        </FormGroup>
      </FormMid>
      <FormBottom>
        <FormResetText>
          모든 내용을 지우고 싶습니까?{" "}
          <FormResetTextBold onClick={allReset}>여기</FormResetTextBold>를
          눌러주세요
        </FormResetText>
        <ScheduleAddBtn onClick={Edit}>등록하기</ScheduleAddBtn>
      </FormBottom>
    </Container>
  );
};

export default EditForm;
