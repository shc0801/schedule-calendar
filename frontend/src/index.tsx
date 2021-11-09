import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./modules/reducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>,
  document.getElementById("root")
);
