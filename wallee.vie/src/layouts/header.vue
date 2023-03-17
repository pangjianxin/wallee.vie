<template>
  <div class="welcome">
    <el-image class="welcome-img" :src="logo"> </el-image>
    <div class="welcome-text">
      <div class="welcome-title sle">
        {{ appName }}
      </div>
      <div class="welcome-note sle">
        {{ appEngName }}
      </div>
    </div>
    <div style="flex: auto"></div>
    <div class="welcome-suport sle">
      <span>
        <el-icon>
          <Phone></Phone>
        </el-icon>
        技术支持/服务电话:{{ contactInfo }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import useThemeStore from "/@/store/modules/useThemeStore";
import logo from "/@/assets/img/logo.png";
import { computed } from "vue";
const appName = import.meta.env["VITE_APP_NAME"];
const appEngName = import.meta.env["VITE_APP_ENG_NAME"];
const contactInfo = import.meta.env["VITE_CONTACT_INFO"];
const theme = useThemeStore();

//TODO:can we use the variable in /@/styles/ver.scss instead of constant?
let margin = computed(() =>
  theme.layout.layoutMode == "vertical" ? "1vmin" : "0vmin"
);
</script>

<style lang="scss" scoped>
.welcome {
  background: v-bind('theme.getColorVal("baseBackground")');
  border-radius: 0.5vmin;
  display: flex;
  align-items: center;
  padding: var(--ba-main-space) var(--ba-main-space);
  margin-top: var(--ba-main-space);
  margin-bottom: 0;

  .welcome-img {
    height: 6vh;
    margin-right: 2vmin;
    user-select: none;
  }
  .welcome-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .welcome-title {
      font-size: 2rem;
      font-weight: 600;
      line-height: 30px;
      color: v-bind('theme.getColorVal("baseTextColor")');
    }
    .welcome-note {
      padding-top: 6px;
      font-size: 1.25rem;
      font-weight: 600;
      color: v-bind('theme.getColorVal("baseTextColor")');
      // color: var(--el-text-color-primary);
    }
  }
  .welcome-suport {
    font-size: 14px;
    font-weight: 400;
    color: v-bind('theme.getColorVal("baseTextColor")');
    justify-self: end;
    align-self: end;
  }
}
</style>
