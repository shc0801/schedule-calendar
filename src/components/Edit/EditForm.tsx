import React, { FC, useState } from "react";
import styled from "styled-components";
import ColorPicker from "react-pick-color";

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
  
  position: absolute;
  right: 10%; bottom: -15%;

  margin-top: 50px;
  padding: 20px 80px;
  border-radius: 10px;
  cursor: pointer;
`

const FormResetText = styled.p`
  font-size: 0.6em;
  font-weight: bold;

  position: absolute;
  right: 50%; bottom: -15%;
`

const FormResetTextBold = styled.u`
  cursor: pointer;
`

const EditForm: FC = () => {
  const [color, setColor] = useState("#fff");

  const [schedule, setSchedule] = useState({
    title: "",
    startDate: "",
    startTime: "",
    endTime: "",
    tagName: "",
    content: "",
  });
  const { title, startDate, startTime, endTime, tagName, content } = schedule; //user 객체 비구조화 할당

  const onChangeInput = e => {
    const { name, value } = e.target;
    setSchedule({ ...schedule, [name]: value }); //...user로 불변성 유지와  [name]을 사용해서 현재 입력하고 있는 input의 name의 상태 변경.
  };

  const allReset = () => {
    setSchedule({ title: "", startDate: "", startTime: "", endTime: "", tagName: "", content: "" });
  };

  const resetTitle = () => {
    setSchedule({ title: "", startDate: startDate, startTime: startTime, endTime: endTime, tagName: tagName, content: content });
  }
  
  const resetStartDateTime = () => {
    setSchedule({ title: title, startDate: "", startTime: "", endTime: endTime, tagName: tagName, content: content });
  }
  const resetendTime = () => {
    setSchedule({ title: title, startDate: startDate, startTime: startTime, endTime: "", tagName: tagName, content: content });
  }
  
  const resetTagName = () => {
    setSchedule({ title: title, startDate: startDate, startTime: startTime, endTime: endTime, tagName: "", content: content });
  }
  
  const resetContent = () => {
    setSchedule({ title: title, startDate: startDate, startTime: startTime, endTime: endTime, tagName: tagName, content: "" });
  }

  return (
    <Container>
      <FormTop>
        <FormGroup>
          <FlexBetween>
            <FormLabel>제목</FormLabel>
            <ClearBtn onClick={resetTitle}>Clear</ClearBtn>
          </FlexBetween>
          <ScheduleTitleInput name="title" onChange={onChangeInput} value={title} placeholder="제목을 입력해주세요" />
        </FormGroup>
        <FormGroup>
          <FlexBetween>
            <FormLabel>시작하는 날짜, 시간</FormLabel>
            <ClearBtn onClick={resetStartDateTime}>Clear</ClearBtn>
          </FlexBetween>
          <FlexBetween>
            <ScheduleStartDateInput name="startDate" onChange={onChangeInput} value={startDate} type="date" />
            <ScheduleStartTimeInput name="startTime" onChange={onChangeInput} value={startTime} type="time" />
          </FlexBetween>
        </FormGroup>
      </FormTop>
      <FormMid>
        <FormGroup>
          <FlexBetween>
            <FormLabel>태그</FormLabel>
            <ClearBtn onClick={resetTagName}>Clear</ClearBtn>
          </FlexBetween>
          <ScheduleTagNameInput name="tagName" onChange={onChangeInput} value={tagName} placeholder="태그 이름을 입력해주세요" />
        </FormGroup>
        <FormGroup>
          <FlexBetween>
            <FormLabel>마감 시간</FormLabel>
            <ClearBtn onClick={resetendTime}>Clear</ClearBtn>
          </FlexBetween>
          <ScheduleStartDateInput name="endTime" onChange={onChangeInput} value={endTime} type="time" />
        </FormGroup>
      </FormMid>
      <FormMid>
        <FormGroup>
          <FlexBetween>
            <FormLabel>내용</FormLabel>
            <ClearBtn onClick={resetContent}>Clear</ClearBtn>
          </FlexBetween>
          <ScheduleContentTextArea name="content" onChange={onChangeInput} value={content} placeholder="내용을 입력해주세요" />
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
        <FormResetText>모든 내용을 지우고 싶습니까? <FormResetTextBold onClick={allReset}>여기</FormResetTextBold>를 눌러주세요</FormResetText>
        <ScheduleAddBtn>등록하기</ScheduleAddBtn>
      </FormBottom>
    </Container>
  );
};

export default EditForm;
