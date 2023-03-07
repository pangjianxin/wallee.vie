<template>
  <el-scrollbar ref="verticalMenusRef" class="vertical-menus-scrollbar">
    <el-menu
      :default-active="onRoutes"
      :collapse="config.layout.menuCollapse"
      :collapse-transition="false"
      :unique-opened="config.layout.menuUniqueOpened"
      router
      class="layouts-menu-vertical"
    >
      <template v-for="item in menus">
        <el-menu-item v-if="!item.children?.length" :index="item.path">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <template #title>
            <span>{{ item.title }}</span>
          </template>
        </el-menu-item>
        <el-sub-menu v-else :index="item.title ?? item.path">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.title }}</span>
          </template>
          <tree :items="item.children"></tree>
        </el-sub-menu>
      </template>
    </el-menu>
  </el-scrollbar>
</template>
<script setup lang="ts">
import useAppConfigStore from "/@/store/modules/useApplicationConfigStore";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

import { computed, onMounted, reactive, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { MenuItem } from "/#/menu";
import tree from "./tree.vue";
import useConfig from "/@/store/modules/useConfig";
import type { ElScrollbar } from "element-plus";
import generatedRoutes from "~pages";

const { isAuthenticated } = storeToRefs(useAppConfigStore());
const router = useRouter();

const verticalMenusRef = ref<InstanceType<typeof ElScrollbar>>();

const route = useRoute();
const onRoutes = computed(() => {
  return route.path;
});

const config = useConfig();

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
  let menuTopBarHeight = 0;
  if (config.layout.menuShowTopBar) {
    menuTopBarHeight = 50;
  }
  if (config.layout.layoutMode == "Default") {
    return "calc(100vh - " + (32 + menuTopBarHeight) + "px)";
  } else {
    return "calc(100vh - " + menuTopBarHeight + "px)";
  }
});
</script>

<style>
.vertical-menus-scrollbar {
  height: v-bind(verticalMenusScrollbarHeight);
  background-color: v-bind('config.getColorVal("menuBackground")');
}
.layouts-menu-vertical {
  border: 0;
  --el-menu-bg-color: v-bind('config.getColorVal("menuBackground")');
  --el-menu-text-color: v-bind('config.getColorVal("menuColor")');
  --el-menu-active-color: v-bind('config.getColorVal("menuActiveColor")');
}
</style>
