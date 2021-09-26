import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { pageMove } from '../../modules/actions';

const Container = styled.div`
  width: 350px;
  background-color: #687af8;

  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px 50px;
`

interface Props {
  name: string;
  route: string;
  isActive: boolean;
}

const NavigationItemContainer: FC<Props> = ({
  name,
  route,
  isActive               
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = () => {
    if(history.location.pathname === route) return;
    dispatch(pageMove({page: route}));
    console.log(route);
    history.push(route);
  };

  return (
    <Container onClick={onClick}>
      asdasdasd
    </Container>
  );
};

export default NavigationItemContainer;