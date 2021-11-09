import { ActionType, deprecated } from "typesafe-actions";

const { createStandardAction } = deprecated;

export const PAGE_MOVE = "page/PAGE_MOVE";
export const SET_SCHEDULE = "schedule/SET_SCHEDULE";
export const SET_SCHEDULE_DATE = "schedule/SET_SCHEDULE_DATE";
export const SET_SELECTED_DATE = "schedule/SET_SELECTED_DATE";

export const pageMove = createStandardAction(PAGE_MOVE)<{
  page: string
}>();

export const setSchedule = createStandardAction(SET_SCHEDULE)<{
  schedules: [];
}>();

export const setScheduleDate = createStandardAction(SET_SCHEDULE_DATE)<{
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
  typeof setSchedule | typeof setScheduleDate | typeof setSelectedDate
>
export type Schedules = {
  schedules: [],
  schedulerDate: Date
  date: string
}