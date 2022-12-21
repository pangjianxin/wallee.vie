<route>
    {
        meta:{
            layout:404
        }
    }
</route>
<template>
  <el-empty>
    <template #image>
      <el-image :src="empty"></el-image>
    </template>
    <template #description>不存在该页面</template>
    <template #default>
      <el-button type="danger" icon="link" @click="backToHome">
        返回首页
      </el-button>
    </template>
  </el-empty>
</template>

<script setup lang="ts">
import empty from "/@/assets/img/empty.png";
import { useRouter } from "vue-router";
const router = useRouter();

function backToHome() {
  router.push("/");
}
</script>

<style scoped></style>
