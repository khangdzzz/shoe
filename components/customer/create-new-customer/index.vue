<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { Eye, EyeOff } from 'lucide-vue-next';
import * as z from 'zod';
import type { PostalCode } from '~/models/masterData';
import { LoaderCircle } from 'lucide-vue-next';
import { getPasswordRules, validateRequiredAndLimit } from '~/helps';

const dataInit = useFetchDataInit();
const system = useSystemStore();
const companyAdminStore = useCompanyAdminStore();
const { redirectPage } = useRedirectPage();

const passwordVisible = ref(false);
const postalCode = ref<PostalCode>();

const kaipokeUserPasswordVisible = ref(false);

const kaigoSoftware = computed(() => dataInit.masterData?.kaigoSoftwares);

const isLoading = ref(false);
const isLoadPostalCode = ref(false);

const isRemainOldPlan = ref(false);

const isRedirectPage = ref(false);

const formSchema = toTypedSchema(
  z.object({
    companyName: validateRequiredAndLimit(FIELDS.companyName, 250),
    companyNameKana: validateRequiredAndLimit(FIELDS.companyNameKana, 250, true),
    companyPostCode: validateRequiredAndLimit(FIELDS.companyPostCode, 10),
    companyAddress: validateRequiredAndLimit(FIELDS.companyAddress, 250),
    frontPicPosition: validateRequiredAndLimit(FIELDS.frontPicPosition, 100),
    frontPicFamilyName: validateRequiredAndLimit(FIELDS.frontPicFamilyName, 100),
    frontPicGivenName: validateRequiredAndLimit(FIELDS.frontPicGivenName, 100),
    frontPicFamilyNameKana: validateRequiredAndLimit(FIELDS.frontPicFamilyNameKana, 100, true),
    frontPicGivenNameKana: validateRequiredAndLimit(FIELDS.frontPicGivenNameKana, 100, true),
    picPosition: validateRequiredAndLimit(FIELDS.picPosition, 100),
    picFamilyName: validateRequiredAndLimit(FIELDS.picFamilyName, 100),
    picGivenName: validateRequiredAndLimit(FIELDS.picGivenName, 100),
    picFamilyNameKana: validateRequiredAndLimit(FIELDS.picFamilyNameKana, 100, true),
    picGivenNameKana: validateRequiredAndLimit(FIELDS.picGivenNameKana, 100, true),
    phoneNumber: validateRequiredAndLimit(FIELDS.phoneNumber, 20),
    email: validateRequiredAndLimit(FIELDS.email, 250),
    password: getPasswordRules(messageRequired(FIELDS.password)),
    kaigoSoftware: z
      .string(formatMessage(MESSAGES.ERR002, FIELDS.kaigoSoftware))
      .min(1, messageRequired(FIELDS.kaigoSoftware)),
    kaipokeCompanyId: validateRequiredAndLimit(FIELDS.kaipokeCompanyId, 100),
    kaipokeUserId: validateRequiredAndLimit(FIELDS.kaipokeUserId, 100),
    kaipokeUserPassword: z
      .string(messageRequired(FIELDS.kaipokeUserPassword))
      .min(1, messageRequired(FIELDS.kaipokeUserPassword)),
    paymentMethod: z.string().default(PAYMENT_METHOD_TYPES.bankWithdrawal)
  })
);

const {
  handleSubmit,
  values: formValues,
  setFieldValue
} = useForm({
  validationSchema: formSchema
});

const toggleKaipokeUserPasswordVisibility = () => {
  kaipokeUserPasswordVisible.value = !kaipokeUserPasswordVisible.value;
};

const toggleUserPasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
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

