<template>
  <div>
    <div class="welcome suspension">
      <el-image
        class="welcome-img"
        :src="logo"
        style="width: 62px; height: 62px"
      ></el-image>
      <div class="welcome-text">
        <div class="welcome-title">
          {{ appName }}
        </div>
        <div class="welcome-note">
          {{ appEngName }}
        </div>
      </div>
      <div style="flex: auto"></div>
      <div class="welcome-suport">
        <span>
          <el-icon>
            <Phone></Phone>
          </el-icon>
          技术支持/服务电话:{{ contactInfo }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useConfig from "/@/store/modules/useConfig";
import logo from "/@/assets/img/logo_bg_w.png";
import { computed } from "vue";
const appName = import.meta.env["VITE_APP_NAME"];
const appEngName = import.meta.env["VITE_APP_ENG_NAME"];
const contactInfo = import.meta.env["VITE_CONTACT_INFO"];
const config = useConfig();
let leftAndRightMargin = computed(() =>
  config.$state.layout.layoutMode == "vertical" ? "16px" : "0px"
);
</script>

<style lang="scss" scoped>
.layout-header {
  height: auto;
  padding: 0;
}
.welcome {
  // background: #e1eaf9;
  background: #2d63dd;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 15px 20px !important;
  box-shadow: 0 0 30px 0 rgba(82, 63, 105, 0.05);
  margin-top: var(--ba-main-space);
  margin-bottom: 0;
  margin-right: v-bind(leftAndRightMargin);
  margin-left: v-bind(leftAndRightMargin);
  // margin-left: var(--ba-main-space);
  // margin-right: var(--ba-main-space);
  .welcome-img {
    height: 100px;
    margin-right: 10px;
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
      // color: var(--ba-color-primary-light);
      color: white;
    }
    .welcome-note {
      padding-top: 6px;
      font-size: 1.25rem;
      font-weight: 600;
      // color: var(--ba-color-primary-light);
      // color: var(--el-text-color-primary);
      color: white;
    }
  }
  .welcome-suport {
    font-size: 14px;
    font-weight: 400;
    color: white;
    justify-self: end;
    align-self: end;
  }
}
</style>
