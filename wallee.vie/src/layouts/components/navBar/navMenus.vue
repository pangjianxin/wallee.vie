<template>
  <div class="nav-menus" :class="theme.layout.layoutMode">
    <div class="nav-menu-item">
      <router-link class="h100 flx-center" :title="'首页'" to="/">
        <el-icon class="nav-menu-icon" size="18">
          <Monitor></Monitor>
        </el-icon>
      </router-link>
    </div>
    <div class="nav-menu-item">
      <el-icon class="nav-menu-icon" size="18">
        <FullScreen></FullScreen>
      </el-icon>
    </div>
    <div class="nav-menu-item" @click="openThemeSettingDrawer">
      <el-icon class="nav-menu-icon" size="18">
        <Setting></Setting>
      </el-icon>
    </div>
    <el-popover
      placement="bottom-end"
      :hide-after="0"
      :width="260"
      trigger="hover"
      popper-class="admin-info-box"
    >
      <template #reference>
        <div class="admin-info" :class="'hover'">
          <el-avatar :size="25" fit="fill">
            <img :src="imgurl" alt="" />
          </el-avatar>
          <div class="admin-name">
            {{ isTokenValid ? userInfo.preferred_username : "未登录" }}
          </div>
        </div>
      </template>
      <div v-if="isTokenValid">
        <div class="admin-info-base">
          <el-avatar :size="70" fit="fill">
            <img :src="imgurl" alt="" />
          </el-avatar>
          <div class="admin-info-other">
            <div class="admin-info-name">{{ userInfo.preferred_username }}</div>
            <div class="admin-info-lasttime">
              {{ dayJs(new Date()).format("YYYY/MM/DD HH:MM") }}
            </div>
          </div>
        </div>
        <div class="admin-info-footer">
          <el-button @click="handleCommand('logout')" type="danger" plain>
            注销
          </el-button>
        </div>
      </div>
      <div v-else>
        <div class="admin-info-footer">
          <el-button type="primary" plain>回到首页</el-button>
          <el-button @click="handleCommand('login')" type="danger" plain>
            登录
          </el-button>
        </div>
      </div>
    </el-popover>
    <el-drawer v-model="themeSettingDrawer" title="布局设置" size="300px">
      <themeSetting></themeSetting>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import useThemeStore from "/@/store/modules/useThemeStore";
import imgurl from "/@/assets/img/avatar.png";
import {
  Notification,
  Message,
  FullScreen,
  Monitor,
  Setting,
} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import useOidcStore from "/@/store/modules/useOidcStore";
import dayJs from "dayjs";
import { computed, ref } from "vue";
import themeSetting from "/@/layouts/themeSettings/index.vue";

const theme = useThemeStore();
const router = useRouter();
const { userInfo, isTokenValid } = useOidcStore();
let themeSettingDrawer = ref(false);

const handleCommand = async (command: string) => {
  if (command === "logout") {
    router.push("/login");
  }
  if (command === "login") {
    router.push("/login");
  }
};

const openThemeSettingDrawer = () => {
  themeSettingDrawer.value = true;
};
const headerBarBackground = computed(() => {
  return theme.getColorVal("navMenuBackground");
});
</script>

<style scoped lang="scss">
.nav-menus.Default {
  border-radius: var(--el-border-radius-base);
  box-shadow: var(--el-box-shadow-light);
}
.nav-menus {
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: auto;
  background-color: v-bind('theme.getColorVal("navMenuBackground")');
  overflow: hidden;
  border-bottom: solid v-bind('theme.getColorVal("baseBackground")');
  .nav-menu-item {
    height: 100%;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .nav-menu-icon {
      box-sizing: content-box;
      color: v-bind('theme.getColorVal("navMenuTabColor")');
    }
    &:hover {
      .icon {
        animation: twinkle 0.3s ease-in-out;
      }
    }
  }
  .admin-info {
    display: flex;
    height: 100%;
    padding: 0 10px;
    align-items: center;
    cursor: pointer;
    user-select: none;
    color: v-bind('theme.getColorVal("navMenuTabColor")');
  }
  .admin-name {
    padding-left: 6px;
    white-space: nowrap;
  }
  .nav-menu-item:hover,
  .admin-info:hover,
  .nav-menu-item:hover,
  .admin-info:hover {
    background: v-bind('theme.getColorVal("navMenuHoverBackground")');
  }
}
.dropdown-menu-box :deep(.el-dropdown-menu__item) {
  justify-content: center;
}
.admin-info-base {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 10px;
  .admin-info-other {
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    .admin-info-name {
      font-size: var(--el-font-size-large);
    }
  }
}
.admin-info-footer {
  padding: 10px 0;
  margin: 0 -12px -12px -12px;
  display: flex;
  justify-content: space-around;
}
.pt2 {
  padding-top: 2px;
}

@keyframes twinkle {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
