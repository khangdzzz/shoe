<script setup lang="ts">
definePageMeta({
  layout: false
});

import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { Eye, EyeOff } from 'lucide-vue-next';
import * as z from 'zod';
import type { PostalCode } from '~/models/masterData';
import { LoaderCircle } from 'lucide-vue-next';
import { getPasswordRules } from '~/helps';

const route = useRoute();
const dataInit = useFetchDataInit();
const system = useSystemStore();
const company = useCompanyStore();
const jwt = useJwt();
const { redirectPage } = useRedirectPage();

const email = ref('');
const token = route.query.token;

const postalCode = ref<PostalCode>();

const isLoadPostalCode = ref(false);
const isLoadingRegister = ref(false);

const password = ref('');
const isMatchPassword = ref(true);
const confirmPassword = ref('');

const kaipokeUserPasswordVisible = ref(false);
const passwordConfirmVisible = ref(false);
const passwordVisible = ref(false);

const katakanaRegex = /^[\u30A0-\u30FF]+$/;

onMounted(() => {
  if (!token) {
    redirectPage('/login');
  }

  jwt.checkTokenValid('email', token?.toString() ?? '');

  const tokenDecode = jwt.parseJwt(token?.toString() ?? '');

  if (!tokenDecode || notify.value?.message) {
    setTimeout(() => {
      redirectPage('/login');
    }, 1000);
  }

  email.value = tokenDecode?.email ?? '';

  setFieldValue('email', email.value);
});

watch(
  () => system.termHtml,
  () => {
    if (system.termHtml) {
      const terms = system.termHtml.replace(/<br>/g, '\n');

      setFieldValue('terms', terms);
    }
  }
);

const kaigoSoftware = computed(() => dataInit.masterData?.kaigoSoftwares);

const notify = computed(() => system.notify);

const formSchema = toTypedSchema(
  z.object({
    companyName: z
      .string(messageRequired(FIELDS.companyName))
      .min(1, messageRequired(FIELDS.companyName))
      .max(255, MESSAGES.ERR011),
    companyNameKana: z
      .string(messageRequired(FIELDS.companyNameKana))
      .min(1, messageRequired(FIELDS.companyNameKana))
      .regex(katakanaRegex, { message: MESSAGES.ERR005 }),
    companyPostCode: z.string(messageRequired(FIELDS.companyPostCode)).min(1, FIELDS.companyPostCode),
    companyAddress: z.string(messageRequired(FIELDS.companyAddress)).min(1, FIELDS.companyAddress),
    frontPicPosition: z.string(messageRequired(FIELDS.frontPicPosition)).min(1, FIELDS.frontPicPosition),
    frontPicFamilyName: z.string(messageRequired(FIELDS.frontPicFamilyName)).min(1, FIELDS.frontPicFamilyName),
    frontPicGivenName: z.string(messageRequired(FIELDS.frontPicGivenName)).min(1, FIELDS.frontPicGivenName),
    frontPicFamilyNameKana: z
      .string(messageRequired(FIELDS.frontPicFamilyNameKana))
      .min(1, FIELDS.frontPicFamilyNameKana)
      .regex(katakanaRegex, { message: MESSAGES.ERR005 }),
    frontPicGivenNameKana: z
      .string(messageRequired(FIELDS.frontPicGivenNameKana))
      .min(1, FIELDS.frontPicGivenNameKana)
      .regex(katakanaRegex, { message: MESSAGES.ERR005 }),
    picPosition: z.string(messageRequired(FIELDS.picPosition)).min(1, FIELDS.picPosition),
    picFamilyName: z.string(messageRequired(FIELDS.picFamilyName)).min(1, FIELDS.picFamilyName),
    picGivenName: z.string(messageRequired(FIELDS.picGivenName)).min(1, FIELDS.picGivenName),
    picFamilyNameKana: z
      .string(messageRequired(FIELDS.picFamilyNameKana))
      .min(1, FIELDS.picFamilyNameKana)
      .regex(katakanaRegex, { message: MESSAGES.ERR005 }),
    picGivenNameKana: z
      .string(messageRequired(FIELDS.picGivenNameKana))
      .min(1, FIELDS.picGivenNameKana)
      .regex(katakanaRegex, { message: MESSAGES.ERR005 }),
    phoneNumber: z.string(messageRequired(FIELDS.phoneNumber)).min(1, FIELDS.phoneNumber),
    email: z.string(messageRequired(FIELDS.email)).min(1, FIELDS.email),
    password: getPasswordRules(messageRequired(FIELDS.password)),
    confirmPassword: getPasswordRules(messageRequired(FIELDS.confirmPassword)),
    kaigoSoftware: z.string(formatMessage(MESSAGES.ERR002, FIELDS.kaigoSoftware)).min(1, FIELDS.kaigoSoftware),
    kaipokeCompanyId: z.string(messageRequired(FIELDS.kaipokeCompanyId)).min(1, FIELDS.kaipokeCompanyId),
    kaipokeUserId: z.string(messageRequired(FIELDS.kaipokeUserId)).min(1, FIELDS.kaipokeUserId),
    kaipokeUserPassword: z.string(messageRequired(FIELDS.kaipokeUserPassword)).min(8, { message: MESSAGES.ERR007 }),
    registerReason: z.string(messageRequired(FIELDS.registerReason)).min(1, FIELDS.registerReason).max(1000),
    terms: z.string(messageRequired(FIELDS.terms)).min(1, FIELDS.terms),
    term: z.boolean({ message: MESSAGES.ERR003 }).refine((value) => value, {
      message: MESSAGES.ERR003
    })
  })
);

