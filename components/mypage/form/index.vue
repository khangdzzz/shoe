<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { Eye, EyeOff } from 'lucide-vue-next';
import * as z from 'zod';
import type { PostalCode } from '~/models/masterData';
import { LoaderCircle } from 'lucide-vue-next';
import type { CompanyUpdateBody } from '~/models/company';

interface InitialFormValues {
  [key: string]: any;
}

const dataInit = useFetchDataInit();
const system = useSystemStore();
const authStore = useAuthStore();
const companyStore = useCompanyStore();
const permissionService = usePermission();
const { redirectPage } = useRedirectPage();

const postalCode = ref<PostalCode>();

const isLoadPostalCode = ref(false);
const isLoadingRegister = ref(false);
const isLoading = ref(false);
const password = ref('');
const isMatchPassword = ref(true);
const confirmPassword = ref('');
const initialFormValues = ref<InitialFormValues>({});
const changeFields = ref<string[]>([]);

const kaipokeUserPasswordVisible = ref(false);
const passwordConfirmVisible = ref(false);
const passwordVisible = ref(false);

const katakanaRegex = /^[\u30A0-\u30FF]+$/;

const isDisableButton = computed(() => {
  return changeFields.value.length == 0;
});

const kaigoSoftware = computed(() => {
  return dataInit.masterData?.kaigoSoftwares;
});

const notify = computed(() => {
  return system.notify;
});

const formSchema = toTypedSchema(
  z.object({
    companyName: z.string(formatMessage(MESSAGES.ERR001, FIELDS.companyName)).min(1),
    companyNameKana: z
      .string(formatMessage(MESSAGES.ERR001, FIELDS.companyNameKana))
      .min(1, formatMessage(MESSAGES.ERR001, FIELDS.companyNameKana))
      .regex(katakanaRegex, { message: MESSAGES.ERR005 }),
    companyPostCode: z.string(formatMessage(MESSAGES.ERR001, FIELDS.companyPostCode)).min(1),
    companyAddress: z.string(formatMessage(MESSAGES.ERR001, FIELDS.companyAddress)).min(1),
    frontPicPosition: z.string(formatMessage(MESSAGES.ERR001, FIELDS.email)).min(1),
    frontPicFamilyName: z.string(formatMessage(MESSAGES.ERR001, FIELDS.frontPicFamilyName)).min(1),
    frontPicGivenName: z.string(formatMessage(MESSAGES.ERR001, FIELDS.frontPicGivenName)).min(1),
    frontPicFamilyNameKana: z
      .string(formatMessage(MESSAGES.ERR001, FIELDS.frontPicFamilyNameKana))
      .min(1)
      .regex(katakanaRegex, { message: MESSAGES.ERR005 }),
    frontPicGivenNameKana: z
      .string(formatMessage(MESSAGES.ERR001, FIELDS.frontPicGivenNameKana))
      .min(1)
      .regex(katakanaRegex, { message: MESSAGES.ERR005 }),
    picPosition: z.string(formatMessage(MESSAGES.ERR001, FIELDS.picPosition)).min(1),
    picFamilyName: z.string(formatMessage(MESSAGES.ERR001, FIELDS.picFamilyName)).min(1),
    picGivenName: z.string(formatMessage(MESSAGES.ERR001, FIELDS.picGivenName)).min(1),
    picFamilyNameKana: z
      .string(formatMessage(MESSAGES.ERR001, FIELDS.picFamilyNameKana))
      .min(1)
      .regex(katakanaRegex, { message: MESSAGES.ERR005 }),
    picGivenNameKana: z
      .string(formatMessage(MESSAGES.ERR001, FIELDS.picGivenNameKana))
      .min(1)
      .regex(katakanaRegex, { message: MESSAGES.ERR005 }),
    phoneNumber: z.string(formatMessage(MESSAGES.ERR001, FIELDS.phoneNumber)).min(1),
    email: z.string(formatMessage(MESSAGES.ERR001, FIELDS.email)).min(1),
    password: z.string().min(8, { message: MESSAGES.ERR007 }).optional(),
    confirmPassword: z.string().min(8, { message: MESSAGES.ERR007 }).optional(),
    kaigoSoftware: z.string(formatMessage(MESSAGES.ERR002, FIELDS.kaigoSoftware)).min(1),
    kaipokeCompanyId: z.string(formatMessage(MESSAGES.ERR001, FIELDS.kaipokeCompanyId)).min(1),
    kaipokeUserId: z.string(formatMessage(MESSAGES.ERR001, FIELDS.kaipokeUserId)).min(1),
    kaipokeUserPassword: z
      .string(formatMessage(MESSAGES.ERR001, FIELDS.kaipokeUserPassword))
      .min(8, { message: MESSAGES.ERR007 }),
    paymentMethod: z.string(formatMessage(MESSAGES.ERR001, FIELDS.paymentMethod)).min(1)
  })
);

