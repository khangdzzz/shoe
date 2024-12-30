<script setup lang="ts">
const props = defineProps<{ isOpen: boolean }>();

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

const deleteUserInformation = () => {
  emit('update');
};
</script>

<template>
  <AlertDialog v-model:open="isOpenDialog">
    <AlertDialogContent class="w-[400px]">
      <AlertDialogHeader class="flex flex-col gap-4">
        <AlertDialogTitle class="text-sm text-center">退会の確認</AlertDialogTitle>
        <AlertDialogTitle class="text-sm text-center">退会しますか？</AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogFooter class="flex !flex-col gap-4">
        <AlertDialogAction
          class="flex self-center min-w-[120px]"
          @click="deleteUserInformation"
          >確認</AlertDialogAction
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
