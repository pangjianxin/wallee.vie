<template>
  <el-scrollbar ref="verticalMenusRef" class="vertical-menus-scrollbar">
    <el-menu
      :default-active="onRoutes"
      :collapse="theme.layout.menuCollapse"
      :collapse-transition="false"
      :unique-opened="theme.layout.menuUniqueOpened"
      router
      class="layouts-menu-vertical"
    >
      <template v-for="item in menus">
        <el-menu-item v-if="!item.children?.length" :index="item.path">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <template #title>
            <span :style="{ color: theme.getColorVal('navMenuTabColor') }">{{
              item.title
            }}</span>
          </template>
        </el-menu-item>
        <el-sub-menu v-else :index="item.title ?? item.path">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span :style="{ color: theme.getColorVal('navMenuTabColor') }">
              {{ item.title }}
            </span>
          </template>
          <tree :items="item.children"></tree>
        </el-sub-menu>
      </template>
    </el-menu>
  </el-scrollbar>
</template>
<script setup lang="ts">
import { computed, reactive, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { MenuItem } from "/#/menu";
import tree from "./tree.vue";
import useThemeStore from "/@/store/modules/useThemeStore";
import type { ElScrollbar } from "element-plus";
import generatedRoutes from "~pages";

const verticalMenusRef = ref<InstanceType<typeof ElScrollbar>>();

const route = useRoute();
const onRoutes = computed(() => {
  return route.path;
});

const theme = useThemeStore();

const menus: MenuItem[] = reactive<MenuItem[]>([]);

watchEffect(() => {
  generatedRoutes
    .filter((it) => it.meta?.visible === true)
    .sort(
      (prev, next) =>
        (prev.meta?.order as number) - (next.meta?.order as number)
    )
    .forEach((item, index) => {
      menus.push({
        icon: item.meta?.icon as string,
        path: item.path,
        title: item.meta?.title as string,
      });
    });
});
const verticalMenusScrollbarHeight = computed(() => {
  let menuTopBarHeight = 50;
  if (theme.layout.layoutMode == "classic") {
    return "calc(100vh - " + (32 + menuTopBarHeight) + "px)";
  } else {
    return "calc(100vh - " + menuTopBarHeight + "px)";
  }
});
</script>

<style>
.vertical-menus-scrollbar {
  height: v-bind(verticalMenusScrollbarHeight);
  background-color: v-bind('theme.getColorVal("menuBackground")');
}
.layouts-menu-vertical {
  border: 0;
  --el-menu-bg-color: v-bind('theme.getColorVal("menuBackground")');
  --el-menu-text-color: v-bind('theme.getColorVal("menuColor")');
  --el-menu-active-color: v-bind('theme.getColorVal("menuActiveColor")');
}
</style>
