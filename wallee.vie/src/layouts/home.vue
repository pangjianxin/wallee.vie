<template>
  <el-container class="layout-container">
    <Aside></Aside>
    <el-container class="content-wrapper">
      <Header></Header>
      <el-main>
        <router-view>
          <template #default="{ Component, route }">
            <transition name="move" mode="out-in">
              <keep-alive v-if="isEnabled" :include="cachedComponentsName">
                <component :is="Component" :key="route.path"></component>
              </keep-alive>
              <component v-else :is="Component" :key="route.path"> </component>
            </transition>
          </template>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import Aside from "../components/aside/aside.vue";
import useTagStore from "/@/store/modules/useTagsStore";
import Header from "../components/header.vue";
import { storeToRefs } from "pinia";
import PageHeader from "/@/components/pageHeader.vue";
const { isEnabled, cachedComponentsName } = storeToRefs(useTagStore());
</script>
<style scoped>
.layout-container {
  height: 100%;
  width: 100%;
}
.content-wrapper {
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
