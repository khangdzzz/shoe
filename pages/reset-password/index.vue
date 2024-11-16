<script setup lang="ts">
definePageMeta({
  layout: false
});
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { Eye, EyeOff, LoaderCircle } from 'lucide-vue-next';

const route = useRoute();
const authStore = useAuthStore();
const system = useSystemStore();
const { redirectPage } = useRedirectPage();

const token = route.query.token;
const isLoading = ref(false);

const notify = computed(() => {
  return system.notify;
});

onMounted(() => {
  if (!token) {
    redirectPage('/login');
  }
});

const passwordVisible = ref(false);
const passwordConfirmVisible = ref(false);
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

const togglePasswordConfirmVisibility = () => {
  passwordConfirmVisible.value = !passwordConfirmVisible.value;
};

const formSchema = toTypedSchema(
  z
    .object({
      password: z.string(formatMessage(MESSAGES.ERR001, FIELDS.password)).min(8, { message: MESSAGES.ERR007 }).max(50),
      passwordConfirmation: z
        .string(formatMessage(MESSAGES.ERR001, FIELDS.confirmPassword))
        .min(8, { message: MESSAGES.ERR007 })
        .max(50)
    })
    .refine(({ password, passwordConfirmation }) => password === passwordConfirmation, {
      message: MESSAGES.ERR006,
      path: ['passwordConfirmation']
    })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema
});

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true;
  const { password } = values;

  await authStore.resetPassword(password, token as string);

  if (!notify.value?.message) {
    redirectPage('/confirm-email-change-password');
  }

  isLoading.value = false;
});
</script>

<template>
  <div class="login-page flex flex-col items-center justify-center h-[100vh]">
    <div class="logo">LOGO</div>

    <div class="flex flex-col min-w-[500px] bg-white px-12 py-8">
      <ShareErrorMessage />
      <h1 class="text-sm font-bold mb-[30px]">パスワード設定</h1>
      <div class="flex flex-col gap-2 mb-[30px]">
        <p class="text-xs">パスワードは英小文字、数字を含む、半角英数字８文字以上を設定してください。</p>
      </div>

      <form
        class="flex flex-col gap-[30px]"
        @submit="onSubmit"
      >
        <FormField
          v-slot="{ componentField }"
          name="password"
        >
          <FormItem class="relative">
            <span class="font-medium">パスワード</span>
            <FormControl>
              <div class="relative">
                <Input
                  :type="passwordVisible ? 'text' : 'password'"
                  placeholder="パスワード"
                  v-bind="componentField"
                />
                <button
                  type="button"
                  class="absolute right-[15px] top-1/2 transform -translate-y-1/2"
                  @click="togglePasswordVisibility"
                  aria-label="Toggle password visibility"
                >
                  <template v-if="!passwordVisible">
                    <EyeOff class="h-5 w-3.5 text-black" />
                  </template>
                  <template v-else>
                    <Eye class="h-5 w-3.5 text-black" />
                  </template>
                </button>
              </div>
            </FormControl>
            <FormMessage class="absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal" />
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField }"
          name="passwordConfirmation"
        >
          <FormItem class="relative">
            <span class="font-medium">パスワード（確認用）</span>
            <FormControl>
              <div class="relative">
                <Input
                  :type="passwordConfirmVisible ? 'text' : 'password'"
                  placeholder="パスワード（確認用）"
                  v-bind="componentField"
                />
                <button
                  type="button"
                  class="absolute right-[15px] top-1/2 transform -translate-y-1/2"
                  @click="togglePasswordConfirmVisibility"
                  aria-label="Toggle password visibility"
                >
                  <template v-if="!passwordConfirmVisible">
                    <EyeOff class="h-5 w-3.5 text-black" />
                  </template>
                  <template v-else>
                    <Eye class="h-5 w-3.5 text-black" />
                  </template>
                </button>
              </div>
              <FormMessage class="absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal" />
            </FormControl>
          </FormItem>
        </FormField>
        <Button
          type="submit"
          class="flex self-center w-[132px]"
        >
          <LoaderCircle
            v-if="isLoading"
            class="w-4 h-4 mr-2 animate-spin"
          />
          保存
        </Button>

        <Button
          class="w-[132px]"
          variant="cancel_btn"
          @click="redirectPage('/login')"
        >
          キャンセル
        </Button>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
