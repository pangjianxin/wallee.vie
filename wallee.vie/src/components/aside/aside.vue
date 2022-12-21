<template>
  <el-aside :class="'layout-aside-' + config.layout.layoutMode">
    <Logo v-if="config.layout.menuShowTopBar" />
    <MenuVertical />
  </el-aside>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Logo from "./logo.vue";
import MenuVertical from "./menuVertical.vue";
import useConfig from "/@/store/modules/useConfig";

const config = useConfig();
const menuWidth = computed(() => config.menuWidth());
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "layout/aside",
});
</script>

<style scoped lang="scss">
.layout-aside-Default {
  background: var(--ba-bg-color-overlay);
  margin: 16px 0 16px 16px;
  height: calc(100vh - 32px);
  box-shadow: var(--el-box-shadow-light);
  border-radius: var(--el-border-radius-base);
  overflow: hidden;
  transition: width 0.3s ease;
  width: v-bind(menuWidth);
}
.layout-aside-Classic {
  background: var(--ba-bg-color-overlay);
  margin: 0;
  height: 100vh;
  overflow: hidden;
  transition: width 0.3s ease;
  width: v-bind(menuWidth);
}
</style>
