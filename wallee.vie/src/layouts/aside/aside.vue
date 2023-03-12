<template>
  <el-aside :class="'layout-aside-' + theme.layout.layoutMode">
    <Logo />
    <MenuVertical />
  </el-aside>
</template>

<script setup lang="ts">
import Logo from "./logo.vue";
import MenuVertical from "./menuVertical.vue";
import useThemeStore from "/@/store/modules/useThemeStore";

const theme = useThemeStore();
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "layout-aside",
});
</script>

<style scoped lang="scss">
.layout-aside-classic {
  background: var(--ba-bg-color-overlay);
  margin: var(--ba-main-space) 0 var(--ba-main-space) var(--ba-main-space);
  height: calc(100vh - 32px);
  box-shadow: var(--el-box-shadow-light);
  border-radius: var(--el-border-radius-base);
  overflow: hidden;
  transition: width 0.3s ease;
  width: v-bind("theme.menuWidth()");
}
.layout-aside-vertical {
  background: var(--ba-bg-color-overlay);
  margin: var(--ba-main-space) 0 var(--ba-main-space) var(--ba-main-space);
  height: 100vh;
  overflow: hidden;
  transition: width 0.3s ease;
  width: v-bind("theme.menuWidth()");
}
</style>
