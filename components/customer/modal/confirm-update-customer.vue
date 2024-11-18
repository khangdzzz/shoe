<script setup lang="ts">
const props = defineProps<{ isOpen: boolean; fields: string[] }>();

const isOpenDialog = ref(props.isOpen);

watch(
  () => props.isOpen,
  (newVal) => {
    isOpenDialog.value = newVal;
  }
);

const emit = defineEmits<{ (e: 'close'): void; (e: 'update'): void }>();

const handleClose = () => {
  emit('close');
};

const updateUserInformation = () => {
  emit('update');
};
</script>

<template>
  <AlertDialog v-model:open="isOpenDialog">
    <AlertDialogContent>
      <AlertDialogHeader class="flex flex-col gap-4">
        <AlertDialogTitle class="text-sm text-center">変更の確認</AlertDialogTitle>
        <AlertDialogTitle class="text-sm font-normal">以下の内容を変更します。よろしいですか？</AlertDialogTitle>
      </AlertDialogHeader>

      <div class="border border-gray-300 p-4 min-h-[150px]">
        <ul class="flex flex-col gap-2">
          <li
            v-for="field in fields"
            :key="field"
          >
            {{ field }}
          </li>
        </ul>
      </div>
      <AlertDialogFooter class="flex !flex-col gap-4">
        <AlertDialogAction
          class="flex self-center min-w-[120px]"
          @click="updateUserInformation"
          >変更</AlertDialogAction
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
