<script setup lang="ts">
import { ShieldAlert, CircleCheck } from 'lucide-vue-next';

defineProps({
  type: {
    type: String,
    default: 'default'
  },
  classCustom: {
    type: String,
    default: ''
  }
});

const system = useSystemStore();

const notify = computed(() => {
  return system.notify;
});
</script>

<template>
  <div
    class="flex min-h-[18px] text-[#5566da] transition-opacity duration-300"
    :class="{
      invisible: !notify?.message,
      'opacity-0': !notify?.message,
      'opacity-100': notify?.message,
      'text-[#ff4545]': notify?.type === TYPE_MESSAGE.error
    }"
    v-if="type === 'default'"
  >
    {{ notify?.message }}
  </div>
  <div
    v-else
    :class="[
      {
        invisible: !notify?.message,
        'opacity-0': !notify?.message,
        'opacity-100': notify?.message,
        'text-[#ff4545]': notify?.type === TYPE_MESSAGE.error
      },
      classCustom
    ]"
    class="text-[#5566da] flex gap-2 px-3 transition-opacity duration-300 text-[14px]"
  >
    <ShieldAlert
      width="18"
      height="18"
      class="ml-[5px]"
      v-if="notify?.type === TYPE_MESSAGE.error"
    />
    <CircleCheck
      width="20"
      height="20"
      class="ml-[5px]"
      v-else
    />
    {{ notify?.message }}
  </div>
</template>

<style lang="scss" scoped>
.invisible {
  pointer-events: none;
}
</style>