const {
  handleSubmit,
  values: formValues,
  setFieldValue
} = useForm({
  validationSchema: formSchema
});

const currentUser = computed(() => {
  return authStore.currentUser;
});

const initDataUser = () => {
  if (currentUser.value) {
    const { company, paymentMethodInfo } = currentUser.value;

    setFieldValue('companyName', company.companyName);
    setFieldValue('companyNameKana', company.companyNameKana);
    setFieldValue('companyPostCode', company.companyPostCode);
    setFieldValue('companyAddress', company.companyAddress);
    setFieldValue('phoneNumber', company.phoneNumber);
    setFieldValue('picFamilyName', company.picFamilyName);
    setFieldValue('picFamilyNameKana', company.picFamilyNameKana);
    setFieldValue('picGivenName', company.picGivenName);
    setFieldValue('picGivenNameKana', company.picGivenNameKana);
    setFieldValue('picPosition', company.picPosition);
    setFieldValue('frontPicFamilyName', company.frontPicFamilyName);
    setFieldValue('frontPicFamilyNameKana', company.frontPicFamilyNameKana);
    setFieldValue('frontPicGivenName', company.frontPicGivenName);
    setFieldValue('frontPicGivenNameKana', company.frontPicGivenNameKana);
    setFieldValue('frontPicPosition', company.frontPicPosition);
    setFieldValue('kaipokeUserId', company.kaipokeUserId);
    setFieldValue('kaipokeUserPassword', company.kaipokeUserPassword);
    setFieldValue('kaipokeCompanyId', company.kaipokeCompanyId);
    setFieldValue('kaigoSoftware', company.kaigoSoftware.toString());
    setFieldValue('paymentMethod', paymentMethodInfo?.ccDisplayName);
    setFieldValue('email', company.email);

    initialFormValues.value = { ...formValues };
  }
};

onMounted(() => {
  isLoading.value = true;
  initDataUser();
  isLoading.value = false;
});

watch(currentUser, () => {
  initDataUser();
});

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

const togglePasswordConfirmVisibility = () => {
  passwordConfirmVisible.value = !passwordConfirmVisible.value;
};

const toggleKaipokeUserPasswordVisibility = () => {
  kaipokeUserPasswordVisible.value = !kaipokeUserPasswordVisible.value;
};

const searchPostalCode = async () => {
  const companyPostCode = formValues?.companyPostCode;

  if (!companyPostCode) {
    system.setNotify({
      message: '郵便番号が存在しません。',
      type: TYPE_MESSAGE.error
    });
    return;
  }

  isLoadPostalCode.value = true;

  const res = await system.searchPostalCode(companyPostCode);

  if (res?.data) {
    const { prefecture, city } = res.data;
    const companyAddress = `${prefecture} ${city}`;
    setFieldValue('companyAddress', companyAddress);
    postalCode.value = res.data;
  } else {
    system.setNotify({
      message: '郵便番号が存在しません。',
      type: TYPE_MESSAGE.error
    });
  }

  isLoadPostalCode.value = false;
};

watch([confirmPassword, password], () => {
  if (!password.value || !confirmPassword.value) {
    isMatchPassword.value = true;
    return;
  }
  isMatchPassword.value = password.value === confirmPassword.value;
});

