<template>
  <el-container class="layout-container">
    <el-header
      style="
        height: 110px;
        position: relative;
        padding: 0;
        margin: 0 16px 0 16px;
      "
    >
      <Header></Header>
    </el-header>
    <el-container>
      <Aside></Aside>
      <el-container>
        <el-main
          style="
            height: 90vh;
            overflow-x: hidden;
            overflow-y: auto;
            margin-bottom: 10px;
          "
        >
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
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import Aside from "/@/layouts/aside/aside.vue";
import useTagStore from "/@/store/modules/useTagsStore";
import Header from "./header.vue";
import { storeToRefs } from "pinia";
import useConfig from "/@/store/modules/useConfig";
import navTabs from "/@/layouts/navBar/navTabs.vue";
import navMenu from "/@/layouts/navBar/navMenus.vue";
const config = useConfig();
const { isEnabled, cachedComponentsName } = storeToRefs(useTagStore());
</script>
<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
}
.nav-bar {
  display: flex;
  height: 50px;
  margin-bottom: 16px;
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
      color: v-bind('config.getColorVal("headerBarTabColor")');
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
        color: v-bind('config.getColorVal("headerBarTabActiveColor")');
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
        'config.getColorVal("headerBarTabActiveBackground")'
      );
      box-shadow: var(--el-box-shadow-light);
      transition: all 0.2s;
      -webkit-transition: all 0.2s;
    }
  }
}
.main-container {
  height: 90vh;
  overflow-x: hidden;
  overflow-y: auto;
  margin-bottom: 10px;
}
</style>
