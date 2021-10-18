import React, { FC } from 'react';
import { Switch, Router, Route } from "react-router-dom";
import { history } from "./modules/store";
import { GlobalStyle, GlobalContainer } from "./GlobalStyle";
import {
  Navigation,
  Header
} from "./components";
import {
  MainPage,
  EditPage,
  LoginPage,
  RegisterPage
} from './pages';
import { ToastContainer } from 'react-toastify';

const App: FC<{}> = () => {

  return (
    <GlobalContainer>
      <GlobalStyle />
      <ToastContainer />
      <Router history={history}>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/" exact render={() => <MainPage />} />
          <Route path="/home" component={MainPage} />
          <Route path="/edit" component={EditPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </GlobalContainer>
  )
}

export default App;