import {
  HomeIcon,
  ActiveHomeIcon,
  EditIcon,
  ActiveEditIcon,
  OptionIcon,
  ActiveOptionIcon,
  UserIcon,
  ActiveUserIcon
} from '../assets/icon';
import { NavItem } from "../components/Navigation/Navigation"

export interface routeDataType {
  data: NavItem[];
}

export const routeData: routeDataType = {
  data: [
    {
      name: "홈",
      enName: "home",
      route: "/home",
      nomalIcon: HomeIcon,
      activeIcon: ActiveHomeIcon,
    },
    {
      name: "제작",
      enName: "edit",
      route: "/edit",
      nomalIcon: EditIcon,
      activeIcon: ActiveEditIcon,
    },
    {
      name: "마이페이지",
      enName: "myPage",
      route: "/myPage",
      nomalIcon: UserIcon,
      activeIcon: ActiveUserIcon,
    },
    {
      name: "설정",
      enName: "option",
      route: "/option",
      nomalIcon: OptionIcon,
      activeIcon: ActiveOptionIcon,
    }
  ]
};