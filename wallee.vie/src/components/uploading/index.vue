<template>
  <div class="upload-box">
    <el-upload
      action="#"
      :id="id"
      :class="['upload']"
      :multiple="false"
      :disabled="disabled"
      :show-file-list="false"
      :http-request="handleHttpUpload"
      :before-upload="beforeUpload"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :style="uploadStyle"
      :drag="drag"
      accept="image/jpeg,image/jpeg,image/png"
    >
      <img v-if="fileUrl" :src="fileUrl" class="upload-image" />
      <img v-else :src="defaultUrl" class="upload-image" />
      <!-- <el-icon v-else class="upload-icon"><Plus /></el-icon> -->
      <div v-if="fileUrl" class="upload-handle" @click.stop>
        <div class="handle-icon" @click="editImg" v-if="!disabled">
          <el-icon><Edit /></el-icon>
          <span>编辑</span>
        </div>
        <div class="handle-icon" @click="imageView">
          <el-icon><ZoomIn /></el-icon>
          <span>查看</span>
        </div>
        <div class="handle-icon" @click="deleteImg" v-if="!disabled">
          <el-icon><Delete /></el-icon>
          <span>删除</span>
        </div>
      </div>
    </el-upload>
    <div class="el-upload__tip">
      <slot name="tip"></slot>
    </div>
    <el-image-viewer
      v-if="dialogVisible"
      @close="imageView"
      :url-list="[fileUrl]"
    />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, reactive, computed } from "vue";
import { ElNotification } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import type { UploadProps, UploadRequestOptions } from "element-plus";

import {
  FinancingFileService,
  FinancingFileType,
  FinancingFileDto,
} from "/@/openapi/index";

interface UploadFileProps {
  uploadingFileType: FinancingFileType;
  id?: string; // 组件id ==> 非必传，当页面存在多个上传组件时必传（默认为upload）
  drag?: boolean; // 是否支持拖拽上传 ==> 非必传（默认为true）
  disabled?: boolean; // 是否禁用上传组件 ==> 非必传（默认为false）
  fileSize?: number; // 单个文件大小限制 ==> 非必传（默认为 5M）
  uploadStyle?: { [key: string]: any }; // 上传组件样式 ==> 非必传,
  defaultUrl: string;
}
// 接受父组件参数
const props = withDefaults(defineProps<UploadFileProps>(), {
  id: "upload",
  uploadingFileType: FinancingFileType._1,
  drag: true,
  disabled: false,
  fileSize: 5,
  uploadStyle: () => ({ width: "175px", height: "175px" }),
});

let fileUrl = computed(() => {
  if (fileUploadResult.value.fileName) {
    return `${
      import.meta.env["VITE_API_URL"]
    }/api/app/financing-file/download?fileName=${
      fileUploadResult.value.fileName
    }`;
  }
  return null;
});
let fileUploadResult = ref<FinancingFileDto>({});

/**
 * @description 图片上传
 * @param options 上传的文件
 * */
interface UploadEmits {
  (e: "update:file", value: FinancingFileDto): void;
  (e: "check-validate"): void;
}

const emit = defineEmits<UploadEmits>();

const handleHttpUpload = async (options: UploadRequestOptions) => {
  try {
    const result = await FinancingFileService.financingFileCreate(
      props.uploadingFileType,
      { File: options.file }
    );
    fileUploadResult.value = result;
    emit("update:file", result);
    emit("check-validate");
  } catch (error) {
    options.onError(error as any);
  }
};

/**
 * @description 删除图片,同样触发update:file事件，更新一个空数据
 * */
const deleteImg = async () => {
  await FinancingFileService.financingFileDelete(
    fileUploadResult.value.id as string
  );
  fileUploadResult.value = {};

  emit("update:file", fileUploadResult.value);
};

/**
 * @description 编辑图片
 * */
const editImg = () => {
  const dom = document.querySelector(`#${props.id} .el-upload__input`);
  dom!.dispatchEvent(new MouseEvent("click"));
};

/**
 * @description 文件上传之前判断
 * @param rawFile 上传的文件
 * */
const beforeUpload: UploadProps["beforeUpload"] = (rawFile) => {
  const imgSize = rawFile.size / 1024 / 1024 < props.fileSize;
  const imgType = ["image/jpg", "image/jpeg", "image/png"];
  if (!imgType.includes(rawFile.type))
    ElNotification({
      title: "温馨提示",
      message: "上传图片必须是 JPG/JPEG/PNG 格式！",
      type: "warning",
    });
  if (!imgSize)
    ElNotification({
      title: "温馨提示",
      message: `上传图片大小不能超过 ${props.fileSize}MB！`,
      type: "warning",
    });
  return imgType.includes(rawFile.type) && imgSize;
};

// 图片上传成功提示
const uploadSuccess = () => {
  ElNotification({
    title: "系统提示",
    message: "上传成功！",
    type: "success",
  });
};

// 图片上传错误提示
const uploadError = () => {
  ElNotification({
    title: "系统提示",
    message: "图片上传失败，请您重新上传！",
    type: "error",
  });
};

// 查看图片
const dialogVisible = ref(false);
const imageView = () => {
  dialogVisible.value = !dialogVisible.value;
};
</script>
<script lang="ts">
export default defineComponent({
  name: "uploadImg",
});
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>
