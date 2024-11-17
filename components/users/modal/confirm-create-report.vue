<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next';
import type { CompanyUserStatus } from '~/models/company';

const props = defineProps({
  users: {
    type: Array as () => CompanyUserStatus[],
    default: () => []
  },
  isOpen: {
    type: Boolean,
    default: false
  }
});

const isOpenDialog = ref(props.isOpen);

watch(
  () => props.isOpen,
  (newVal) => {
    isOpenDialog.value = newVal;
  }
);

const isLoading = ref(false);

const emit = defineEmits<{ (e: 'close'): void; (e: 'export'): void }>();

const handleClose = () => {
  emit('close');
};

const exportReport = () => {
  isLoading.value = true;
  emit('export');

  setTimeout(() => {
    isLoading.value = false;
    emit('close');
  }, 1000);
};
</script>

<template>
  <AlertDialog v-model:open="isOpenDialog">
    <AlertDialogContent>
      <AlertDialogHeader class="flex flex-col gap-4 items-center">
        <AlertDialogTitle class="text-sm">実行の確認</AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogDescription>
        <span>以下を実行します、よろしいですか？</span>
      </AlertDialogDescription>

      <div class="table-container overflow-auto border-b">
        <table class="w-full table-fixed">
          <thead class="bg-[#adadad] sticky top-0 z-10">
            <tr class="border border-[#adadad]">
              <th class="py-3 w-[50%]">
                <span class="flex items-center justify-center px-4 text-black border-white border-r-2">利用者</span>
              </th>
              <th class="py-3 w-[25%]">
                <span class="flex items-center justify-center px-4 text-black border-white border-r-2">報告書</span>
              </th>
              <th class="py-3 w-[25%]">
                <span class="flex items-center justify-center px-4 text-black">計画書</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, index) in users"
              :key="index"
              class="h-10 hover:cursor-pointer hover:bg-[#cfcfcf47] border border-gray-300"
            >
              <td>
                <span class="pl-5">{{ row.nameKanji }}</span>
              </td>
              <td :class="row.reportStatus === 99 ? 'visible' : 'invisible'">
                <span class="text-center flex justify-center bg-[#ccc] py-[8px] mx-[5px] rounded">実行</span>
              </td>
              <td :class="row.planStatus === 99 ? 'visible' : 'invisible'">
                <span class="text-center flex justify-center bg-[#ccc] py-[8px] mx-[5px] rounded">実行</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <AlertDialogFooter class="flex !flex-col gap-4">
        <AlertDialogAction
          class="flex self-center min-w-[120px]"
          @click="exportReport"
          ><LoaderCircle
            v-if="isLoading"
            class="w-4 h-4 mr-2 animate-spin"
          />実行</AlertDialogAction
        >
        <AlertDialogCancel
          class="flex self-center border border-gray-300 min-w-[120px]"
          @click="handleClose"
          >キャンセル</AlertDialogCancel
        >
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<style scoped lang="scss">
.table-container {
  max-height: 300px;
  min-height: 300px;
  overflow-y: auto;
  overflow-x: auto;
}

thead th {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
