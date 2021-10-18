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

const LoginFormTitle = styled.p`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  margin-bottom: 20px;
`;

const LoginIdInput = styled.input`
  width: 20vw;

  margin-bottom: 20px;
  padding: 12px 24px 12px 16px;
  border: 0;
  border-radius: 10px;
`;

const LoginPwInput = styled.input`
  width: 20vw;

  padding: 12px 24px 12px 16px;
  border: 0;
  border-radius: 10px;
`;

const LoginBtn = styled.div`
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

const GoRegisterText = styled.span`
  font-size: 0.7em;
  font-weight: 700;

  margin-top: 30px;
`;

const GoRegisterTextU = styled.u`
  font-weight: 700;
  cursor: pointer;
`;

const LoginForm: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(pageMove({ page: "/register" }));
    history.push("/register");
  };

  return (
    <Container>
      <Logo src={LogoImg} />
      <LoginFormTitle>Scheder</LoginFormTitle>
      <LoginIdInput placeholder="아이디" />
      <LoginPwInput type="password" placeholder="비밀번호" />
      <LoginBtn>로그인</LoginBtn>
      <GoRegisterText>
        아직 계정이 없으신가요?{" "}
        <GoRegisterTextU onClick={onClick}>회원가입</GoRegisterTextU>
      </GoRegisterText>
    </Container>
  );
};

export default LoginForm;
