<route>
    {
      name:"account",
        meta:{
            title:"账户设置",
            icon:"Document",
            visible:true,
            requiredAuth:true,
            keepAlive:true
        }
    }
</route>
<template>
  <el-card>
    <template #header>
      <pageHeader> </pageHeader>
    </template>
    <el-tabs :tab-position="'top'" type="border-card">
      <el-tab-pane label="用户密码">
        <el-form
          :model="passwordForm"
          :rules="passwordRules"
          label-width="120px"
          ref="passwordFormRef"
        >
          <el-form-item prop="currentPassword" label="当前密码">
            <el-input
              v-model="passwordForm.currentPassword"
              type="password"
              :show-password="true"
            ></el-input>
          </el-form-item>
          <el-form-item prop="newPassword" label="新密码">
            <el-input
              v-model="passwordForm.newPassword"
              type="password"
              :show-password="true"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="Send" @click="submitUpdatePassword">
              提交
            </el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="用户信息">
        <el-form
          :model="profileForm"
          ref="formRef"
          :rules="profileRules"
          :label-width="'120px'"
        >
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="profileForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="profileForm.email"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="profileForm.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phoneNumber">
            <el-input v-model="profileForm.phoneNumber"></el-input>
          </el-form-item>
          <el-form-item>
            <el-row justify="end">
              <el-button type="primary" icon="Send" @click="submitUpdateProfile"
                >提交
              </el-button>
            </el-row>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import {
  ProfileService,
  ProfileDto,
  UpdateProfileDto,
  ChangePasswordInput,
} from "/@/openapi/index";
import { FormRules, FormInstance, ElNotification } from "element-plus";
import pageHeader from "/@/components/pageHeader.vue";
let formRef = ref<FormInstance>();
let profileForm: UpdateProfileDto = reactive({
  userName: "",
  email: "",
  name: "",
  phoneNumber: "",
  concurrencyStamp: "",
});

let profileRules: FormRules = reactive({
  userName: [{ required: true, message: "用户名必须填写", trigger: "blur" }],
  email: [{ required: true, message: "邮箱必须填写", trigger: "blur" }],
  name: [{ required: true, message: "用户名称必须填写", trigger: "blur" }],
  phoneNumber: [{ required: true, message: "手机号必须填写", trigger: "blur" }],
});
let passwordFormRef = ref<FormInstance>();

let passwordForm: ChangePasswordInput = reactive({
  currentPassword: "",
  newPassword: "",
});

let passwordRules: FormRules = reactive({
  currentPassword: [
    { required: true, message: "当前密码不能为空", trigger: "blur" },
  ],
  newPassword: [{ required: true, message: "新密码不能为空", trigger: "blur" }],
});

onMounted(async () => {
  var profile = await ProfileService.profileGet();
  profileForm.userName = profile.userName;
  profileForm.email = profile.email;
  profileForm.name = profile.name;
  profileForm.phoneNumber = profile.phoneNumber;
  profileForm.concurrencyStamp = profile.concurrencyStamp;
});
async function submitUpdateProfile() {
  await formRef.value?.validate(async (isValid, errorFields) => {
    if (!isValid) {
      ElNotification({
        type: "error",
        title: "提示",
        message: "请完善表单后提交",
      });
      return;
    } else {
      await ProfileService.profileUpdate(profileForm);
      ElNotification({
        type: "success",
        title: "提示",
        message: "信息修改成功",
      });
    }
  });
}

async function submitUpdatePassword() {
  await passwordFormRef.value?.validate(async (isValid, errorFields) => {
    if (!isValid) {
      ElNotification({
        type: "error",
        title: "提示",
        message: "请确认表单填写完整",
      });
      return;
    } else {
      await ProfileService.profileChangePassword(passwordForm);
      ElNotification({
        type: "success",
        title: "提示",
        message: "修改成功",
      });
    }
  });
}
</script>

<style scoped></style>
