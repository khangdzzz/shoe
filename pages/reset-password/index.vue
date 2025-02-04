<script setup lang="ts">
definePageMeta({
  layout: false
});
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { Eye, EyeOff, LoaderCircle } from 'lucide-vue-next';
import { getConfirmPasswordRules, getPasswordRules } from '~/helps';

const route = useRoute();
const authStore = useAuthStore();
const system = useSystemStore();
const jwt = useJwt();
const { redirectPage } = useRedirectPage();

const token = route.query.token;
const isSubmit = ref(false);
const isLoading = ref(false);
const email = ref('');

const notify = computed(() => {
  return system.notify;
});

onMounted(() => {
  if (!token) {
    redirectPage('/login');
  }

  jwt.checkTokenValid('password', token?.toString() ?? '');

  const tokenDecode = jwt.parseJwt(token?.toString() ?? '');

  if (!tokenDecode || notify.value?.message) {
    setTimeout(() => {
      redirectPage('/login');
    }, 1000);
  }

  email.value = tokenDecode?.email ?? '';

  setFieldValue('email', email.value);
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
      email: z.string(messageRequired(FIELDS.email)).min(1, FIELDS.email),
      password: getPasswordRules(formatMessage(MESSAGES.ERR001, FIELDS.password)),
      passwordConfirmation: getConfirmPasswordRules(formatMessage(MESSAGES.ERR001, FIELDS.confirmPassword))
    })
    .refine(({ password, passwordConfirmation }) => password === passwordConfirmation, {
      message: MESSAGES.ERR006,
      path: ['passwordConfirmation']
    })
);

const { handleSubmit, setFieldValue } = useForm({
  validationSchema: formSchema
});

const onSubmit = handleSubmit(
  async (values) => {
    system.clearNotify();

    isLoading.value = true;

    const { password } = values;

    await authStore.resetPassword(password, token as string);

    if (!notify.value?.message) {
      redirectPage('/confirm-email-change-password');
    }

    isLoading.value = false;
  },
  () => {
    isSubmit.value = true;
  }
);
</script>

<template>
  <div class="login-page flex flex-col items-center justify-center h-[100vh]">
    <div class="logo mb-2">
      <img
        src="~/assets/images/logo.png"
        class="h-[60px] w-auto"
      />
    </div>

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
          name="email"
        >
          <FormItem class="relative">
            <span class="font-medium">メールアドレス</span>
            <FormControl>
              <div class="relative">
                <Input
                  disabled
                  class="bg-[#ccc]"
                  placeholder="メールアドレス"
                  v-bind="componentField"
                />
              </div>
            </FormControl>
          </FormItem>
        </FormField>
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
            <FormMessage
              v-if="isSubmit"
              class="absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"
            />
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
              <FormMessage
                v-if="isSubmit"
                class="absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"
              />
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
