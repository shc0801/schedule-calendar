import { NavItem } from "../components/Navigation/Navigation"

export interface routeDataType {
  data: NavItem[];
}

export const routeData: routeDataType = {
  data: [
    {
      name: "홈",
      enName: "home",
      route: "/home"
    },
    {
      name: "공지",
      enName: "notice",
      route: "/notice"
    }
  ]
};