import React, { FC } from 'react';
import { Switch, Router, Route, Redirect } from "react-router-dom";
import { history } from "./modules/store";
import { GlobalStyle, GlobalContainer } from "./GlobalStyle";
import {
  Navigation
} from "./components";
import {
  MainPage,
} from './pages';
import {
  userRoute
} from "./lib/static";
import { ToastContainer } from 'react-toastify';


const App: FC<{}> = () => {

  return (
    <GlobalContainer>
      <GlobalStyle />
      <ToastContainer />
      <Router history={history}>
        <Navigation routeData={userRoute} />
        <Switch>
          <Route path="/home" component={MainPage} />
          <Redirect path="/" to="/home" />
        </Switch>
      </Router>
    </GlobalContainer>
  )
}

export default App;