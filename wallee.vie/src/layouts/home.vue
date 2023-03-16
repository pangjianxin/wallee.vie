<template>
  <div>
    <component :is="viewComponent" :key="route.path"></component>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import useThemeStore from "../store/modules/useThemeStore";
import layoutVertical from "./layoutVertical.vue";
import layoutClassic from "./layoutClassic.vue";
const route = useRoute();
const theme = useThemeStore();
let viewComponent = computed(() => {
  switch (theme.layout.layoutMode) {
    case "classic":
      return layoutClassic;
    case "vertical":
      return layoutVertical;
  }
});
</script>

<style scoped></style>
