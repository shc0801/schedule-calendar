import { PageState } from "../modules/reducer/page";

export const getNavUrl = (url: string): PageState => {
  const page = url.split("/")[1] === "" || url.split("/")[1] === "1" ? "home" : url.split("/")[1];
  return { page: page }
};