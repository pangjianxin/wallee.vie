<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import useOidcStore from "/@/store/modules/useOidcStore";
import useApplicationConfigStore from "/@/store/modules/useApplicationConfigStore";
const router = useRouter();

const oidcStore = useOidcStore();
const appConfigStore = useApplicationConfigStore();

onMounted(() => {});
</script>

<template>
  <div></div>
</template>

<style lang="less" scoped></style>
<route>
  {
    meta:{
      visible:false
    }
  }
</route>
