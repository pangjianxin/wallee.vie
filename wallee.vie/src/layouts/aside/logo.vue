<template>
  <div class="layout-logo">
    <el-image
      v-if="!theme.layout.menuCollapse"
      class="logo-img"
      :src="logo"
      alt="logo"
    >
    </el-image>
    <div
      v-if="!theme.layout.menuCollapse"
      :style="{ color: theme.getColorVal('baseTextColor') }"
      class="website-name"
    >
      {{ appName }}
    </div>
    <el-icon
      @click="onMenuCollapse"
      :class="theme.layout.menuCollapse ? 'unfold' : 'fold'"
      :color="theme.getColorVal('baseTextColor')"
      :size="25"
    >
      <Expand v-if="theme.layout.menuCollapse" />
      <Fold v-else />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import useThemeStore from "/@/store/modules/useThemeStore";
import { Expand, Fold } from "@element-plus/icons-vue";
import logo from "/@/assets/img/logo.png";
const appName = import.meta.env["VITE_APP_NAME"];
const theme = useThemeStore();

const onMenuCollapse = function () {
  theme.setMenuCollapse(!theme.layout.menuCollapse);
};
</script>

<style scoped lang="scss">
.layout-logo {
  width: 100%;
  height: 4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
  background: v-bind('theme.getColorVal("baseBackground")');
}
.logo-img {
  width: 28px;
}
.website-name {
  display: block;
  width: 180px;
  padding-left: 4px;
  font-size: var(--el-font-size-medium);
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fold {
  margin-left: auto;
}
.unfold {
  margin: 0 auto;
}
</style>