const isDialogOpenUpdateInfo = ref(false);
const isDialogOpenDeleteInfo = ref(false);

const closeDialog = () => {
  isDialogOpenUpdateInfo.value = false;
};

watch(
  formValues,
  () => {
    changeFields.value = [];

    Object.keys(formValues).forEach((field) => {
      if ((formValues as any)[field] !== initialFormValues.value[field] && field !== 'confirmPassword') {
        const japaneseFields = FIELDS[field as keyof typeof FIELDS];
        changeFields.value.push(japaneseFields);
      }
    });
  },
  {
    deep: true
  }
);

const onSubmit = handleSubmit(
  async (values) => {
    if (!isMatchPassword.value) {
      system.setNotify({
        message: MESSAGES.ERR006,
        type: TYPE_MESSAGE.error
      });
      return;
    }

    isDialogOpenUpdateInfo.value = true;
  },
  ({ errors }) => {
    const message = Object.values(errors)[0];
    system.setNotify({
      message,
      type: TYPE_MESSAGE.error
    });
  }
);

const updateUserInformation = async () => {
  isLoading.value = true;
  const updatedFormValues = { ...formValues };
  const newPassword = updatedFormValues.password;

  delete updatedFormValues.confirmPassword;
  delete updatedFormValues.password;

  const body = {
    ...updatedFormValues,
    kaigoSoftware: Number(updatedFormValues.kaigoSoftware),
    ...(newPassword && { newPassword })
  };

  await companyStore.updateCompanyInformation(body as CompanyUpdateBody);

  isDialogOpenUpdateInfo.value = false;

  isLoading.value = false;

  if (notify.value?.message) {
    return;
  }

  permissionService.initPermissions();

  system.setNotify({
    message: '更新に成功しました',
    type: TYPE_MESSAGE.success
  });

  setTimeout(() => {
    redirectPage('/user-list');
  }, 500);
};

const deleteUserInformation = async () => {
  isLoading.value = true;
  await authStore.deleteAuthUser();

  isLoading.value = false;

  if (notify.value?.message) {
    return;
  }

  system.setNotify({
    message: '退会を行いました。',
    type: TYPE_MESSAGE.success
  });

  setTimeout(() => {
    localStorage.clear();
    redirectPage('/login');
  }, 1000);
};

const resetForm = () => {
  initDataUser();
  redirectPage('/user-list');
};
</script>

