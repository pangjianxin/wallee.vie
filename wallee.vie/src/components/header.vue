<!-- <template>
  <el-header class="layout-header">
    <NavBar> </NavBar>
  </el-header>
</template> -->

<template>
  <div class="welcome suspension">
    <img
      class="welcome-img"
      :src="headerSvg"
      style="width: 62px; height: 62px"
    />
    <div class="welcome-text">
      <div class="welcome-title">
        全国中小企业融资综合信用服务平台内蒙古包头站(包头市信易贷平台)
      </div>
      <div class="welcome-note">
        NATIONAL SME FINANCING COMPREHENSIVE CREDIT SERVICE PLATFORM
      </div>
    </div>
    <div style="flex: auto"></div>
    <div class="welcome-suport">
      <span>
        <el-icon>
          <Phone></Phone>
        </el-icon>
        技术支持/服务电话:5621822、13947208672
      </span>
    </div>
  </div>
  <div class="nav-bar">
    <NavTabs />
    <NavMenus />
  </div>
</template>

<script setup lang="ts">
import useConfig from "/@/store/modules/useConfig";
import NavTabs from "/@/components/navBar/navTabs.vue";
import NavMenus from "/@/components/navBar/navMenus.vue";
import headerSvg from "/@/assets/img/logo.png";
const config = useConfig();
</script>

<style lang="scss" scoped>
.layout-header {
  height: auto;
  padding: 0;
}
.nav-bar {
  display: flex;
  height: 50px;
  margin: 10px var(--ba-main-space) 0 var(--ba-main-space);
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
.welcome {
  // background: #e1eaf9;
  background: #2d63dd;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 15px 20px !important;
  box-shadow: 0 0 30px 0 rgba(82, 63, 105, 0.05);
  margin: 20px var(--ba-main-space) 0 var(--ba-main-space);
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
      font-size: 1.6rem;
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
