<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: ['auth-redirect']
});

import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { Eye, EyeOff, LoaderCircle } from 'lucide-vue-next';

const authStore = useAuthStore();
const system = useSystemStore();
const commonService = useCommon();
const permissionService = usePermission();
const router = useRouter();

const { notify } = storeToRefs(system);

const passwordVisible = ref(false);
const isLoading = ref(false);

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

const formSchema = toTypedSchema(
  z.object({
    email: z.string(formatMessage(MESSAGES.ERR001, FIELDS.email)).email({ message: MESSAGES.ERR004 }),
    password: z
      .string(formatMessage(MESSAGES.ERR001, FIELDS.password))
      .min(1, formatMessage(MESSAGES.ERR001, FIELDS.password))
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema
});

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true;
  const res = await authStore.login(values);

  if (notify.value?.message) {
    isLoading.value = false;
    return;
  }

  const accessToken = res?.data?.accessToken;
  const refreshToken = res?.data?.refreshToken;

  if (accessToken && refreshToken) {
    commonService.setLocalStorage(LOCAL_STORAGE_KEYS.accessToken, accessToken);
    commonService.setLocalStorage(LOCAL_STORAGE_KEYS.refreshToken, refreshToken);
  }

  await permissionService.initPermissions();

  isLoading.value = false;

  if (authStore.currentUser) {
    if (authStore.isAdmin) {
      router.push('/customer');
    } else {
      router.push('/user-list');
    }
  }
});
</script>

<template>
  <div class="login-page flex flex-col items-center justify-center h-[100vh]">
    <div class="logo">LOGO</div>

    <div class="min-w-[500px]">
      <form
        class="bg-white flex flex-col px-12 py-8"
        @submit="onSubmit"
      >
        <ShareErrorMessage />
        <FormField
          v-slot="{ componentField }"
          name="email"
        >
          <FormItem class="relative mb-8">
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
        <FormField
          v-slot="{ componentField }"
          name="password"
        >
          <FormItem class="relative mb-8">
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
        <Button
          type="submit"
          class="flex self-center"
        >
          <LoaderCircle
            v-if="isLoading"
            class="w-4 h-4 mr-2 animate-spin"
          />
          ログイン
        </Button>
      </form>
      <div class="flex flex-col gap-4 justify-center items-end mt-[20px]">
        <div class="register">
          初めての方は
          <NuxtLink
            to="/auth-mail"
            class="hover:underline"
            >「新規登録」</NuxtLink
          >
        </div>
        <div class="forgot">
          パスワードを忘れた場合は
          <NuxtLink
            to="/forgot-password"
            class="hover:underline"
            >「こちら」</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
