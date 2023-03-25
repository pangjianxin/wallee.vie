<template>
  <div class="nav-tabs">
    <div
      v-for="(item, idx) in items"
      @click="onNavgationTo(item.path)"
      class="ba-nav-tab"
      :class="tabClass(item.path)"
      :ref="tabsRefs.set"
      :key="idx"
    >
      {{ item.title }}
      <el-icon
        v-show="items.length > 1"
        class="close-icon"
        @click.stop="onTabClose(idx)"
        size="15"
      >
        <Close></Close>
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import useTagsStore from "/@/store/modules/useTagsStore";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import useThemeStore from "/@/store/modules/useThemeStore";
import { reactive, ref } from "vue";
import { Close } from "@element-plus/icons-vue";
import { useTemplateRefsList } from "@vueuse/core";
import { router } from "/@/router";

const theme = useThemeStore();
const tagsStore = useTagsStore();
let route = useRoute();

let { items } = storeToRefs(tagsStore);

const tabsRefs = useTemplateRefsList<HTMLDivElement>();

function onNavgationTo(path: string) {
  router.push(path);
}

function onTabClose(index: number) {
  tagsStore.deleteItem(index);
}

function tabClass(value: string): string {
  return value === route.path ? "active" : "";
}

function onBack() {
  router.back();
}
</script>

<style scoped lang="scss">
.nav-tabs {
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  margin-right: var(--ba-main-space);
  scrollbar-width: none;
  background: v-bind('theme.getColorVal("navMenuBackground")');
  border-bottom: solid v-bind('theme.getColorVal("baseBackground")');

  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #eaeaea;
    border-radius: var(--el-border-radius-base);
    box-shadow: none;
    -webkit-box-shadow: none;
  }
  &::-webkit-scrollbar-track {
    background: v-bind(
      'theme.layout.layoutMode == "vertical" ? "none":theme.getColorVal("navMenuBackground")'
    );
  }
  &:hover {
    &::-webkit-scrollbar-thumb:hover {
      background: #c8c9cc;
    }
  }
}
.ba-nav-tab {
  white-space: nowrap;
  height: 40px;
}
.active {
  background: v-bind('theme.getColorVal("navMenuTabActiveBackground")');
  color: v-bind('theme.getColorVal("navMenuTabActiveColor")');
  box-shadow: var(--el-box-shadow-light);
}
</style>
