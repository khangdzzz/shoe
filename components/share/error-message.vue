<script setup lang="ts">
const system = useSystemStore();

const notify = computed(() => {
  return system.notify;
});
</script>

<template>
  <div
    class="flex min-h-[18px] text-[#5566da]"
    :class="{ invisible: !notify?.message, 'text-[#ff4545]': notify?.type === TYPE_MESSAGE.error }"
  >
    {{ notify?.message }}
  </div>
</template>
<style lang="scss" scoped></style>
