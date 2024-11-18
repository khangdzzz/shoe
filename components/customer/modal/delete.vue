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
</script>

<template>
  <AlertDialog
    v-model:open="isOpenDialog"
    class="delete-modal"
  >
    <AlertDialogContent>
      <AlertDialogHeader class="flex flex-col gap-6 items-center mb-4">
        <AlertDialogTitle class="text-sm">削除の確認</AlertDialogTitle>
        <AlertDialogTitle class="text-sm font-normal">顧客を削除します。よろしいですか？</AlertDialogTitle>
      </AlertDialogHeader>

      <AlertDialogFooter class="flex !flex-col gap-5">
        <AlertDialogAction
          class="flex self-center min-w-[120px]"
          @click="emit('update')"
          >変更</AlertDialogAction
        >
        <AlertDialogCancel
          class="flex self-center border border-gray-300 min-w-[120px]"
          @click="emit('close')"
          >キャンセル</AlertDialogCancel
        >
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<style lang="scss" scoped>
:deep(.focus-visible\:ring-2:focus-visible) {
  --tw-ring-shadow: #0c0a0900;
}
</style>
