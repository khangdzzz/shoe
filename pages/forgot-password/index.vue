<script setup lang="ts">
definePageMeta({
  layout: false
});
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';

const formSchema = toTypedSchema(
  z.object({
    email: z.string(formatMessage(MESSAGES.ERR001, 'email')).email({ message: MESSAGES.ERR004 })
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema
});

const onSubmit = handleSubmit((values) => {
  console.log('values', values);
});
</script>

<template>
  <div class="login-page flex flex-col items-center justify-center h-[100vh]">
    <div class="logo">LOGO</div>

    <div class="flex flex-col gap-[20px] min-w-[500px] bg-white px-12 py-8">
      <h1 class="text-sm font-bold">パスワードを忘れた場合</h1>

      <div class="flex flex-col gap-2">
        <p class="text-xs">登録済みのメールアドレスを入力してください。</p>
        <p class="text-xs">パスワード再設定用のURLを送信します。</p>
      </div>

      <form
        class="flex flex-col gap-8"
        @submit="onSubmit"
      >
        <FormField
          v-slot="{ componentField }"
          name="email"
        >
          <FormItem class="relative">
            <span class="font-medium">メールアドレス</span>
            <FormControl>
              <Input
                type="text"
                placeholder="メールアドレス"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage class="absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal" />
          </FormItem>
        </FormField>
        <Button
          type="submit"
          class="flex self-center"
          @click="$router.push('/confirm-email-reset-password')"
        >
          メールを送信
        </Button>

        <Button
          class="w-[132px]"
          variant="cancel_btn"
          @click="$router.push('/login')"
        >
          キャンセル
        </Button>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
