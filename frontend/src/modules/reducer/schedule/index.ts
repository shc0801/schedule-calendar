import { createReducer } from "typesafe-actions";
import {
  ScheduleAction,
  SET_SCHEDULE,
  SET_SCHEDULE_DATE,
  SET_SELECTED_DATE,
} from "../../actions";
import { Schedules } from "../../actions/index";
import produce from "immer";


export interface scheduleState {
  schedules: [];
  schedulerDate: Date;
  date: string;
}

const initialState: scheduleState = {
  schedules: [],
  schedulerDate: new Date(),
  date: "",
};

const schedule = createReducer<Schedules, ScheduleAction>(initialState, {
  [SET_SCHEDULE]: (state, action) =>
    produce(state, (draft) => {
      draft.schedules = action.payload.schedules;
    }),
  [SET_SCHEDULE_DATE]: (state, action) =>
    produce(state, (draft) => {
      draft.schedulerDate = action.payload.schedulerDate;
    }),
  [SET_SELECTED_DATE]: (state, action) =>
    produce(state, (draft) => {
      draft.date = action.payload.date;
    }),
});

export default schedule;
