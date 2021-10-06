import React, { FC } from "react";
import styled from 'styled-components';
import { routeData } from "../../lib/static";
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
  return (
    <Container>
      <Logo src={LogoImg} />
      <NavigationItemContainer routeData={routeData} />
      <div></div>
    </Container>
  );
};

export default Navigation;