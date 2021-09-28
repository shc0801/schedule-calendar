import { PageState } from "../modules/reducer/page";

export const getNavUrl = (url: string): PageState => {
  const page = url.split("/")[1] === undefined ? "home" : url.split("/")[1];
  return { page: page }
};