import React from 'react';
import styled from 'styled-components';
import { RegisterForm } from '../components'

const Container = styled.div `
  width: calc(100vw - 110px);
  background-color: #f6f6f6;

  position: relative;
`                         

const RegisterPage: React.FC = () => {
  return (
    <Container>
        <RegisterForm />
    </Container>
  );
};

export default RegisterPage;