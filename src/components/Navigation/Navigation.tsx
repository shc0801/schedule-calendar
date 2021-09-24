import React, { FC, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from 'styled-components';
import { RouteData } from "../../lib/static";
import NavigationItemContainer from './NavigationItemContainer';

const Aside = styled.aside`
  width: 350px;
  background-color: #687af8;

  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px 50px;
`
export interface NavItem {
  name: string;
  route: string;
}

interface Props {
  routeData: RouteData;
}

const Navigation: FC<Props> = ({ routeData }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const goMain = useCallback(() => {
    history.push("/home");
  }, []);

  return (
    <Aside>
      Logo
      <NavigationItemContainer navItem={routeData.data} />
    </Aside>
  );
};

export default Navigation;