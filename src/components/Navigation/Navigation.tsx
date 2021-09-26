import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from 'styled-components';
import { routeData } from "../../lib/static";
import { getNavUrl } from "../../lib/utils";
import { pageMove } from "../../modules/actions";
import NavigationItemContainer from './NavigationItemContainer';

const Container = styled.aside`
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
  enName: string;
  route: string;
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
      <NavigationItemContainer routeData={routeData} />
    </Container>
  );
};

export default Navigation;