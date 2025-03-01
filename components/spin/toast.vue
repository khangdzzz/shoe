<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  message: String,
  type: {
    type: String,
    default: "info",
  },
  isVisible: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 3000, // 3 seconds
  }
});

const visible = ref(props.isVisible);
let timer = null;

watch(
  () => props.isVisible,
  (newValue) => {
    visible.value = newValue;
})
</script>

<template>
  <div v-if="visible" :class="['toast', type]" @mouseenter="pauseTimer" @mouseleave="resumeTimer">
    <span class="message">{{ message }}</span>
  </div>
</template>
<style scoped>
.toast {
  position: fixed;
  top: 115px;
  right: 0;
  padding: 12px 20px;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-in-out;
  z-index: 9999;
}

.message {
    font-size: 16px;
}

.success { background: #28a745; }
.error { background: #dc3545; }
.warning { background: #ffc107; color: #333; }
.info { background: #17a2b8; }



.close-btn {
  background: transparent;
  border: none;
  font-size: 18px;
  margin-left: 10px;
  color: white;
  cursor: pointer;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
