import { useIntervalFn } from "@vueuse/core";
import { ref } from "vue";

export const useBusybox = (seconds: number) => {
  let timer = ref(seconds);
  let waitingWindow = ref(false);

  const { pause, resume } = useIntervalFn(
    () => {
      timer.value--;
      if (timer.value <= 0) {
        waitingWindow.value = false;
        pause();
      }
    },
    1000,
    {
      immediate: false,
    }
  );

  return {
    timer,
    waitingWindow,
    pause,
    resume,
  };
};