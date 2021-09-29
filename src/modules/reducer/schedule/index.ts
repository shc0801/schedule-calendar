import { createReducer } from "typesafe-actions";
import { ScheduleAction, SET_SCHEDULES } from "../../actions";
import { Schedules } from "../../actions/index";
import produce from 'immer'

export interface scheduleType {
  schedule_id: string;
  start_date: number;
  end_date: number;
  detail: string;
}

export interface scheduleState {
  schedules: scheduleType[];
  schedulerDate: Date;
}

const initialState: scheduleState = {
  schedules: [],
  schedulerDate: new Date(),
};

const schedule = createReducer<Schedules, ScheduleAction>(initialState, {
  [SET_SCHEDULES]: (state, action) =>
    produce(state, draft => {
      draft.schedules = action.payload.schedules;
    })
})

export default schedule;