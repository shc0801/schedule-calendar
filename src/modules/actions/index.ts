import { ActionType, deprecated } from "typesafe-actions";
import { scheduleType } from "../reducer/schedule";

const { createStandardAction } = deprecated;

export const PAGE_MOVE = "page/PAGE_MOVE";
export const SET_SCHEDULES = "schedule/SET_SCHEDULES";

export const pageMove = createStandardAction(PAGE_MOVE)<{
  page: string
}>();

export const setSchedules = createStandardAction(SET_SCHEDULES)<{
  schedules: scheduleType[],
  schedulerDate: Date
}>();

export type PageAction = ActionType<typeof pageMove>
export type Page = {
  page: string
}
export type ScheduleAction = ActionType<typeof setSchedules>
export type Schedules = {
  schedules: scheduleType[],
  schedulerDate: Date
}