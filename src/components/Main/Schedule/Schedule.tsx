import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../../modules/reducer';
import { setScheduleDate } from '../../../modules/actions';

const Container = styled.div`
  width: 42vw;
  position: relative;
`;

const Schedule: React.FC = () => {
  return (
    <Container>
      
    </Container>
  );
};

export default Schedule;