import React from 'react';
import styled from 'styled-components';
import { EditTitleIcon, LogoImg } from '../assets/icon';
import EditForm from '../components/Edit/EditForm'

const Container = styled.div `
  width: calc(100vw - 110px);

  padding: 150px 0 0 80px;
`

const BackgroundLogo = styled.img`
  width: 35vw;

  position: absolute;
  right: 10%; bottom: 10%;

  opacity: 0.2;
`

const EditHeader = styled.div`
  display: flex;
`

const EditIcon = styled.img`
  margin-right: 15px;
`

const EditHeaderTitle = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.8em;
  color: #333;
`

const EditPage: React.FC = () => {
  return (
    <Container>
      <BackgroundLogo src={LogoImg} />
      <EditHeader><EditIcon src={EditTitleIcon} /> <EditHeaderTitle>일정 추가하기</EditHeaderTitle></EditHeader>
      <EditForm />
    </Container>
  );
};

export default EditPage;