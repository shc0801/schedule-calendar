import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from "./Router";
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
// import { useDispatch } from 'react-redux';

const App:React.FC = () => {

  return(
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      <Router />
    </BrowserRouter>
  )
}

export default App;