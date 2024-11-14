<script setup lang="ts">
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-vue-next';
import { ja } from 'date-fns/locale';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
interface DatePicker {
  year: number;
  month: number;
}

const emit = defineEmits(['update:selectedDate']);

const getCurrentMonthAndYear = (): DatePicker => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return { year, month };
};

const currentDate = ref<DatePicker>(getCurrentMonthAndYear());
const targetYearMonth = ref('');

const updateDateLabel = () => {
  const { year, month } = currentDate.value;
  targetYearMonth.value = `${year}/${month.toString().padStart(2, '0')}`;

  emit('update:selectedDate', targetYearMonth.value);
};

const adjustMonth = (delta: number) => {
  let { year, month } = currentDate.value;
  month += delta;

  if (month > 12) {
    month = 1;
    year += 1;
  } else if (month < 1) {
    month = 12;
    year -= 1;
  }

  date.value = { year, month: month - 1 };
};

onMounted(() => {
  updateDateLabel();
});

const date = ref<DatePicker>({
  year: currentDate.value.year,
  month: currentDate.value.month - 1
});

watch(date, () => {
  currentDate.value = { year: date.value.year, month: date.value.month + 1 };
  updateDateLabel();
});
</script>

<template>
  <div class="date-search flex items-center gap-3">
    <div class="flex items-center gap-2">
      <Button
        variant="default"
        class="bg-[#bfbfbf] text-black hover:bg-[#c4b3b3]"
        left-icon="search"
        @click="adjustMonth(-1)"
      >
        <ChevronLeft class="w-4 h-4" />
        前月
      </Button>

      <VueDatePicker
        v-model="date"
        month-picker
        auto-apply
        :format-locale="ja"
        format="E"
      >
        <template #trigger>
          <div
            class="border border-gray-300 h-[30px] flex items-center justify-between px-4 bg-white rounded cursor-pointer"
          >
            <span>{{ targetYearMonth }}</span>
            <ChevronDown class="w-4 h-4" />
          </div>
        </template>
      </VueDatePicker>
    </div>
  </div>
</template>

<style scoped lang="scss">
.date-search {
  :deep(.dp__main.dp__theme_light) {
    height: 30px;
    width: 100px;
    cursor: pointer;
  }
}
</style>
