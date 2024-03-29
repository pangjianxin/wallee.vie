import { reactive } from "vue";
import { defineStore } from "pinia";
import { STORE_THEME } from "/@/store/consts/cacheKey";
import type { Layout } from "/@/store/interfaces";
import { computed } from "vue";

export default defineStore(
  "appTheme",
  () => {
    const layout: Layout = reactive({
      layoutMode: "classic",
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
      // 侧边菜单宽度(展开时)，单位vmin
      menuWidth: 15,
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
      elHeaderHeight: 10,
      elMainHeight: 89,
      /* 顶栏 */
      // 顶栏背景色
      navMenuBackground: ["#FFFFFF", "#FFFFFF"],
      // 顶栏悬停时背景色
      navMenuHoverBackground: ["#E5EAF3", "#18222c"],
      // 顶栏文字色/图标
      navMenuTabColor: ["#000000", "#CFD3DC"],
      // 顶栏激活项背景色
      navMenuTabActiveBackground: ["#ffffff", "#1d1e1f"],
      // 顶栏激活项文字色
      navMenuTabActiveColor: ["#000000", "#409EFF"],
    });

    let menuWidth = computed(() => {
      // 菜单是否折叠
      return layout.menuCollapse ? "64px" : layout.menuWidth + "vmin";
    });

    let menuHeight = computed(() => {
      switch (layout.layoutMode) {
        case "classic":
          return `${98 - layout.elHeaderHeight}vh`;
        case "vertical":
          return `98vh`;
      }
    });

    let elHeaderHeight = computed(() => {
      return layout.elHeaderHeight + "vh";
    });

    let elMainHeight = computed(() => {
      return layout.elMainHeight + "vh";
    });

    function setLayoutColor(data: keyof Layout, value: string) {
      const index = layout.isDark === true ? 1 : 0;
      (layout[data] as string[])[index] = value;
    }

    function getColorVal(name: keyof Layout): string {
      const colors = layout[name] as string[];
      if (layout.isDark) {
        return colors[1];
      } else {
        return colors[0];
      }
    }

    function setMenuCollapse(data: boolean) {
      layout.menuCollapse = data;
    }

    function setLayoutMode(data: "classic" | "vertical") {
      layout.layoutMode = data;
    }

    return {
      layout,
      menuWidth,
      menuHeight,
      elHeaderHeight,
      elMainHeight,
      setLayoutColor,
      setLayoutMode,
      getColorVal,
      setMenuCollapse,
    };
  },
  {
    persist: {
      key: STORE_THEME,
      //storage: window.sessionStorage,
    },
  }
);
