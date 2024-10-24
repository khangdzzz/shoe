<script lang="ts" setup>
definePageMeta({
  middleware: ['auth', 'auth-redirect']
});
</script>

<template>
  <div class="user-list px-4">
    <div class="header flex items-center h-[40px] border-b border-b-[#e2e2e2]">
      <span class="text-base font-bold">利用者選択</span>
    </div>
    <UsersSearch></UsersSearch>
    <div class="body-content flex py-4 w-full gap-2">
      <UsersSearchCharacter class="px-5 py-10 min-w-[230px]" />
      <UsersTable class="w-full" />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
