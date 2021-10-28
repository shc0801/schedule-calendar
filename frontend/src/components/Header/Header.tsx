import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { pageMove } from "../../modules/actions";

const Container = styled.form`
  width: calc(100% - 170px);
  position: fixed;
  left: 140px;
  top: 0;
  z-index: 1000;

  display: flex;
  flex-direction: column;

  padding: 12px 10px;
  border-bottom: 1px solid #e9ecf5;
`;

const LoginText = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  color: #6d6ec7;

  align-self: flex-end;

  cursor: pointer;
`;

const ProfileText = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  color: #333;

  align-self: flex-end;
`;

const LogoutText = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  color: #6d6ec7;

  align-self: flex-end;

  margin-left: 10px;

  cursor: pointer;
`;

const Header: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const Login = () => {
    dispatch(pageMove({ page: "/1/login" }));
    history.push("/1/login");
  };

  const Logout = () => {
    localStorage.removeItem("user");
    alert("로그아웃 되었습니다!");
    
    dispatch(pageMove({ page: "/1/home" }));
    history.push("/1/home");
    window.location.reload();
  };

  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Container>
      {user === null ? (
        <LoginText onClick={Login}>로그인</LoginText>
      ) : (
        <ProfileText>
          {user[0].user_id}({user[0].user_name})<LogoutText onClick={Logout}>로그아웃</LogoutText>
        </ProfileText>
      )}
    </Container>
  );
};

export default Header;
