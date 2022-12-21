<script setup lang="ts">
import { computed, onMounted, unref } from "vue";
import { useRouter } from "vue-router";
import useOidcStore from "/@/store/modules/useOidcStore";

const oidcStore = useOidcStore();
const router = useRouter();

onMounted(async () => {
  router.push("/");
});
</script>

<template>
  <div>
    <h1>OIDC-CALLBACK</h1>
  </div>
</template>

<style lang="less" scoped></style>
<route>
  {
    meta:{
      visible:false
    }
  }
</route>
