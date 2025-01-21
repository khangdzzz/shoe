<script setup lang="ts">
import { hasRegisterPaymentMethod } from '~/helps';

const systemStore = useSystemStore();
const { redirectPage } = useRedirectPage();

const isOpenDialog = ref(false);

const isLoadPermission = computed(() => systemStore.isLoadPermission);

watch(isLoadPermission, () => {
  isOpenDialog.value = !hasRegisterPaymentMethod();
});

const openMyPage = () => {
  isOpenDialog.value = false;
  redirectPage('/mypage');
};

onMounted(() => {
  setTimeout(() => {
    isOpenDialog.value = !hasRegisterPaymentMethod();
  }, 200);

  window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpenDialog.value) {
    openMyPage();
  }
};
</script>

<template>
  <AlertDialog v-model:open="isOpenDialog">
    <AlertDialogContent>
      <AlertDialogHeader class="flex flex-col gap-4 items-center">
        <AlertDialogTitle class="text-sm"
          >決済方法は設定完了していないので、マイページより設定完了してください。</AlertDialogTitle
        >
      </AlertDialogHeader>

      <AlertDialogFooter class="flex !flex-col gap-4">
        <AlertDialogAction
          class="flex self-center min-w-[120px]"
          @click="openMyPage"
          >登録</AlertDialogAction
        >
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<style scoped lang="scss"></style>
