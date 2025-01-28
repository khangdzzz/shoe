<script setup lang="ts">
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-vue-next';
import { ja } from 'date-fns/locale';
import { getMonth } from 'date-fns';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
interface DatePicker {
  year: number;
  month: number;
}

defineProps<{
  title?: string;
}>();

const emit = defineEmits(['update:selectedDate']);

const getCurrentMonthAndYear = (): DatePicker => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return { year, month };
};

const yearSelected = ref(getCurrentMonthAndYear().year);
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
  yearSelected.value = date.value.year;
  updateDateLabel();
});

const isNextDisabled = computed(() => {
  const today = new Date();
  return (
    currentDate.value.year > today.getFullYear() ||
    (currentDate.value.year === today.getFullYear() && currentDate.value.month >= today.getMonth() + 1)
  );
});

const filters = computed(() => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  if (yearSelected.value === currentYear) {
    return {
      months: Array.from({ length: 12 }, (_, index) => {
        const date = new Date(currentYear, index);
        return index > currentMonth ? getMonth(date) : null;
      }).filter(Boolean) as number[]
    };
  }

  return {
    months: yearSelected.value > currentYear ? Array.from({ length: 12 }, (_, index) => index) : []
  };
});
</script>

<template>
  <div class="date-search flex items-center gap-3">
    <span class="label font-medium">{{ title }}</span>
    <div class="flex items-center gap-2">
      <button
        class="flex items-center gap-1 bg-gray-300 text-gray-700 pl-2 pr-3 py-[5px] rounded-md hover:bg-gray-400"
        @click="adjustMonth(-1)"
      >
        <ChevronLeft class="w-4 h-4" />
        前月
      </button>

      <VueDatePicker
        v-model="date"
        month-picker
        auto-apply
        :format-locale="ja"
        format="E"
        :filters="filters"
        @update-month-year="(payload: any) => (yearSelected = payload.year)"
      >
        <template #trigger>
          <div class="h-[30px] flex items-center justify-between px-4 bg-white rounded cursor-pointer">
            <span>{{ targetYearMonth }}</span>
            <ChevronDown class="w-4 h-4" />
          </div>
        </template>
      </VueDatePicker>

      <button
        class="flex items-center gap-1 bg-gray-300 text-gray-700 pl-3 pr-2 py-[5px] rounded-md"
        :class="{ 'opacity-50': isNextDisabled, 'hover:bg-gray-400': !isNextDisabled }"
        @click="adjustMonth(1)"
        :disabled="isNextDisabled"
      >
        翌月
        <ChevronRight class="w-4 h-4" />
      </button>
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
