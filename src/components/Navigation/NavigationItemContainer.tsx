import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RootState from "../../modules/reducer/index"
import styled from 'styled-components';
// import NavigationItem from './NavigationItem';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  padding-top: 50px; 

  & > a { 
    font-size: 1.2em; 
    padding: 15px 0;
  }
  & > a:nth-child(2) { color: #000 } 
`

export interface NavItem {
  name: string;
  route: string;
}

interface Props {
  navItem: NavItem[];
}

const NavigationItemContainer: FC<Props> = ({ navItem }) => {
  const url = useSelector((state: typeof RootState) => state);
  console.log(url);
  const dispatch = useDispatch();
  return (
    <Nav>
      
    </Nav>
  );
};

export default NavigationItemContainer;