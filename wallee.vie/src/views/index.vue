<template>
  <div>
    <el-button icon="User" @click="get"></el-button>
  </div>
</template>

<script setup lang="ts">
import useOidcStore from "/@/store/modules/useOidcStore";
import useAppConfig from "/@/store/modules/useApplicationConfigStore";
const appconfig = useAppConfig();
async function get() {
  console.log("hel");

  await appconfig.initConfig();
  console.log(appconfig.getCurrentUser);
}
</script>
<route>
    {
      meta:{
        title:"首页",
        description:"在线考试系统",
        keepAlive:true,
        componentName:"首页"
      }
    }
  </route>
<style scoped lang="scss">
.welcome {
  background: #e1eaf9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 15px 20px !important;
  box-shadow: 0 0 30px 0 rgba(82, 63, 105, 0.05);
  .welcome-img {
    height: 100px;
    margin-right: 10px;
    user-select: none;
  }
  .welcome-title {
    font-size: 1.5rem;
    line-height: 30px;
    color: var(--ba-color-primary-light);
  }
  .welcome-note {
    padding-top: 6px;
    font-size: 15px;
    color: var(--el-text-color-primary);
  }
}
</style>
