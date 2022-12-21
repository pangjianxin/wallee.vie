<template>
  <div class="nav-menus" :class="configStore.layout.layoutMode">
    <div class="nav-menu-item">
      <router-link class="h100 ba-center" :title="'首页'" to="/">
        <el-icon
          :color="configStore.getColorVal('headerBarTabColor')"
          class="nav-menu-icon"
          size="18"
        >
          <Monitor></Monitor>
        </el-icon>
      </router-link>
    </div>
    <div class="nav-menu-item">
      <el-icon
        :color="configStore.getColorVal('headerBarTabColor')"
        class="nav-menu-icon"
        size="18"
      >
        <FullScreen></FullScreen>
      </el-icon>
    </div>
    <div class="nav-menu-item">
      <el-icon
        :color="configStore.getColorVal('headerBarTabColor')"
        class="nav-menu-icon"
        size="18"
      >
        <Notification></Notification>
      </el-icon>
    </div>
    <div class="nav-menu-item">
      <message></message>
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
            {{ isAuthenticated ? currentUser?.userName : "未登录" }}
          </div>
        </div>
      </template>
      <div v-if="isAuthenticated">
        <div class="admin-info-base">
          <el-avatar :size="70" fit="fill">
            <img :src="imgurl" alt="" />
          </el-avatar>
          <div class="admin-info-other">
            <div class="admin-info-name">{{ currentUser?.userName }}</div>
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
  </div>
</template>

<script setup lang="ts">
import useConfig from "/@/store/modules/useConfig";

import useAppConfigStore from "/@/store/modules/useApplicationConfigStore";
import { storeToRefs } from "pinia";
import imgurl from "/@/assets/img/avatar.png";
import {
  Notification,
  House,
  Message,
  FullScreen,
  Monitor,
} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import useOidcStore from "/@/store/modules/useOidcStore";
import dayJs from "dayjs";
import message from "/@/components/navBar/message.vue";

const configStore = useConfig();
const router = useRouter();
const oidcStore = useOidcStore();

const appConfigStore = useAppConfigStore();
const { currentUser, isAuthenticated } = storeToRefs(appConfigStore);

const handleCommand = async (command: string) => {
  if (command === "logout") {
    router.push("/login");
  }
  if (command === "login") {
    router.push("/login");
  }
};
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
  background-color: v-bind('configStore.getColorVal("headerBarBackground")');
  overflow: hidden;
  border-bottom: solid #2d63dd;
  .nav-menu-item {
    height: 100%;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .nav-menu-icon {
      box-sizing: content-box;
      color: v-bind('configStore.getColorVal("headerBarTabColor")');
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
    color: v-bind('configStore.getColorVal("headerBarTabColor")');
    background: white;
  }
  .admin-name {
    padding-left: 6px;
    white-space: nowrap;
  }
  .nav-menu-item:hover,
  .admin-info:hover,
  .nav-menu-item.hover,
  .admin-info.hover {
    background: v-bind('configStore.getColorVal("headerBarHoverBackground")');
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
