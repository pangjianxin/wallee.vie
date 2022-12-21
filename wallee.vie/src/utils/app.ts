import { ElMessage } from "element-plus";

export function showError(message?: string) {
  ElMessage({
    message: message ?? "表单有错误，请根据提示进行修改",
    type: "error",
    showClose: true,
  });
}

export function getEnumDesc<T extends { [key: string]: any }>(
  mode: string,
  t: T
): string {
  let modes = mode.split(",");
  let mapResult = modes.map((it) => t[Number(it)]);
  return mapResult.join(",");
}

// 封装一个数字枚举转数组方法
export function enum2arr(valueEnum: any[] | Record<string, any>) {
  let values = Array.isArray(valueEnum) ? valueEnum : Object.values(valueEnum);
  // 如果 enum 值为 number 类型，ts 生成的 js 对象会同时包含枚举的名称，针对该情形需提出枚举名称
  const hasNum = values.some((v) => typeof v === "number");
  if (hasNum) {
    values = values.filter((v) => typeof v === "number");
  }
  return values;
}
