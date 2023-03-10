<template>
  <div>
    <component :is="viewComponent" :key="route.path"></component>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import useConfig from "/@/store/modules/useConfig";
import layoutVertical from "./layoutVertical.vue";
import layoutClassic from "./layoutClassic.vue";
const route = useRoute();
const config = useConfig();
let viewComponent = computed(() => {
  return config.layout.layoutMode === "vertical"
    ? layoutVertical
    : layoutClassic;
});
console.log(config.layout.layoutMode);
</script>

<style scoped></style>
