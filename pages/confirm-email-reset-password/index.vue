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
        class="h-[46px] w-auto"
      />
    </div>


    <div class="flex flex-col gap-[35px] min-w-[500px] bg-white px-12 py-8">
      <h1 class="text-sm font-bold">メール送信完了</h1>

      <div class="flex flex-col gap-2">
        <p class="text-xs">メール内のURLからパスワードのリセットを行ってください。</p>
        <p class="text-xs">メールが届かない場合は、メールアドレスが正しいかご確認ください。</p>
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
