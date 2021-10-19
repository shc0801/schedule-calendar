import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { pageMove } from "../../modules/actions";

const Container = styled.form`
  width: calc(100% - 170px);
  position: fixed;
  left: 140px; top: 0;
  z-index: 1000;

  display: flex;
  flex-direction: column;

  padding: 12px 10px;
  border-bottom: 1px solid #E9ECF5;
`;

const LoginText = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  color: #6d6ec7;

  align-self: flex-end;

  cursor: pointer;
`

const Header: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = () => {
    console.log("Asd");
    dispatch(pageMove({ page: '/login' }));
    history.push('/login');
  };

  return (
    <Container onClick={onClick}>
      <LoginText>로그인</LoginText>
    </Container>
  );
};

export default Header;
