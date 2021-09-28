import React, { FC } from 'react';
import { Switch, Router, Route } from "react-router-dom";
import { history } from "./modules/store";
import { GlobalStyle, GlobalContainer } from "./GlobalStyle";
import {
  Navigation
} from "./components";
import {
  MainPage,
  EditPage
} from './pages';
import { ToastContainer } from 'react-toastify';

const App: FC<{}> = () => {

  return (
    <GlobalContainer>
      <GlobalStyle />
      <ToastContainer />
      <Router history={history}>
        <Navigation />
        <Switch>
          <Route path="/" exact render={() => <MainPage />} />
          <Route path="/home" component={MainPage} />
          <Route path="/edit" component={EditPage} />
        </Switch>
      </Router>
    </GlobalContainer>
  )
}

export default App;