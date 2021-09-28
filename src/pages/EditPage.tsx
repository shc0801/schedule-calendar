import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  width: calc(100vw - 110px);
  background-color: #F4F4FB;
`

const EditPage: React.FC = () => {
  return (
    <Container>
      글 쓰기/수정 페이지
    </Container>
  );
};

export default EditPage;