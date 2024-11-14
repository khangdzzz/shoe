<script lang="ts" setup>
definePageMeta({
  middleware: ['auth', 'auth-redirect']
});
</script>
<template>
  <div class="user-list px-4">
    <div class="header flex items-center h-[40px] border-b border-b-[#e2e2e2]">
      <span class="text-base font-bold">顧客詳細</span>
    </div>
    <CustomerRegisterMember />
  </div>
</template>
<style lang="scss" scoped></style>
