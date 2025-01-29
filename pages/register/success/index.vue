<script setup lang="ts">
definePageMeta({
  layout: false
});
</script>

<template>
  <div class="login-page flex flex-col items-center justify-center h-[100vh]">
    <div class="logo mb-2">
      <img
        src="~/assets/images/logo.png"
        class="h-[60px] w-auto"
      />
    </div>


    <div class="flex flex-col gap-[35px] min-w-[500px] bg-white px-12 py-8">
      <h1 class="text-sm font-bold">新規会員登録完了</h1>

      <div class="flex flex-col gap-2">
        <p class="text-xs">会員登録が完了しました。</p>
        <p class="text-xs">ログイン画面に戻り、設定したパスワードでログインしてください。</p>
      </div>

      <Button
        variant="cancel_btn"
        @click="$router.push('/login')"
      >
        ログイン画面へ戻る
      </Button>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
