<script lang="ts" setup>
const props = defineProps<{
  cssStyle?: string;
  type: string;
  selectedStatus: string;
}>();

const { type } = toRefs(props);

const selectedStatus = ref(props.selectedStatus);

const STATUS: { [key: number]: string } = {
  0: '未実行',
  1: '実行予定',
  2: '実行済み',
  3: '実行エラー'
};

const emit = defineEmits<{
  (e: 'filterStatus', payload: { status: string; type: string }): void;
}>();

const STATUS_CREATE_REPORT_PLAN = Object.entries(STATUS).map(([key, value]) => ({
  id: Number(key),
  value: value
}));

watch(
  () => props.selectedStatus,
  (newValue) => {
    selectedStatus.value = newValue;
  }
);

watch(selectedStatus, () => {
  emit('filterStatus', {
    status: selectedStatus.value,
    type: type.value
  });
});
</script>

<template>
  <div :class="cssStyle">
    <Select v-model="selectedStatus">
      <SelectTrigger class="w-full">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="999">すべて</SelectItem>
        <SelectItem
          :value="`${status.id}`"
          v-for="status of STATUS_CREATE_REPORT_PLAN"
        >
          {{ status.value }}
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>

<style lang="scss" scoped></style>
