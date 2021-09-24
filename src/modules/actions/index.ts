import { ActionType, deprecated } from "typesafe-actions";

const { createStandardAction } = deprecated;

export const PAGE_MOVE = "page/PAGE_MOVE";

export const pageMove = createStandardAction(PAGE_MOVE)<{
  page: string;
}>();

export type PageAction = ActionType<typeof pageMove>
export type Page = {
  page: string
}