<script setup lang="ts">
const props = defineProps({
  isOpenNotify: {
    type: Boolean,
    default: false
  },
  htmlMessage: {
    type: String,
    default: ''
  },
  isError: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

watch(
  () => props.isOpenNotify,
  (newValue) => {
    if (newValue) {
      setTimeout(() => {
        emit('close');
      }, 3000);
    }
  }
);
</script>

<template>
  <div
    v-if="isOpenNotify"
    class="absolute w-full h-full bg-[#f7f5f505] flex justify-center items-center z-50"
  >
    <div
      class="bg-[#b5b5b5e6] py-[24px] px-[50px] gap-[8px] rounded-[30px]"
      :class="{ 'bg-[#ead3d3]': isError }"
    >
      <div
        class="flex flex-col items-center"
        v-html="htmlMessage"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
