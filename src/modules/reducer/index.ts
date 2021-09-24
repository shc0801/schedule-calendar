import { combineReducers } from "redux";
import { Page } from "../actions";
import page from "./page";

export type RootState = {
    page: Page
}

const rootReducer = combineReducers({
    page: page,
});

export default rootReducer;