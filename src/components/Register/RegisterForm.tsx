import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { LogoImg } from "../../assets/icon";
import { pageMove } from "../../modules/actions";

const Container = styled.form`
  font-size: 1.4em;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const Logo = styled.img`
  width: 60px;
`;

const RegisterFormTitle = styled.p`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  margin-bottom: 20px;
`;

const RegisterIdInput = styled.input`
  width: 20vw;

  margin-bottom: 20px;
  padding: 12px 24px 12px 16px;
  border: 0;
  border-radius: 10px;
`;

const RegisterNameInput = styled.input`
  width: 20vw;

  margin-bottom: 20px;
  padding: 12px 24px 12px 16px;
  border: 0;
  border-radius: 10px;
`;

const RegisterPwInput = styled.input`
  width: 20vw;

  margin-bottom: 20px;
  padding: 12px 24px 12px 16px;
  border: 0;
  border-radius: 10px;
`;

const RegisterPw2Input = styled.input`
  width: 20vw;

  padding: 12px 24px 12px 16px;
  border: 0;
  border-radius: 10px;
`;

const RegisterBtn = styled.div`
  width: 20vw;
  background-color: #6d6ec7;

  color: #fff;
  font-size: 0.7em;
  font-weight: 700;
  text-align: center;

  margin-top: 30px;
  padding: 15px 0;
  border-radius: 10px;
  cursor: pointer;
`;

const GoLoginText = styled.span`
  font-size: 0.7em;
  font-weight: 700;

  margin-top: 30px;
`;

const GoLoginTextU = styled.u`
  font-weight: 700;
  cursor: pointer;
`;

const EditForm: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(pageMove({ page: '/login' }));
    history.push('/login');
  };

  return (
    <Container>
      <Logo src={LogoImg} />
      <RegisterFormTitle>Scheder</RegisterFormTitle>
      <RegisterIdInput placeholder="아이디" />
      <RegisterNameInput placeholder="이름" />
      <RegisterPwInput type="password" placeholder="비밀번호" />
      <RegisterPw2Input type="password" placeholder="비밀번호 확인" />
      <RegisterBtn>회원가입</RegisterBtn>
      <GoLoginText>
        다시 돌아가고 싶으신가요? <GoLoginTextU onClick={onClick}>로그인</GoLoginTextU>
      </GoLoginText>
    </Container>
  );
};

export default EditForm;