const {
  handleSubmit,
  values: formValues,
  setFieldValue
} = useForm({
  validationSchema: formSchema
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

const onSubmit = handleSubmit(
  async (values) => {
    system.clearNotify();

    if (!isMatchPassword.value) {
      system.setNotify({
        message: MESSAGES.ERR006,
        type: TYPE_MESSAGE.error
      });
      return;
    }

    isLoadingRegister.value = true;

    const { term, terms, ...rest } = values;

    const body = {
      ...rest,
      kaigoSoftware: parseInt(values.kaigoSoftware),
      verifyToken: token?.toString() ?? ''
    };

    await company.registerNewUser(body);

    if (!notify.value?.message) {
      redirectPage('/register/success');
    }

    isLoadingRegister.value = false;
  },
  ({ errors }) => {
    const message = Object.values(errors)[0];
    system.setNotify({
      message,
      type: TYPE_MESSAGE.error
    });
  }
);
</script>

<template>
  <div class="login-page flex flex-col items-center justify-center !h-[100vh] overflow-hidden">
    <div class="logo">LOGO</div>
    <div class="form flex flex-col gap-[5px] w-[770px] bg-white px-12 pt-4 pb-8 h-[90%]">
      <ShareErrorMessage />
      <h1 class="text-sm font-bold mb-[20px]">会員登録</h1>

      <form
        class="register flex flex-col gap-[25px]"
        @submit="onSubmit"
      >
        <div class="form flex flex-col gap-[25px] pb-[20px] overflow-y-auto scroll">
          <ShareRequireLabel
            label="必須項目です"
            position="left"
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
                <div class="relative w-[71%] !m-[0px] !mr-[25px]">
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
                <div class="relative w-[71%] !m-[0px] !mr-[25px]">
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
                <div class="relative w-[71%] !m-[0px] !mr-[25px]">
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
                <div class="flex flex-col gap-[15px] w-[71%]">
                  <div class="flex gap-5 items-center !m-[0px]">
                    <div class="pic-position flex gap-5 items-center w-[90%]">
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
                    <div class="pic-name flex items-center gap-5">
                      <span class="label flex w-[54%]">お名前</span>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="frontPicFamilyName"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"
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
                                class="placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"
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
                    <div class="pic-position flex gap-5 items-center w-[90%]"></div>
                    <div class="pic-name flex items-center gap-5">
                      <span class="label flex w-[54%]">フリガナ</span>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="frontPicFamilyNameKana"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"
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
                                class="placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"
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
                <div class="flex flex-col gap-[15px] w-[71%]">
                  <div class="flex gap-5 items-center !m-[0px]">
                    <div class="pic-position flex gap-5 items-center w-[90%]">
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

                    <div class="pic-name flex items-center gap-5">
                      <span class="label flex w-[54%]">お名前</span>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="picFamilyName"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"
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
                                class="placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"
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
                    <div class="pic-position flex gap-5 items-center w-[90%]"></div>
                    <div class="pic-name flex items-center gap-5">
                      <span class="label flex w-[54%]">フリガナ</span>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="picFamilyNameKana"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"
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
                                class="placeholder:flex placeholder:text-center text-center placeholder:text-[10px]"
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
                <div class="relative w-[40%] !m-[0px] !mr-[25px]">
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
                <div class="relative w-[71%] !m-[0px] !mr-[25px]">
                  <FormControl>
                    <Input
                      disabled
                      type="text"
                      v-bind="componentField"
                      class="bg-[#ccc]"
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
                <ShareRequireLabel
                  label="パスワード"
                  class="w-[145px]"
                />
                <div class="relative w-[71%] !m-[0px] !mr-[25px]">
                  <FormControl>
                    <div class="relative">
                      <Input
                        :type="passwordVisible ? 'text' : 'password'"
                        v-bind="componentField"
                        placeholder="英小文字、数字を含む、半角英数字８文字以上"
                        :class="{
                          'border-red-500': errors.length
                        }"
                        class="placeholder:text-[10px]"
                        v-model="password"
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
                  <span class="text-red-500">※</span>
                </div>
                <div class="relative w-[71%] !m-[0px] !mr-[25px]">
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
                <div class="relative w-[71%] !m-[0px] !mr-[25px]">
                  <FormControl>
                    <Select v-bind="componentField">
                      <SelectTrigger
                        :class="{
                          'border-red-500': errors.length && !componentField.modelValue
                        }"
                      >
                        <SelectValue placeholder="" />
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
                <div class="relative w-[71%] !m-[0px] !mr-[25px]">
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
                <div class="relative w-[71%] !m-[0px] !mr-[25px]">
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
                <div class="relative w-[71%] !m-[0px] !mr-[25px]">
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
              name="registerReason"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="ご登録の切っ掛け"
                  class="w-[145px]"
                />
                <div class="relative w-[71%] !m-[0px] !mr-[25px]">
                  <FormControl>
                    <Textarea
                      v-bind="componentField"
                      :class="{
                        'border-red-500': errors.length && !componentField.modelValue
                      }"
                      placeholder="1000文字以内"
                      class="reason-register relative resize-none"
                    />
                  </FormControl>
                </div>
              </FormItem>
            </FormField>
          </div>

          <div class="space"></div>

          <div class="terms contact flex flex-col">
            <FormField
              v-slot="{ componentField, errors }"
              name="terms"
            >
              <FormItem class="flex gap-5">
                <span class="w-[145px] flex items-center">利用規約</span>
                <div class="relative w-[71%] !m-[0px] !mr-[25px]">
                  <FormControl>
                    <Textarea
                      disabled
                      v-bind="componentField"
                      :class="{
                        'border-red-500': errors.length && !componentField.modelValue
                      }"
                      class="resize-none h-[100px] bg-[#fff] text-black disabled:opacity-80"
                    />
                  </FormControl>
                </div>
              </FormItem>
            </FormField>
            <FormField
              v-slot="{ value, handleChange, errors }"
              type="checkbox"
              name="term"
            >
              <FormItem class="flex gap-5">
                <div class="w-[145px]"></div>
                <div class="relative w-[71%] !m-[0px] !mr-[25px]">
                  <div class="flex gap-5 items-center !m-[0px] pt-[10px]">
                    <span class="label">利用規約確認</span>
                    <span class="text-red-500">※</span>
                    <Checkbox
                      :checked="value"
                      @update:checked="handleChange"
                      :class="{
                        'border-red-500': errors.length
                      }"
                    />
                  </div>
                </div>
              </FormItem>
            </FormField>
          </div>
        </div>

        <div class="flex gap-3 flex-col">
          <Button
            type="submit"
            class="flex self-center"
          >
            <LoaderCircle
              v-if="isLoadingRegister"
              class="w-4 h-4 mr-2 animate-spin"
            />
            アカウントを登録する
          </Button>

          <Button
            variant="cancel_btn"
            type="button"
            class="flex self-center min-w-[188px]"
            @click="redirectPage('/login')"
          >
            キャンセル
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.register {
  min-height: calc(100vh - 330px);
  > .form > .space {
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
