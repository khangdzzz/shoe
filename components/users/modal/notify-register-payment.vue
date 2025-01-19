<script setup lang="ts">
import {
  getCreditCardInfo,
  getTypeRegisterPayment,
  hasRegisterPaymentMethod,
  isAdminUpdatePaymentMethod
} from '~/helps';

const systemStore = useSystemStore();
const { redirectPage } = useRedirectPage();

const isOpenDialog = ref(false);

const isLoadPermission = computed(() => systemStore.isLoadPermission);

watch(isLoadPermission, () => {
  isOpenDialog.value = checkRegisterPaymentMethod();
});

const openMyPage = () => {
  isOpenDialog.value = false;
  redirectPage('/mypage');
};

onMounted(() => {
  setTimeout(() => {
    isOpenDialog.value = checkRegisterPaymentMethod();
  }, 200);
});

const checkRegisterPaymentMethod = () => {
  const typeRegisterPayment = getTypeRegisterPayment();
  const isAdminUpdatePayment = isAdminUpdatePaymentMethod();
  const paymentInfo = getCreditCardInfo();

  if (isAdminUpdatePayment) {
    if (
      typeRegisterPayment === PAYMENT_METHOD_TYPES.bankWithdrawal ||
      (typeRegisterPayment === PAYMENT_METHOD_TYPES.creditCard && paymentInfo)
    ) {
      return false;
    }

    return true;
  }

  return !hasRegisterPaymentMethod();
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
