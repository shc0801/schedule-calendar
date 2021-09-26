import React, { FC } from "react";
import { useSelector } from "react-redux";
import RootState from "../../modules/reducer/index";
import styled from "styled-components";
import { routeDataType } from "../../lib/static";
import NavigationItem from "./NavigationItem";
// import NavigationItem from './NavigationItem';

const Container = styled.nav`
  display: flex;
  flex-direction: column;

  padding-top: 50px;

  & > a {
    font-size: 1.2em;
    padding: 15px 0;
  }
  & > a:nth-child(2) {
    color: #000;
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
  const url = useSelector(
    (state: ReturnType<typeof RootState>) => state.page.page
  );

  return (
    <Container>
      {routeData.data.map((item, idx) => (
        <NavigationItem
          key={idx}
          name={item.name}
          route={item.route}
          isActive={url === item.enName}
        />
      ))}
    </Container>
  );
};

export default NavigationItemContainer;
