<script setup lang="ts">
const system = useSystemStore();

const errors = computed(() => {
  return system.errors;
});
</script>

<template>
  <div
    class="flex min-h-[18px]"
    :class="{ invisible: !errors?.message, 'text-red-500': errors?.type === TYPE_MESSAGE.error }"
  >
    {{ errors?.message }}
  </div>
</template>
<style lang="scss" scoped></style>
