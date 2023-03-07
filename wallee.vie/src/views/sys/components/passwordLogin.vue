<template>
  <el-form
    ref="formRef"
    :model="passwordLoginForm"
    :rules="passwordLoginFormRules"
  >
    <el-form-item prop="username">
      <el-input
        type="text"
        clearable
        v-model="passwordLoginForm.username"
        :placeholder="'请输入用户名'"
        prefix-icon="Phone"
      >
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="passwordLoginForm.password"
        type="password"
        :placeholder="'请输入密码'"
        show-password
        clearable
        prefix-icon="Lock"
        @keydown.enter="passwordLoginF"
      >
      </el-input>
    </el-form-item>
    <el-row>
      <el-form-item style="width: 100%">
        <el-button
          round
          :loading="formSubmitting"
          style="width: 100%"
          class="submit-button"
          type="primary"
          size="default"
          @click="passwordLoginF"
        >
          登录
        </el-button>
      </el-form-item>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useLogin } from "/@/hooks/useLogin";
import { FormInstance, ElNotification } from "element-plus";
import useOidcStore from "/@/store/modules/useOidcStore";
import useAppConfigStore from "/@/store/modules/useApplicationConfigStore";
import { useRouter } from "vue-router";

const { storeTokenInfo, storeUserInfo } = useOidcStore();
const appCofigStore = useAppConfigStore();
const router = useRouter();
let formSubmitting = ref(false);
const {
  passwordLoginForm,
  passwordLoginFormRules,
  passwordLogin,
  getUserInfo,
} = useLogin();
let formRef = ref<FormInstance>();

function passwordLoginF() {
  formRef.value?.validate(async (valid, errorFields) => {
    if (!valid) {
      ElNotification({
        type: "error",
        title: "提示",
        message: "请检查用户名或密码是否填写完整",
      });
      return;
    } else {
      try {
        formSubmitting.value = true;
        let tokenRes = await passwordLogin(passwordLoginForm);
        storeTokenInfo(tokenRes);
        let userRes = await getUserInfo();
        storeUserInfo(userRes);
        await appCofigStore.initConfig();
        await router.push("/");
      } finally {
        formSubmitting.value = false;
      }
    }
  });
}
</script>

<style scoped></style>
