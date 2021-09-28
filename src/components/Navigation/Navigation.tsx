import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from 'styled-components';
import { routeData } from "../../lib/static";
import { getNavUrl } from "../../lib/utils";
import { pageMove } from "../../modules/actions";
import NavigationItemContainer from './NavigationItemContainer';
import { LogoImg } from '../../assets/icon'; 

const Container = styled.div`
  width: 110px;
  height: 100%;
  background-color: #E9ECF5;

  font-size: 1.4em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 100;

  padding-top: 70px;
`

const Logo = styled.img<{ src: string }>`
  width: 40px;
`

export interface NavItem {
  name: string;
  enName: string;
  route: string;
  nomalIcon: string;
  activeIcon: string;
}

const Navigation: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const url = getNavUrl(history.location.pathname);
    dispatch(pageMove(url));
  });

  return (
    <Container>
      <Logo src={LogoImg} />
      <NavigationItemContainer routeData={routeData} />
      <div></div>
    </Container>
  );
};

export default Navigation;