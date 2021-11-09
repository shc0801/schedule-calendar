import { PageState } from "../modules/reducer/page";

export const getNavUrl = (url: string): PageState => {
  const page = url.split("/")[2] === "" || url.split("/")[2] === "1" ? "home" : url.split("/")[2];
  return { page: page }
};