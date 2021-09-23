import { combineReducers } from "redux";
import pageReducer from "./page";

const rootReducer = combineReducers({
    page: pageReducer,
});

export default rootReducer;