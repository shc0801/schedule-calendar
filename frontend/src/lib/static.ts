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
      route: "/1/home",
      nomalIcon: HomeIcon,
      activeIcon: ActiveHomeIcon,
    },
    {
      name: "제작",
      enName: "edit",
      route: "/1/edit",
      nomalIcon: EditIcon,
      activeIcon: ActiveEditIcon,
    },
    {
      name: "로그인페이지",
      enName: "login",
      route: "/1/login",
      nomalIcon: UserIcon,
      activeIcon: ActiveUserIcon,
    },
    {
      name: "회원가입 페이지",
      enName: "register",
      route: "/1/register",
      nomalIcon: UserIcon,
      activeIcon: ActiveUserIcon,
    },
    {
      name: "설정",
      enName: "option",
      route: "/1/option",
      nomalIcon: OptionIcon,
      activeIcon: ActiveOptionIcon,
    }
  ]
};