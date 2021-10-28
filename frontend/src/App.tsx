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
  RegisterPage,
  OptionPage
} from './pages';
import { Toaster } from 'react-hot-toast';

const App: FC<{}> = () => {

  return (
    <GlobalContainer>
      <GlobalStyle />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Router history={history}>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/1" exact render={() => <MainPage />} />
          <Route path="/1/home" component={MainPage} />
          <Route path="/1/edit" component={EditPage} />
          <Route path="/1/login" component={LoginPage} />
          <Route path="/1/register" component={RegisterPage} />
          <Route path="/1/option" component={OptionPage} />
        </Switch>
      </Router>
    </GlobalContainer>
  )
}

export default App;