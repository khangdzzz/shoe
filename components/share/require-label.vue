<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    default: 'right'
  }
});

const isPositionLeft = computed(() => {
  return props.position === 'left';
});
</script>

<template>
  <div
    class="flex items-center"
    :class="{ 'gap-1': isPositionLeft, 'gap-5': !isPositionLeft }"
  >
    <span
      v-if="isPositionLeft"
      class="text-red-500"
      >※</span
    >
    <span
      :class="className"
      class="text-xs"
      >{{ label }} </span
    ><span
      v-if="!isPositionLeft"
      class="text-red-500"
      >※</span
    >
  </div>
</template>
<style lang="scss" scoped></style>
