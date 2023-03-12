// 变量名对应含义请在 /stores/* 里边找
import { RouteRecordRaw, RouteLocationNormalized } from "vue-router";

export interface Layout {
  layoutMode: "classic" | "vertical";
  isDark: boolean;
  menuWidth: number;
  menuCollapse: boolean;
  menuUniqueOpened: boolean;
  menuBackground: string[];
  menuColor: string[];
  menuActiveBackground: string[];
  menuActiveColor: string[];
  menuTopBarBackground: string[];

  baseBackground: string[];
  baseTextColor: string[];
  
  navMenuTabColor: string[];
  navMenuBackground: string[];
  navMenuHoverBackground: string[];
  navMenuTabActiveBackground: string[];
  navMenuTabActiveColor: string[];
}

export interface NavTabs {
  activeIndex: number;
  activeRoute: RouteLocationNormalized | null;
  tabsView: RouteLocationNormalized[];
  tabFullScreen: boolean;
  tabsViewRoutes: RouteRecordRaw[];
  authNode: Map<string, string[]>;
}
