import { reactive } from "vue";
import { defineStore } from "pinia";
import { STORE_CONFIG } from "/@/store/consts/cacheKey";
import type { Layout } from "/@/store/interfaces";

export default defineStore(
  "appTheme",
  () => {
    const layout: Layout = reactive({
      layoutMode: "vertical",
      // 是否暗黑模式
      isDark: false,
      /* 侧边菜单 */
      // 侧边菜单背景色
      menuBackground: ["#ffffff", "#1d1e1f"],
      // 侧边菜单文字颜色
      menuColor: ["#303133", "#CFD3DC"],
      // 侧边菜单激活项背景色
      menuActiveBackground: ["#ffffff", "#1d1e1f"],
      // 侧边菜单激活项文字色
      menuActiveColor: ["#409eff", "#3375b9"],
      // 侧边菜单顶栏背景色
      menuTopBarBackground: ["#fcfcfc", "#1d1e1f"],
      // 侧边菜单宽度(展开时)，单位px
      menuWidth: 260,
      // 侧边菜单项默认图标
      menuDefaultIcon: "Minus",
      // 是否水平折叠收起菜单
      menuCollapse: false,
      // 是否只保持一个子菜单的展开(手风琴)
      menuUniqueOpened: false,
      // 显示菜单栏顶栏(LOGO)
      menuShowTopBar: true,
      // 最顶部系统标题栏设置
      baseBackground: ["#F56C6C", "#F56C6C"],
      baseTextColor: ["#FFFFFF", "#FFFFFF"],
      /* 顶栏 */
      // 顶栏背景色
      navMenuBackground: ["#FFFFFF", "#FFFFFF"],
      // 顶栏悬停时背景色
      navMenuHoverBackground: ["#E5EAF3", "#18222c"],
      // 顶栏文字色/图标
      navMenuTabColor: ["#F56C6C", "#CFD3DC"],
      // 顶栏激活项背景色
      navMenuTabActiveBackground: ["#ffffff", "#1d1e1f"],
      // 顶栏激活项文字色
      navMenuTabActiveColor: ["#000000", "#409EFF"],
    });

    function menuWidth() {
      // 菜单是否折叠
      return layout.menuCollapse ? "64px" : layout.menuWidth + "px";
    }

    function setLayoutColor(
      data: keyof Layout,
      value: string,
      isDark: boolean = false
    ) {
      const index = isDark ? 1 : 0;
      (layout[data] as string[])[index] = value;
    }

    function setMenuCollapse(data: boolean) {
      layout.menuCollapse = data;
    }

    function setLayoutMode(data: "classic" | "vertical") {
      layout.layoutMode = data;
    }

    function getColorVal(name: keyof Layout): string {
      const colors = layout[name] as string[];
      if (layout.isDark) {
        return colors[1];
      } else {
        return colors[0];
      }
    }
    return {
      layout,
      menuWidth,
      setLayoutColor,
      setLayoutMode,
      getColorVal,
      setMenuCollapse,
    };
  },
  {
    // persist: { key: STORE_CONFIG },
    persist: false,
  }
);
