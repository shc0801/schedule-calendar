import React from 'react';
import styled from 'styled-components';
import { LoginForm } from '../components'

const Container = styled.div `
  width: calc(100vw - 110px);
  background-color: #f6f6f6;

  position: relative;
`                         

const LoginPage: React.FC = () => {
  return (
    <Container>
        <LoginForm />
    </Container>
  );
};

export default LoginPage;