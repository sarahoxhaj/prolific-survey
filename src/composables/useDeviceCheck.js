// useDeviceCheck.js
import { ref, onMounted, onUnmounted } from "vue";

export function useDeviceCheck() {
  const isLaptop = ref(true);

  const checkDevice = () => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 1024;

    // If it's a touch device AND small screen, treat it as mobile/tablet
    isLaptop.value = !(isTouch && isSmallScreen);
  };

  onMounted(() => {
    checkDevice();
    window.addEventListener("resize", checkDevice);
  });

  onUnmounted(() => window.removeEventListener("resize", checkDevice));

  return { isLaptop };
}
