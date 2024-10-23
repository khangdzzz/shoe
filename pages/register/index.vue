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

const router = useRouter();
const route = useRoute();
const dataInit = useFetchDataInit();
const system = useSystemStore();

const email = route.query.email;
const token = route.query.token;
const postalCode = ref<PostalCode>();
const isLoadPostalCode = ref(false);

onMounted(() => {
  if (!email || !token) {
    router.push('/login');
  }
});

const kaigoSoftware = computed(() => {
  return dataInit.masterData?.kaigoSoftwares;
});

const errors = computed(() => {
  return system.errors;
});

const formSchema = toTypedSchema(
  z.object({
    companyName: z.string().min(1, { message: MESSAGES.notEmpty }),
    companyNameKana: z.string().min(1, { message: MESSAGES.notEmpty }),
    companyPostCode: z.string().min(1, { message: MESSAGES.notEmpty }),
    companyAddress: z.string().min(1, { message: MESSAGES.notEmpty }),
    frontPicPosition: z.string().min(1, { message: MESSAGES.notEmpty }),
    frontPicFamilyName: z.string().min(1, { message: MESSAGES.notEmpty }),
    frontPicGiveName: z.string().min(1, { message: MESSAGES.notEmpty }),
    frontPicFamilyNameKana: z.string().min(1, { message: MESSAGES.notEmpty }),
    frontPicGiveNameKana: z.string().min(1, { message: MESSAGES.notEmpty }),
    picPosition: z.string().min(1, { message: MESSAGES.notEmpty }),
    picFamilyName: z.string().min(1, { message: MESSAGES.notEmpty }),
    picGiveName: z.string().min(1, { message: MESSAGES.notEmpty }),
    picFamilyNameKana: z.string().min(1, { message: MESSAGES.notEmpty }),
    picGiveNameKana: z.string().min(1, { message: MESSAGES.notEmpty }),
    phoneNumber: z.string().min(1, { message: MESSAGES.notEmpty }),
    email: z
      .string()
      .min(1, { message: MESSAGES.notEmpty })
      .default(email?.toString() ?? ''),
    password: z.string().min(8, { message: MESSAGES.notEmpty }),
    confirmPassword: z.string().min(8, { message: MESSAGES.notEmpty }),
    kaigoSoftware: z.number().min(1, { message: MESSAGES.notEmpty }),
    kaipokeCompanyId: z.string().min(8, { message: MESSAGES.notEmpty }),
    kaipokeUserId: z.string().min(8, { message: MESSAGES.notEmpty }),
    kaipokeUserPassword: z.string().min(8, { message: MESSAGES.notEmpty }),
    registerReason: z.string().min(1, { message: MESSAGES.notEmpty }).max(1000),
    paymentMethod: z.string().min(1, { message: MESSAGES.notEmpty }),
    terms: z.string().min(1, { message: MESSAGES.notEmpty }),
    term: z.boolean().refine((val) => val === true, {
      message: 'You must accept the terms and conditions'
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

const passwordVisible = ref(false);
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

const passwordConfirmVisible = ref(false);
const togglePasswordConfirmVisibility = () => {
  passwordConfirmVisible.value = !passwordConfirmVisible.value;
};

const searchPostalCode = async () => {
  if (!formValues?.companyPostCode) {
    system.setError({
      message: '郵便番号が存在しません。',
      type: TYPE_MESSAGE.success
    });

    return;
  }
  isLoadPostalCode.value = true;

  const res = await system.searchPostalCode(formValues?.companyPostCode);

  if (res?.data) {
    postalCode.value = res.data;
    const companyAddress = res.data.prefecture + ' ' + res.data.city;

    setFieldValue('companyAddress', companyAddress);
  } else {
    system.setError({
      message: '郵便番号が存在しません。',
      type: TYPE_MESSAGE.error
    });
  }

  isLoadPostalCode.value = false;
};

const onSubmit = handleSubmit((values) => {
  console.log('values', values);
});
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
                    ログイン
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
                      <span class="label flex w-[50%]">お名前</span>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="frontPicFamilyName"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center text-[10px]"
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
                        name="frontPicGiveName"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center text-[10px]"
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
                      <span class="label flex w-[50%]">フリガナ</span>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="frontPicFamilyNameKana"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center text-[10px]"
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
                        name="frontPicGiveNameKana"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center text-[10px]"
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
                      <span class="label flex w-[50%]">お名前</span>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="picFamilyName"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center text-[10px]"
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
                        name="picGiveName"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center text-[10px]"
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
                      <span class="label flex w-[50%]">フリガナ</span>
                      <FormField
                        v-slot="{ componentField, errors }"
                        name="picFamilyNameKana"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center text-[10px]"
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
                        name="picGiveNameKana"
                      >
                        <FormItem class="flex gap-5">
                          <div class="relative !m-[0px]">
                            <FormControl>
                              <Input
                                type="text"
                                class="placeholder:flex placeholder:text-center text-center text-[10px]"
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
                  label="法人名"
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
                  label="メールアドレス"
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
                          'border-red-500': errors.length
                        }"
                        class="placeholder:text-[10px]"
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
                <FormControl>
                  <Select v-bind="componentField">
                    <SelectTrigger
                      class="!w-[71%]"
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
                </FormControl>
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
                </div>
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField, errors }"
              name="registerReason"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="カイポケ法人ID"
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

            <FormField
              v-slot="{ componentField, errors }"
              name="paymentMethod"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="決済方法"
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
          </div>

          <div class="space"></div>

          <div class="terms contact flex flex-col">
            <FormField
              v-slot="{ componentField, errors }"
              name="terms"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="カイポケ法人ID"
                  class="w-[145px]"
                />
                <div class="relative w-[71%] !m-[0px] !mr-[25px]">
                  <FormControl>
                    <Textarea
                      v-bind="componentField"
                      :class="{
                        'border-red-500': errors.length && !componentField.modelValue
                      }"
                      class="resize-none h-[100px]"
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
            アカウントを登録する
          </Button>

          <Button
            variant="cancel_btn"
            type="button"
            class="flex self-center min-w-[188px]"
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
