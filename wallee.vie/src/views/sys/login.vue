<route>
  {
    meta:{
      layout:"default"
    }
  }
</route>
<template>
  <div>
    <div @contextmenu.stop="" id="bubble" class="bubble">
      <canvas id="bubble-canvas" class="bubble-canvas"></canvas>
    </div>
    <div class="login">
      <div class="login-image">
        <el-image :src="loginTitle"></el-image>
      </div>
      <div class="login-box">
        <div class="head">
          <img :src="loginHeader" alt="" />
        </div>
        <div class="form">
          <img class="profile-avatar" :src="avatar" alt="" />
          <div class="content">
            <password-login></password-login>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, onBeforeUnmount, ref } from "vue";
import * as pageBubble from "/@/utils/pageBubble";
import loginTitle from "/@/assets/img/login_title.png";
import loginHeader from "/@/assets/img/login-header.png";
import avatar from "/@/assets/img/avatar.png";
import { useRouter } from "vue-router";
import passwordLogin from "/@/views/sys/components/passwordLogin.vue";

const router = useRouter();
var bubbleTimer: NodeJS.Timer;

onMounted(async () => {
  bubbleTimer = setTimeout(() => {
    pageBubble.init();
  }, 1000);
});

onBeforeUnmount(() => {
  clearTimeout(bubbleTimer);
  pageBubble.removeListeners();
});
</script>

<style scoped lang="scss">
.bubble {
  background: url(/@/assets/img/bg.jpg) no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
}
.form-item-icon {
  height: auto;
}

.login {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: start;
  .login-image {
    margin-top: 20px;
    margin-left: 20px;
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
  .login-box {
    overflow: auto;
    width: 480px;
    padding: 0;
    background: var(--ba-bg-color-overlay);
    margin-top: 60px;
  }
  .head {
    background: #ccccff;
    img {
      display: block;
      width: 430px;
      margin: 0 auto;
      user-select: none;
    }
  }
  .form {
    position: relative;
    .profile-avatar {
      display: block;
      position: absolute;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      border: 4px solid var(--ba-bg-color-overlay);
      top: -50px;
      right: calc(50% - 50px);
      z-index: 2;
      user-select: none;
    }
    .content {
      padding: 100px 40px 40px 40px;
    }
    .submit-button {
      width: 100%;
      letter-spacing: 2px;
      font-weight: 300;
      margin-top: 15px;
      // --el-button-bg-color: var(--el-color-primary);
    }
  }
}

@media screen and (max-width: 720px) {
  .login {
    display: flex;
    align-items: center;
    justify-content: center;
    .login-box {
      width: 340px;
      margin-top: 0;
    }
  }
}
.content :deep(.el-input__prefix) {
  display: flex;
  align-items: center;
}
.captcha-img {
  width: 100%;
}

// 暗黑样式
@at-root .dark {
  .bubble {
    background: url(/@/assets/img/bg.jpg) repeat;
  }
  .login {
    .login-box {
      background: #161b22;
    }
    .head {
      img {
        filter: brightness(61%);
      }
    }
    .form {
      .submit-button {
        --el-button-bg-color: var(--el-color-primary-light-5);
        --el-button-border-color: rgba(240, 252, 241, 0.1);
      }
    }
  }
  .captcha-img {
    filter: brightness(61%);
  }
}
</style>
