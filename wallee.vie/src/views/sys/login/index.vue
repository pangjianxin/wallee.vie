<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div class="login-left">
        <img :src="bg" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" :src="logo" alt="" />
          <h2 class="logo-text">{{ appLiteName }}</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import LoginForm from "/@/views/sys/login/components/passwordLogin.vue";
import bg from "/@/assets/img/login_left.png";
import logo from "/@/assets/img/logo.png";
import { onMounted } from "vue";
import useoidcStore from "/@/store/modules/useoidcStore";
const appLiteName = import.meta.env["VITE_APP_LITE_NAME"];
const { clearState } = useoidcStore();
onMounted(async () => {
  clearState();
});
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
<route lang="yaml">
name: loginF
meta:
  visible: false
  layout: default
</route>