const onSubmit = handleSubmit(
  async (values) => {
    system.clearNotify();

    isLoading.value = true;

    const body = {
      ...values,
      keepLastPlanContentFlg: isRemainOldPlan.value ? 1 : 0
    };

    await companyAdminStore.createNewCompany(body);

    isLoading.value = false;

    if (!system.notify?.message) {
      redirectPageAfterAction('顧客情報を登録しました');
    }
  },
  ({ errors }) => {
    const fields = Object.keys(FIELDS);

    const message = fields.map((field) => errors[field as keyof typeof errors]).find(Boolean) ?? '';

    system.setNotify({
      message,
      type: TYPE_MESSAGE.error
    });
  }
);

const redirectPageAfterAction = (message: string) => {
  isRedirectPage.value = true;
  redirectPage('/customer');

  system.setNotify({
    message: message,
    type: TYPE_MESSAGE.success
  });
};
</script>

<template>
  <div class="login-page flex flex-col !h-[100vh] overflow-hidden relative">
    <div class="flex justify-between mt-[15px]">
      <ShareErrorMessage
        class="pl-[64px]"
        v-if="!isRedirectPage"
      />
    </div>
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
                  class="w-[160px]"
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
                  class="w-[160px]"
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
                  class="w-[160px] flex"
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
                  class="w-[160px]"
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
                  class="w-[160px] flex pt-[14px] items-baseline"
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
                      <span class="label flex w-[19%]">お名前</span>
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
                    <div class="pic-position flex gap-5 items-center w-[50%]"></div>
                    <div class="pic-name flex items-center gap-5 w-[50%]">
                      <span class="label flex w-[19%]">フリガナ</span>
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
                  class="w-[160px] flex pt-[14px] items-baseline"
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
                      <span class="label flex w-[19%]">お名前</span>
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
                    <div class="pic-position flex gap-5 items-center w-[50%]"></div>
                    <div class="pic-name flex items-center gap-5 w-[50%]">
                      <span class="label flex w-[19%]">フリガナ</span>
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
                  class="w-[160px]"
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
                  class="w-[160px]"
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
              name="password"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="パスワード"
                  class="w-[160px]"
                />
                <div class="relative w-[82%] !m-[0px]">
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
                        aria-label="Toggle password visibility"
                        @click="toggleUserPasswordVisibility"
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
              v-slot="{ componentField, errors, meta }"
              name="kaigoSoftware"
            >
              <FormItem class="relative flex gap-5">
                <ShareRequireLabel
                  label="介護ソフト選択"
                  class="w-[160px]"
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
                  class="w-[160px]"
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
                  class="w-[160px]"
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
                  class="w-[160px]"
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
                  class="w-[160px]"
                />
                <div class="relative w-[82%] !m-[0px]">
                  <FormControl>
                    <RadioGroup
                      class="flex gap-5"
                      v-bind="componentField"
                    >
                      <FormItem
                        class="flex items-center space-y-0 gap-x-3"
                        v-for="paymentMethod in PAYMENT_METHOD_OPTIONS_LIST"
                      >
                        <FormControl>
                          <RadioGroupItem :value="paymentMethod.type" />
                        </FormControl>
                        <span>{{ paymentMethod.value }}</span>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </div>
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField, errors }"
              name="remainOldPlan"
            >
              <FormItem class="flex gap-5">
                <span class="w-[160px] flex items-center">前回の計画書内容を保持する</span>
                <div class="relative w-[82%] !m-[0px] flex gap-2 items-center">
                  <span>OFF</span>
                  <Switch v-model:checked="isRemainOldPlan" />
                  <span>ON</span>
                </div>
              </FormItem>
            </FormField>
          </div>
        </div>
      </div>

      <div class="flex max-w-[900px] justify-between py-[20px]">
        <div class="flex gap-5">
          <Button
            type="button"
            variant="cancel_btn"
            class="flex self-center"
            @click="redirectPage('/customer')"
          >
            キャンセル
          </Button>

          <Button
            variant="export"
            class="delete flex self-center"
          >
            登録
          </Button>
        </div>
      </div>
    </form>

    <ShareLoading v-if="isLoading" />
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
