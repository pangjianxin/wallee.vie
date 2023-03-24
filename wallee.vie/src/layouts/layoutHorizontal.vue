<template>
  <el-container>
    <el-header class="ba-el-header">
      <layoutHeader></layoutHeader>
    </el-header>
    <el-main class="ba-el-main">
      <el-row justify="center">
        <el-col :lg="16" :sm="24">
          <div class="nav-bar">
            <navTabs />
            <navMenu />
          </div>
          <router-view>
            <template #default="{ Component, route }">
              <transition name="move" mode="out-in">
                <keep-alive v-if="isEnabled" :include="cachedComponentsName">
                  <component :is="Component" :key="route.path"></component>
                </keep-alive>
                <component v-else :is="Component" :key="route.path">
                </component>
              </transition>
            </template>
          </router-view>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
import layoutAside from "/@/layouts/aside/aside.vue";
import useTagStore from "/@/store/modules/useTagsStore";
import layoutHeader from "./header.vue";
import { storeToRefs } from "pinia";
import useThemeStore from "/@/store/modules/useThemeStore";
import navTabs from "/@/layouts/navBar/navTabs.vue";
import navMenu from "/@/layouts/navBar/navMenus.vue";
const theme = useThemeStore();
const { isEnabled, cachedComponentsName } = storeToRefs(useTagStore());
</script>
<style scoped lang="scss">
.nav-bar {
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: var(--ba-main-space);
  :deep(.nav-tabs) {
    display: flex;
    height: 100%;
    position: relative;
    .ba-nav-tab {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      cursor: pointer;
      z-index: 1;
      user-select: none;
      opacity: 0.7;
      color: v-bind('theme.getColorVal("navMenuTabColor")');
      .close-icon {
        padding: 2px;
        margin: 2px 0 0 4px;
      }
      .close-icon:hover {
        background: var(--ba-color-primary-light);
        color: var(--el-border-color) !important;
        border-radius: 50%;
      }
      &.active {
        color: v-bind('theme.getColorVal("navMenuTabActiveColor")');
      }
      &:hover {
        opacity: 1;
      }
    }
    .nav-tabs-active-box {
      position: absolute;
      height: 40px;
      border-radius: var(--el-border-radius-base);
      background-color: v-bind(
        'theme.getColorVal("navMenuTabActiveBackground")'
      );
      box-shadow: var(--el-box-shadow-light);
      transition: all 0.2s;
      -webkit-transition: all 0.2s;
    }
  }
}
.ba-el-header {
  height: v-bind("theme.elHeaderHeight") !important;
  padding: 0 var(--ba-main-space) !important;
}
.ba-el-main {
  height: v-bind("theme.elMainHeight") !important;
  padding: var(--ba-main-space) var(--ba-main-space) !important;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
