import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { pageMove } from "../../modules/actions";

const Container = styled.div`
  width: 100%;
  height: 85px;
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 0;
  cursor: pointer;

  &.login {
    position: absolute;
    top: calc(85px * 2);
  }
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

interface Props {
  name: string;
  route: string;
  src: string;
  isActive: boolean;
}

const NavigationItemContainer: FC<Props> = ({ name, route, src, isActive }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(pageMove({ page: route }));
    history.push(route);
  };

  return (
    <Container className={isActive ? ` ${route.substring(1)}` : `${route.substring(1)}`} onClick={onClick}>
      <Icon src={src}></Icon>
    </Container>
  );
};

export default NavigationItemContainer;
