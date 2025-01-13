<script lang="ts" setup>
import type { PaymentMessageType } from '~/models/payment';

definePageMeta({
  middleware: ['auth', 'auth-redirect', 'payment-status']
});
const paymentMessage = useState<PaymentMessageType>('paymentMessage');

onMounted(() => {
  if (paymentMessage.value?.text) {
    setTimeout(() => {
      paymentMessage.value = {
        type: 'info',
        text: ''
      };
    }, 5000);
  }
});

onUnmounted(() => {
  useState('paymentMessage').value = null;
});
</script>
<template>
  <div class="user-list px-4">
    <div class="header flex items-center h-[40px] border-b border-b-[#e2e2e2]">
      <span class="text-base font-bold">プロフィール設定</span>
    </div>
    <div
      v-if="paymentMessage?.text"
      :class="[
        'mb-4 p-4 rounded-md mt-4',
        paymentMessage.type === 'success'
          ? 'bg-green-50 text-green-700 border border-green-200'
          : 'bg-blue-50 text-blue-700 border border-blue-200'
      ]"
    >
      {{ paymentMessage.text }}
    </div>

    <MypageForm />
  </div>
</template>
<style lang="scss" scoped></style>
