<script setup lang="ts">
definePageMeta({
  layout: false
});
import { toTypedSchema } from '@vee-validate/zod';
import { LoaderCircle } from 'lucide-vue-next';
import { useForm } from 'vee-validate';
import * as z from 'zod';

const authStore = useAuthStore();
const system = useSystemStore();
const { redirectPage } = useRedirectPage();

const { notify } = storeToRefs(system);
const isLoading = ref(false);

const formSchema = toTypedSchema(
  z.object({
    email: z
      .string(formatMessage(MESSAGES.ERR001, FIELDS.email))
      .email({ message: MESSAGES.ERR004 })
      .max(250, messageLimit(FIELDS.email, '250'))
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema
});

const onSubmit = handleSubmit(async (values) => {
  system.clearNotify();

  isLoading.value = true;

  await authStore.verifyEmail(values.email);

  if (!notify.value?.message) {
    redirectPage('/invite-member-success');
  }

  isLoading.value = false;
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

    <div class="flex flex-col min-w-[500px] bg-white px-12 pt-4 pb-8">
      <ShareErrorMessage />
      <h1 class="text-sm font-bold mt-[10px] mb-[20px]">会員登録メール認証</h1>

      <div class="flex flex-col gap-2 mb-[20px]">
        <p class="text-xs">会員登録のメールアドレスを入力してください。</p>
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
        >
          <LoaderCircle
            v-if="isLoading"
            class="w-4 h-4 mr-2 animate-spin"
          />
          メールを送信
        </Button>

        <Button
          class="w-[132px]"
          variant="cancel_btn"
          type="button"
          @click="redirectPage('/login')"
        >
          キャンセル
        </Button>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
