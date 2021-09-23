import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import rootReducer from "../reducer";

export const history = createBrowserHistory();
