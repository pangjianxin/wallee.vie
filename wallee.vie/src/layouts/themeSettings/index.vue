<template>
  <!-- 布局切换 -->
  <el-divider class="divider" content-position="center">
    <el-icon><Notification /></el-icon>
    布局切换
  </el-divider>
  <div class="layout-box">
    <el-tooltip effect="dark" content="纵向" placement="top" :show-after="200">
      <div
        :class="[
          'layout-item layout-vertical',
          theme.$state.layout.layoutMode == 'vertical' ? 'is-active' : '',
        ]"
        @click="changeLayout('vertical')"
      >
        <div class="layout-dark"></div>
        <div class="layout-container">
          <div class="layout-light"></div>
          <div class="layout-content"></div>
        </div>
        <el-icon v-if="theme.$state.layout.layoutMode == 'vertical'">
          <CircleCheckFilled />
        </el-icon>
      </div>
    </el-tooltip>
    <el-tooltip effect="dark" content="经典" placement="top" :show-after="200">
      <div
        :class="[
          'layout-item layout-classic',
          theme.$state.layout.layoutMode == 'classic' ? 'is-active' : '',
        ]"
        @click="changeLayout('classic')"
      >
        <div class="layout-dark"></div>
        <div class="layout-container">
          <div class="layout-light"></div>
          <div class="layout-content"></div>
        </div>
        <el-icon v-if="theme.$state.layout.layoutMode == 'classic'">
          <CircleCheckFilled />
        </el-icon>
      </div>
    </el-tooltip>
  </div>
  <el-divider class="divider" content-position="center">
    <el-icon><Picture /></el-icon>
    颜色调整
  </el-divider>
  <el-form>
    <el-form-item label="系统主体颜色">
      <el-color-picker
        model-value="red"
        show-alpha
        :predefine="['#F56C6C', '#409EFF', '#67C23A', '#E6A23C', '#0A0A0A']"
        @update:model-value="
          changeLayoutColor($event as string, 'baseBackground')
        "
      />
    </el-form-item>
    <el-form-item label="系统字体颜色">
      <el-color-picker
        model-value="red"
        show-alpha
        :predefine="['#F56C6C', '#409EFF', '#67C23A', '#E6A23C', '#0A0A0A']"
        @update:model-value="
          changeLayoutColor($event as string, 'baseTextColor')
        "
      />
    </el-form-item>
    <el-form-item label="系统导航图标色">
      <el-color-picker
        model-value="red"
        show-alpha
        :predefine="['#F56C6C', '#409EFF', '#67C23A', '#E6A23C', '#0A0A0A']"
        @update:model-value="
          changeLayoutColor($event as string, 'navMenuTabColor')
        "
      />
    </el-form-item>
    <el-form-item label="系统导航背景色">
      <el-color-picker
        model-value="red"
        show-alpha
        :predefine="['#F56C6C', '#409EFF', '#67C23A', '#E6A23C', '#0A0A0A']"
        @update:model-value="
          changeLayoutColor($event as string, 'navMenuBackground')
        "
      />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Layout } from "/@/store/interfaces";
import useThemeStore from "/@/store/modules/useThemeStore";
const theme = useThemeStore();

// 切换布局方式
const changeLayout = (val: "vertical" | "classic") => {
  theme.setLayoutMode(val);
};

const changeLayoutColor = ($event: string, layoutPartial: keyof Layout) => {
  theme.setLayoutColor(layoutPartial, $event);
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
