<script lang="ts" setup>
import { ChevronRight, ChevronLeft, ChevronDown } from 'lucide-vue-next';
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  length: {
    type: Number,
    default: 100
  },
  pageSize: {
    type: Number,
    default: 30
  },
  pageIndex: {
    type: Number,
    default: 1
  }
});

const { length, pageSize, pageIndex } = toRefs(props);

const pageSizeValue = ref(pageSize.value.toString());
const currentPageIndex = ref(pageIndex.value);
const paginationSizes = [30, 100, 200];
const isDropdownOpen = ref(false);
const dropdownRef = ref<HTMLDivElement | null>(null);

const emit = defineEmits(['update']);

const totalPages = computed(() => Math.ceil(length.value / parseInt(pageSizeValue.value)));

const fromItem = computed(() => {
  if (length.value === 0) return 0;
  return (currentPageIndex.value - 1) * parseInt(pageSizeValue.value) + 1;
});

const toItem = computed(() => {
  if (length.value === 0) return 0;
  const maxItem = currentPageIndex.value * parseInt(pageSizeValue.value);
  return maxItem > length.value ? length.value : maxItem;
});

const selectPageSize = (size: number) => {
  pageSizeValue.value = size.toString();
  currentPageIndex.value = 1;
  isDropdownOpen.value = false;
  emit('update', { pageIndex: currentPageIndex.value, pageSize: size });
};

const goToPreviousPage = () => {
  if (currentPageIndex.value > 1) {
    currentPageIndex.value--;
    emit('update', { pageIndex: currentPageIndex.value, pageSize: parseInt(pageSizeValue.value) });
  }
};

const goToNextPage = () => {
  if (currentPageIndex.value < totalPages.value) {
    currentPageIndex.value++;
    emit('update', { pageIndex: currentPageIndex.value, pageSize: parseInt(pageSizeValue.value) });
  }
};

const isNextPageDisabled = computed(() => currentPageIndex.value >= totalPages.value || length.value === 0);

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="pagination max-w-[350px]">
    <div class="flex items-center gap-5 justify-between">
      <div class="flex items-center gap-2">
        <span>表示数:</span>

        <div
          class="relative"
          ref="dropdownRef"
        >
          <button
            @click="isDropdownOpen = !isDropdownOpen"
            class="w-[60px] flex justify-between items-center px-2 py-1"
          >
            <span class="text-center">{{ pageSizeValue }}</span>
            <div
              class="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-gray-500 hover:border-t-gray-700"
            ></div>
          </button>

          <div
            v-if="isDropdownOpen"
            class="dropdown-content absolute left-0 mt-1 w-full bg-white shadow-xl z-12"
          >
            <ul>
              <li
                v-for="size in paginationSizes"
                :key="size"
                @click="selectPageSize(size)"
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {{ size }}
              </li>
            </ul>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <span
            v-if="length > 0"
            class="from"
            >{{ fromItem }}</span
          >
          <span v-else>0</span>
          <span v-if="length > 0">-</span>
          <span
            v-if="length > 0"
            class="to"
            >{{ toItem }} 件</span
          >
          <span v-else>件</span>
          <span
            class="total"
            v-if="length > 0"
            >(全{{ length }}件)</span
          >
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="goToPreviousPage"
          :disabled="currentPageIndex === 1 || length === 0"
          class="disabled:opacity-50"
        >
          <ChevronLeft class="w-4 h-4" />
        </button>

        <button
          @click="goToNextPage"
          :disabled="isNextPageDisabled"
          class="disabled:opacity-50"
        >
          <ChevronRight class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .dropdown-content {
    z-index: 12;
  }
}
</style>
