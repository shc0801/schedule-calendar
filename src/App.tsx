import React from 'react';
import { Switch, Router, Route, Redirect } from "react-router-dom";
import { history } from "./modules/store";
import { GlobalStyle, GlobalContainer } from "./GlobalStyle";
import {
  Navigation
} from "./components";
import { ToastContainer } from 'react-toastify';
// import { useDispatch } from 'react-redux';

const App:React.FC = () => {

  return(
    <GlobalContainer>
      <GlobalStyle />
      <ToastContainer />
      <Router history={history}>
        <Navigation />
      </Router>
    </GlobalContainer>
  )
}

export default App;