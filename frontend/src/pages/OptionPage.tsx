import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { pageMove } from '../modules/actions';

const EditPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  alert("추후 공개될 페이지입니다.");
  dispatch(pageMove({ page: "/home" }));
  history.push("/home");

  return (
    <></>
  );
};

export default EditPage;