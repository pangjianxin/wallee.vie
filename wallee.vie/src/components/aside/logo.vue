<template>
  <div class="layout-logo">
    <el-image
      v-if="!config.layout.menuCollapse"
      class="logo-img"
      :src="logo"
      alt="logo"
    ></el-image>
    <div
      v-if="!config.layout.menuCollapse"
      :style="{ color: config.getColorVal('menuActiveColor') }"
      class="website-name"
    >
      {{ appName }}
    </div>
    <el-icon
      v-if="config.layout.layoutMode != 'Streamline'"
      @click="onMenuCollapse"
      :class="config.layout.menuCollapse ? 'unfold' : ''"
      :color="config.getColorVal('menuActiveColor')"
      :size="25"
      class="fold"
    >
      <Expand v-if="config.layout.menuCollapse" />
      <Fold v-else></Fold>
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import useConfig from "/@/store/modules/useConfig";
import { Expand, Fold } from "@element-plus/icons-vue";
import logo from "/@/assets/img/logo.png";
const appName = import.meta.env["VITE_APP_NAME"];
const config = useConfig();

const onMenuCollapse = function () {
  config.setLayout("menuCollapse", !config.layout.menuCollapse);
};
</script>

<style scoped lang="scss">
.layout-logo {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
  background: v-bind(
    'config.layout.layoutMode != "Streamline" ?  config.getColorVal("menuTopBarBackground"):"transparent"'
  );
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
