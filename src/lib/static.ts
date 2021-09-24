import { NavItem } from "../components/Navigation/Navigation"

export interface RouteData {
  data: NavItem[];
}

export const userRoute: RouteData = {
  data: [
    {
      name: "홈",
      route: "/home"
    },
    {
      name: "공지",
      route: "/notice"
    }
  ]
};