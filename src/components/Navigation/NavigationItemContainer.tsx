import React, { FC } from "react";
import { useSelector } from "react-redux";
import RootState from "../../modules/reducer/index";
import styled from "styled-components";
import { routeDataType } from "../../lib/static";
import NavigationItem from "./NavigationItem";
import { getNavUrl } from "../../lib/utils";
// import NavigationItem from './NavigationItem';

const Container = styled.nav`
  width: 110px;
  display: flex;
  flex-direction: column;
  
  margin-bottom: 70px;

  & > .active {
    position: relative;
  }
  & > .active::before {
    width: 5px;
    height: 70%;
    background-color: #6D6EC7;

    position: absolute;
    right: 0; top: 15%;

    content: '';
  }
`;

export interface NavItem {
  name: string;
  route: string;
}

interface Props {
  routeData: routeDataType;
}

const NavigationItemContainer: FC<Props> = ({ routeData }) => {
  const data = useSelector(
    (state: ReturnType<typeof RootState>) => state.page.page
  );
  const url = getNavUrl(data).page;
  return (
    <Container>
      {routeData.data.map((item) => (
        <NavigationItem
          key={item.route}
          name={item.name}
          route={item.route}
          src={url === item.enName ? item.activeIcon : item.nomalIcon}
          isActive={url === item.enName}
        />
      ))}
    </Container>
  );
};

export default NavigationItemContainer;
