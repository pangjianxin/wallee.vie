<template>
 
   <!-- 布局切换 -->
   <el-divider class="divider" content-position="center">
      <el-icon><Notification /></el-icon>
      布局切换
    </el-divider>
    <div class="layout-box">
      <el-tooltip
        effect="dark"
        content="纵向"
        placement="top"
        :show-after="200"
      >
        <div
          :class="[
            'layout-item layout-vertical',
            config.$state.layout.layoutMode == 'vertical' ? 'is-active' : '',
          ]"
          @click="changeLayout('vertical')"
        >
          <div class="layout-dark"></div>
          <div class="layout-container">
            <div class="layout-light"></div>
            <div class="layout-content"></div>
          </div>
          <el-icon v-if="config.$state.layout.layoutMode == 'vertical'">
            <CircleCheckFilled />
          </el-icon>
        </div>
      </el-tooltip>
      <el-tooltip
        effect="dark"
        content="经典"
        placement="top"
        :show-after="200"
      >
        <div
          :class="[
            'layout-item layout-classic',
            config.$state.layout.layoutMode == 'classic' ? 'is-active' : '',
          ]"
          @click="changeLayout('classic')"
        >
          <div class="layout-dark"></div>
          <div class="layout-container">
            <div class="layout-light"></div>
            <div class="layout-content"></div>
          </div>
          <el-icon v-if="config.$state.layout.layoutMode == 'classic'">
            <CircleCheckFilled />
          </el-icon>
        </div>
      </el-tooltip>
    </div>
    <br />
</template>

<script setup lang="ts">
import { ref } from "vue";
import useConfig from "/@/store/modules/useConfig";
let drawerVisible = ref(false);
const config = useConfig();

// 切换布局方式
const changeLayout = (val: "vertical" | "classic") => {
  config.setLayoutMode(val);
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
