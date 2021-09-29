import { combineReducers } from "redux";
import { Page, Schedules } from "../actions";
import page from "./page";
import schedule from "./schedule";

export type RootState = {
    page: Page,
    schedule: Schedules,
}

const rootReducer = combineReducers({
    page: page,
    schedule: schedule
});

export default rootReducer;