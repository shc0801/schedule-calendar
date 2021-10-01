import { ActionType, deprecated } from "typesafe-actions";
import { scheduleType } from "../reducer/schedule";

const { createStandardAction } = deprecated;

export const PAGE_MOVE = "page/PAGE_MOVE";
export const SET_SCHEDULES = "schedule/SET_SCHEDULES";
export const SET_SELECTED_DATE = "schedule/SET_SELECTED_DATE";

export const pageMove = createStandardAction(PAGE_MOVE)<{
  page: string
}>();

export const setSchedules = createStandardAction(SET_SCHEDULES)<{
  schedules: scheduleType[],
  schedulerDate: Date
}>();

export const setSelectedDate = createStandardAction(SET_SELECTED_DATE)<{
  date: string
}>();

export type PageAction = ActionType<typeof pageMove>
export type Page = {
  page: string
}
export type ScheduleAction = ActionType<
  typeof setSchedules | typeof setSelectedDate
>
export type Schedules = {
  schedules: scheduleType[],
  schedulerDate: Date
  date: string
}