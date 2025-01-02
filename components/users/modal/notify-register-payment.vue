<script setup lang="ts">
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const { redirectPage } = useRedirectPage();

const isOpenDialog = ref(props.isOpen);

const openMyPage = () => {
  redirectPage('/mypage');
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