<template>
  <div class="login-page flex flex-col !h-[100vh] overflow-hidden">
    <div class="flex justify-between mt-[15px]">
      <ShareErrorMessage class="pl-[64px]" />
      <Button
        class="mr-[64px]"
        variant="cancel_btn"
        @click="() => (isDialogOpenDeleteInfo = true)"
        >退会</Button
      >
    </div>
    <MypageModalConfirmUpdateUser
      :isOpen="isDialogOpenUpdateInfo"
      :fields="changeFields"
      @close="closeDialog"
      @update="updateUserInformation"
    />

    <MypageModalConfirmDeleteUser
      :isOpen="isDialogOpenDeleteInfo"
      @close="() => (isDialogOpenDeleteInfo = false)"
      @update="deleteUserInformation"
    />

    <ShareLoading v-if="isLoading" />
    <form
      class="register flex flex-col gap-[25px] pl-[64px] pt-[10px] pb-[15px]"
      @submit="onSubmit"
    >
      <div class="form overflow-y-auto scroll">
        <div class="flex flex-col w-[900px] gap-[25px] pb-[20px]">
          <ShareRequireLabel
            label="必須項目です"
            position="left"
            class="mb-[10px]"
          />
          <div class="company flex flex-col gap-5">
            <FormField
              v-slot="{ componentField, errors }"
              name="companyName"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="法人名"
                  class="w-[145px]"
                />
                <div class="relative w-[82%] !m-[0px]">
                  <FormControl>
                    <Input
                      type="text"
                      v-bind="componentField"
                      :class="{
                        'border-red-500': errors.length
                      }"
                    />
                  </FormControl>
                </div>
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField, errors }"
              name="companyNameKana"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="フリガナ"
                  class="w-[145px]"
                />
                <div class="relative w-[82%] !m-[0px]">
                  <FormControl>
                    <Input
                      type="text"
                      v-bind="componentField"
                      :class="{
                        'border-red-500': errors.length
                      }"
                    />
                  </FormControl>
                  <FormMessage class="absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal" />
                </div>
              </FormItem>
            </FormField>
          </div>

          <div class="space"></div>

          <div class="information flex flex-col gap-5">
            <FormField
              v-slot="{ componentField, errors }"
              name="companyPostCode"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="郵便番号"
                  class="w-[145px] flex"
                />
                <div class="relative flex !m-[0px] gap-[20px]">
                  <FormControl>
                    <Input
                      type="text"
                      v-bind="componentField"
                      :class="{
                        'border-red-500': errors.length
                      }"
                    />
                  </FormControl>
                  <Button
                    @click="searchPostalCode"
                    type="button"
                    variant="cancel_btn"
                    class="!m-[0px] !rounded-3xl"
                  >
                    <LoaderCircle
                      v-if="isLoadPostalCode"
                      class="w-4 h-4 mr-2 animate-spin"
                    />
                    郵便番号から入力
                  </Button>
                </div>
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField, errors }"
              name="companyAddress"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="会社所在地"
                  class="w-[145px]"
                />
                <div class="relative w-[82%] !m-[0px]">
                  <FormControl>
                    <Input
                      type="text"
                      v-bind="componentField"
                      :class="{
                        'border-red-500': errors.length
                      }"
                    />
                  </FormControl>
                </div>
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField, errors }"
              name="frontPicPosition"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="代表者"
                  class="w-[145px] flex pt-[14px] items-baseline"
                />
                <div class="flex flex-col gap-[15px] w-[82%]">
                  <div class="flex gap-5 items-center !m-[0px]">
                    <div class="pic-position flex gap-5 items-center w-[50%]">
                      <span class="label w-[35px]">役職</span>
                      <FormControl>
                        <Input
                          type="text"
                          v-bind="componentField"
                          :class="{
                            'border-red-500': errors.length
                          }"
                        />
                      </FormControl>
                    </div>
                    <div class="pic-name flex items-center gap-5 w-[50%]">
                      <span class="label flex w-[16%]">お名前</span>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="frontPicFamilyName"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center"
                                v-bind="componentField"
                                :class="{
                                  'border-red-500': errors.length
                                }"
                                placeholder="姓"
                              />
                            </FormControl>
                          </div>
                        </FormItem>
                      </FormField>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="frontPicGivenName"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center"
                                v-bind="componentField"
                                :class="{
                                  'border-red-500': errors.length
                                }"
                                placeholder="名"
                              />
                            </FormControl>
                          </div>
                        </FormItem>
                      </FormField>
                    </div>
                  </div>

                  <div class="flex gap-5 items-center !m-[0px]">
                    <div class="pic-position flex gap-5 items-center w-[50%]"></div>
                    <div class="pic-name flex items-center gap-5 w-[50%]">
                      <span class="label flex w-[16%]">フリガナ</span>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="frontPicFamilyNameKana"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center"
                                v-bind="componentField"
                                :class="{
                                  'border-red-500': errors.length
                                }"
                                placeholder="せい"
                              />
                            </FormControl>
                          </div>
                        </FormItem>
                      </FormField>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="frontPicGivenNameKana"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center"
                                v-bind="componentField"
                                :class="{
                                  'border-red-500': errors.length
                                }"
                                placeholder="めい"
                              />
                            </FormControl>
                          </div>
                        </FormItem>
                      </FormField>
                    </div>
                  </div>
                </div>
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField, errors }"
              name="picPosition"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="ご担当者"
                  class="w-[145px] flex pt-[14px] items-baseline"
                />
                <div class="flex flex-col gap-[15px] w-[82%]">
                  <div class="flex gap-5 items-center !m-[0px]">
                    <div class="pic-position flex gap-5 items-center w-[50%]">
                      <span class="label w-[35px]">役職</span>
                      <FormControl>
                        <Input
                          type="text"
                          v-bind="componentField"
                          :class="{
                            'border-red-500': errors.length
                          }"
                        />
                      </FormControl>
                    </div>

                    <div class="pic-name flex items-center gap-5 w-[50%]">
                      <span class="label flex w-[16%]">お名前</span>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="picFamilyName"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center"
                                v-bind="componentField"
                                :class="{
                                  'border-red-500': errors.length
                                }"
                                placeholder="姓"
                              />
                            </FormControl>
                          </div>
                        </FormItem>
                      </FormField>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="picGivenName"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center"
                                v-bind="componentField"
                                :class="{
                                  'border-red-500': errors.length
                                }"
                                placeholder="名"
                              />
                            </FormControl>
                          </div>
                        </FormItem>
                      </FormField>
                    </div>
                  </div>

                  <div class="flex gap-5 items-center !m-[0px]">
                    <div class="pic-position flex gap-5 items-center w-[50%]"></div>
                    <div class="pic-name flex items-center gap-5 w-[50%]">
                      <span class="label flex w-[16%]">フリガナ</span>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="picFamilyNameKana"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center"
                                v-bind="componentField"
                                :class="{
                                  'border-red-500': errors.length
                                }"
                                placeholder="せい"
                              />
                            </FormControl>
                          </div>
                        </FormItem>
                      </FormField>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="picGivenNameKana"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center"
                                v-bind="componentField"
                                :class="{
                                  'border-red-500': errors.length
                                }"
                                placeholder="めい"
                              />
                            </FormControl>
                          </div>
                        </FormItem>
                      </FormField>
                    </div>
                  </div>
                </div>
              </FormItem>
            </FormField>
          </div>

          <div class="space"></div>

          <div class="contact flex flex-col gap-6">
            <FormField
              v-slot="{ componentField, errors }"
              name="phoneNumber"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="電話番号"
                  class="w-[145px]"
                />
                <div class="relative w-[40%] !m-[0px]">
                  <FormControl>
                    <Input
                      type="text"
                      v-bind="componentField"
                      :class="{
                        'border-red-500': errors.length
                      }"
                    />
                  </FormControl>
                </div>
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField, errors }"
              name="email"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="メールアドレス"
                  class="w-[145px]"
                />
                <div class="relative w-[82%] !m-[0px]">
                  <FormControl>
                    <Input
                      type="text"
                      v-bind="componentField"
                      :class="{
                        'border-red-500': errors.length
                      }"
                    />

                    <span class="absolute text-[10px] pt-[2px]">認証済みのメールアドレス</span>
                  </FormControl>
                </div>
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField, errors }"
              name="password"
            >
              <FormItem class="flex gap-5">
                <div class="w-[145px]">
                  <span>パスワード</span>
                </div>
                <div class="relative w-[82%] !m-[0px]">
                  <FormControl>
                    <div class="relative">
                      <Input
                        v-model="password"
                        :type="passwordVisible ? 'text' : 'password'"
                        v-bind="componentField"
                        placeholder="英小文字、数字を含む、半角英数字８文字以上"
                        :class="{
                          'border-red-500': errors.length
                        }"
                        class="placeholder:text-[10px]"
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
                </div>
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField, errors }"
              name="confirmPassword"
            >
              <FormItem class="flex gap-5">
                <div class="label w-[145px] flex gap-5 items-center">
                  <div class="flex flex-col">
                    <span class="text-xs">パスワード</span>
                    <span>（確認用）</span>
                  </div>
                </div>
                <div class="relative w-[82%] !m-[0px]">
                  <FormControl>
                    <div class="relative">
                      <Input
                        :type="passwordConfirmVisible ? 'text' : 'password'"
                        v-bind="componentField"
                        placeholder="英小文字、数字を含む、半角英数字８文字以上"
                        :class="{
                          'border-red-500': errors.length || !isMatchPassword
                        }"
                        class="placeholder:text-[10px]"
                        v-model="confirmPassword"
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
                  </FormControl>
                  <span
                    v-if="!isMatchPassword && !errors.length"
                    class="absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal"
                    >{{ MESSAGES.ERR006 }}</span
                  >
                  <FormMessage class="absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal" />
                </div>
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField, errors, meta }"
              name="kaigoSoftware"
            >
              <FormItem class="relative flex gap-5">
                <ShareRequireLabel
                  label="介護ソフト選択"
                  class="w-[145px]"
                />
                <div class="relative w-[82%] !m-[0px]">
                  <FormControl>
                    <Select v-bind="componentField">
                      <SelectTrigger
                        :class="{
                          'border-red-500': errors.length && !componentField.modelValue
                        }"
                      >
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem
                          :value="`${company.id}`"
                          v-for="company of kaigoSoftware"
                        >
                          {{ company.name }}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage class="absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal" />
                  </FormControl>
                </div>
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField, errors }"
              name="kaipokeCompanyId"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="カイポケ法人ID"
                  class="w-[145px]"
                />
                <div class="relative w-[82%] !m-[0px]">
                  <FormControl>
                    <Input
                      type="text"
                      v-bind="componentField"
                      :class="{
                        'border-red-500': errors.length
                      }"
                    />
                  </FormControl>
                </div>
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField, errors }"
              name="kaipokeUserId"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="カイポケユーザーID"
                  class="w-[145px]"
                />
                <div class="relative w-[82%] !m-[0px]">
                  <FormControl>
                    <Input
                      type="text"
                      v-bind="componentField"
                      :class="{
                        'border-red-500': errors.length
                      }"
                    />
                  </FormControl>
                </div>
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField, errors }"
              name="kaipokeUserPassword"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="カイポケパスワード"
                  class="w-[145px]"
                />
                <div class="relative w-[82%] !m-[0px]">
                  <FormControl>
                    <div class="relative">
                      <Input
                        :type="kaipokeUserPasswordVisible ? 'text' : 'password'"
                        v-bind="componentField"
                        placeholder="英小文字、数字を含む、半角英数字８文字以上"
                        :class="{
                          'border-red-500': errors.length
                        }"
                        class="placeholder:text-[10px]"
                      />
                      <button
                        type="button"
                        class="absolute right-[15px] top-1/2 transform -translate-y-1/2"
                        @click="toggleKaipokeUserPasswordVisibility"
                        aria-label="Toggle password visibility"
                      >
                        <template v-if="!kaipokeUserPasswordVisible">
                          <EyeOff class="h-5 w-3.5 text-black" />
                        </template>
                        <template v-else>
                          <Eye class="h-5 w-3.5 text-black" />
                        </template>
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage class="absolute top-full left-0 mt-1 text-red-500 !m-[0px] !text-[12px] font-normal" />
                </div>
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField, errors }"
              name="paymentMethod"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="決済方法"
                  class="w-[145px]"
                />
                <div class="relative w-[82%] !m-[0px]">
                  <FormControl>
                    <Input
                      disabled
                      class="bg-[#ccc]"
                      type="text"
                      v-bind="componentField"
                      :class="{
                        'border-red-500': errors.length
                      }"
                    />
                  </FormControl>
                </div>
              </FormItem>
            </FormField>

            <div class="flex gap-5">
              <div class="w-[145px] flex items-center"></div>
              <div class="relative w-[82%] !m-[0px]">
                <PaymentFormLinkType />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-3 flex-col">
        <Button
          :disabled="isDisableButton"
          type="submit"
          class="flex self-center min-w-[120px]"
        >
          <LoaderCircle
            v-if="isLoadingRegister"
            class="w-4 h-4 mr-2 animate-spin"
          />
          変更
        </Button>

        <Button
          variant="cancel_btn"
          type="button"
          class="flex self-center"
          @click="resetForm"
        >
          キャンセル
        </Button>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.register {
  max-height: calc(100vh - 130px);
  > .form > div > .space {
    border: 0.5px solid #c7c7c7;
  }

  .reason-register::placeholder {
    text-align: right;
    vertical-align: bottom;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 5px 2px 0;
    font-size: 10px;
  }
}
</style>
