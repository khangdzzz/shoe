<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { Eye, EyeOff } from 'lucide-vue-next';
import * as z from 'zod';
import type { PostalCode } from '~/models/masterData';
import { LoaderCircle } from 'lucide-vue-next';
import { getPasswordRules, validateRequiredAndLimit } from '~/helps';

interface InitialFormValues {
  [key: string]: any;
}

const dataInit = useFetchDataInit();
const system = useSystemStore();
const route = useRoute();
const companyAdminStore = useCompanyAdminStore();
const { redirectPage } = useRedirectPage();

const postalCode = ref<PostalCode>();

const idCompany = ref('');

const isLoadPostalCode = ref(false);
const isLoadingInit = ref(false);

const activeStatus = ref<number>(0);

const isOpenDialogDelete = ref(false);
const isOpenDialogConfirmUpdate = ref(false);
const isOpenDialogExecutionUpdate = ref(false);

const initialFormValues = ref<InitialFormValues>({});
const changeFields = ref<string[]>([]);

const kaipokeUserPasswordVisible = ref(false);
const passwordVisible = ref(false);

const isRemainOldPlan = ref(false);

const kaigoSoftware = computed(() => dataInit.masterData?.kaigoSoftwares);

const companyUser = computed(() => companyAdminStore.companyUser);

const isDisableButton = computed(() => changeFields.value.length == 0);

const isRedirectPage = ref(false);

const timeVerifyPaymentMethod = ref('');

onMounted(async () => {
  isLoadingInit.value = true;

  idCompany.value = route.params.id as string;

  if (!idCompany) return redirectPage('/customer');

  await companyAdminStore.getCompanyById(Number(idCompany.value));

  if (companyUser.value) {
    initDataUser();
    activeStatus.value = companyUser.value.status;
  }

  isLoadingInit.value = false;
});

const initDataUser = () => {
  if (companyUser.value) {
    const user = companyUser.value;
    setFieldValue('companyName', user.companyName);
    setFieldValue('companyNameKana', user.companyNameKana);
    setFieldValue('companyPostCode', user.companyPostCode);
    setFieldValue('companyAddress', user.companyAddress);
    setFieldValue('phoneNumber', user.phoneNumber);
    setFieldValue('picFamilyName', user.picFamilyName);
    setFieldValue('picFamilyNameKana', user.picFamilyNameKana);
    setFieldValue('picGivenName', user.picGivenName);
    setFieldValue('picGivenNameKana', user.picGivenNameKana);
    setFieldValue('picPosition', user.picPosition);
    setFieldValue('frontPicFamilyName', user.frontPicFamilyName);
    setFieldValue('frontPicFamilyNameKana', user.frontPicFamilyNameKana);
    setFieldValue('frontPicGivenName', user.frontPicGivenName);
    setFieldValue('frontPicGivenNameKana', user.frontPicGivenNameKana);
    setFieldValue('frontPicPosition', user.frontPicPosition);
    setFieldValue('kaipokeUserId', user.kaipokeUserId);
    setFieldValue('kaipokeUserPassword', user.kaipokeUserPassword);
    setFieldValue('kaipokeCompanyId', user.kaipokeCompanyId);
    setFieldValue('paymentMethod', user.paymentMethod);
    setFieldValue('kaigoSoftware', user.kaigoSoftware.toString());
    setFieldValue('email', user.email);
    setFieldValue('isValidAccountTransfer', user.isValidAccountTransfer);

    isRemainOldPlan.value = user.keepLastPlanContentFlg == 1 ? true : false;

    initialFormValues.value = { ...formValues };

    timeVerifyPaymentMethod.value = user.accountTransferValidatedAt ?? '';
  }
};

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
    password: getPasswordRules().optional().or(z.literal('')),
    kaigoSoftware: z
      .string(formatMessage(MESSAGES.ERR002, FIELDS.kaigoSoftware))
      .min(1, messageRequired(FIELDS.kaigoSoftware)),
    kaipokeCompanyId: validateRequiredAndLimit(FIELDS.kaipokeCompanyId, 100),
    kaipokeUserId: validateRequiredAndLimit(FIELDS.kaipokeUserId, 100),
    kaipokeUserPassword: z
      .string(messageRequired(FIELDS.kaipokeUserPassword))
      .min(1, messageRequired(FIELDS.kaipokeUserPassword)),
    paymentMethod: z.string().nullable().optional(),
    isValidAccountTransfer: z.boolean().default(false).optional()
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

watch(
  [formValues, isRemainOldPlan],
  () => {
    changeFields.value = [];

    Object.keys(formValues).forEach((field) => {
      if (
        (formValues as any)[field] !== initialFormValues.value[field] &&
        field !== 'confirmPassword' &&
        field !== 'isValidAccountTransfer'
      ) {
        if (field === 'password' && (formValues as any)[field] === '') return;

        const japaneseFields = FIELDS[field as keyof typeof FIELDS];
        changeFields.value.push(japaneseFields);
      }
    });

    const keepLastPlanContentFlg = isRemainOldPlan.value ? 1 : 0;

    if (companyUser.value?.keepLastPlanContentFlg !== keepLastPlanContentFlg)
      changeFields.value.push(FIELDS.keepLastPlanContentFlg);
  },
  {
    deep: true
  }
);

const onSubmit = handleSubmit(
  async (values) => {
    isOpenDialogConfirmUpdate.value = true;
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

const updateCompanyCustomer = async (status?: number) => {
  system.clearNotify();

  isLoadingInit.value = true;
  const updatedFormValues = { ...formValues };
  const newPassword = updatedFormValues.password;

  delete updatedFormValues.password;

  const body = {
    ...updatedFormValues,
    keepLastPlanContentFlg: isRemainOldPlan.value ? 1 : 0,
    kaigoSoftware: Number(updatedFormValues.kaigoSoftware),
    ...(newPassword && { newPassword }),
    ...(status && { status })
  };

  await companyAdminStore.updateCompanyById(Number(idCompany.value), body).finally(() => {
    isLoadingInit.value = false;
    isOpenDialogConfirmUpdate.value = false;
  });

  if (!system.notify?.message) {
    redirectPageAfterAction('顧客情報を更新しました');
  }
};

const onHandleDelete = async () => {
  system.clearNotify();

  isLoadingInit.value = true;
  isOpenDialogDelete.value = false;

  const ids = [Number(idCompany.value)];

  if (!ids.length) {
    system.setNotify({
      message: '会社を削除できません。',
      type: TYPE_MESSAGE.error
    });
    isLoadingInit.value = false;
    return;
  }

  await companyAdminStore.bulkDelete(ids);

  isLoadingInit.value = false;

  if (!system.notify?.message) {
    redirectPageAfterAction('顧客情報を削除しました');
  }
};

const onHandleExecutionUpdate = async () => {
  system.clearNotify();

  isLoadingInit.value = true;
  isOpenDialogExecutionUpdate.value = false;
  const status = activeStatus.value === 1 ? 2 : 1;

  await companyAdminStore.updateStatusCompanyUser(Number(idCompany.value), { status });

  if (!system.notify?.message) {
    redirectPageAfterAction('顧客情報を更新しました');
  }

  isLoadingInit.value = false;
};

const redirectPageAfterAction = (message: string) => {
  isRedirectPage.value = true;
  redirectPage('/customer');

  system.setNotify({
    message: message,
    type: TYPE_MESSAGE.success
  });
};

const verifyValidPayment = async (value: boolean) => {
  setFieldValue('isValidAccountTransfer', value);

  timeVerifyPaymentMethod.value = formatDate(new Date().toString(), 'YYYY-MM-DD HH:mm:ss');

  const body = {
    ...initialFormValues.value,
    accountTransferValidatedAt: timeVerifyPaymentMethod.value,
    isValidAccountTransfer: value
  };

  await companyAdminStore.updateCompanyById(Number(idCompany.value), body);
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
    <CustomerModalConfirmUpdateCustomer
      :isOpen="isOpenDialogConfirmUpdate"
      :fields="changeFields"
      @close="isOpenDialogConfirmUpdate = false"
      @update="updateCompanyCustomer"
    />

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
            <div class="flex gap-5 items-center">
              <ShareRequireLabel
                label="法人名"
                class="w-[160px] flex-shrink-0"
              />
              <ShareInput :name-bind="'companyName'" />
            </div>

            <div class="flex gap-5 items-center">
              <ShareRequireLabel
                label="フリガナ"
                class="w-[160px] flex-shrink-0"
              />
              <ShareInput :name-bind="'companyNameKana'" />
            </div>
          </div>

          <div class="space"></div>

          <div class="information flex flex-col gap-5">
            <div class="flex gap-5 items-center">
              <ShareRequireLabel
                label="郵便番号"
                class="w-[160px] flex"
              />

              <ShareInput
                :name-bind="'companyPostCode'"
                :class-form="'w-[20%]'"
              />

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

            <div class="flex gap-5 items-center">
              <ShareRequireLabel
                label="会社所在地"
                class="w-[160px] flex-shrink-0"
              />
              <ShareInput :name-bind="'companyAddress'" />
            </div>

            <FormField
              v-slot="{ componentField, errors }"
              name="frontPicPosition"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="代表者"
                  class="w-[160px] flex pt-[14px] items-baseline flex-shrink-0"
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
                      <span class="label flex w-[19%] flex-shrink-0">お名前</span>
                      <ShareInput
                        :name-bind="'frontPicFamilyName'"
                        :placeholder="'姓'"
                        :class-input="'text-center'"
                      />
                      <ShareInput
                        :name-bind="'frontPicGivenName'"
                        :placeholder="'名'"
                        :class-input="'text-center'"
                      />
                    </div>
                  </div>

                  <div class="flex gap-5 items-center !m-[0px]">
                    <div class="pic-position flex gap-5 items-center w-[50%]"></div>
                    <div class="pic-name flex items-center gap-5 w-[50%]">
                      <span class="label flex w-[19%] flex-shrink-0">フリガナ</span>
                      <ShareInput
                        :name-bind="'frontPicFamilyNameKana'"
                        :placeholder="'せい'"
                        :class-input="'text-center'"
                      />
                      <ShareInput
                        :name-bind="'frontPicGivenNameKana'"
                        :placeholder="'めい'"
                        :class-input="'text-center'"
                      />
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
                  class="w-[160px] flex pt-[14px] items-baseline flex-shrink-0"
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
                      <span class="label flex w-[19%] flex-shrink-0">お名前</span>
                      <ShareInput
                        :name-bind="'picFamilyName'"
                        :placeholder="'姓'"
                        :class-input="'text-center'"
                      />

                      <ShareInput
                        :name-bind="'picGivenName'"
                        :placeholder="'名'"
                        :class-input="'text-center'"
                      />
                    </div>
                  </div>

                  <div class="flex gap-5 items-center !m-[0px]">
                    <div class="pic-position flex gap-5 items-center w-[50%]"></div>
                    <div class="pic-name flex items-center gap-5 w-[50%]">
                      <span class="label flex w-[19%] flex-shrink-0">フリガナ</span>
                      <ShareInput
                        :name-bind="'picFamilyNameKana'"
                        :placeholder="'せい'"
                        :class-input="'text-center'"
                      />
                      <ShareInput
                        :name-bind="'picGivenNameKana'"
                        :placeholder="'めい'"
                        :class-input="'text-center'"
                      />
                    </div>
                  </div>
                </div>
              </FormItem>
            </FormField>
          </div>

          <div class="space"></div>

          <div class="contact flex flex-col gap-6">
            <div class="flex gap-5 items-center">
              <ShareRequireLabel
                label="電話番号"
                class="w-[160px] flex-shrink-0"
              />
              <ShareInput
                :name-bind="'phoneNumber'"
                :class-form="'w-[40%]'"
              />
            </div>

            <div class="flex gap-5 items-center -mb-[12.5px]">
              <ShareRequireLabel
                label="メールアドレス"
                class="w-[160px] flex-shrink-0"
              />
              <ShareInput
                :name-bind="'email'"
                :description="'認証済みのメールアドレス'"
              />
            </div>

            <div class="flex gap-5 items-center">
              <div class="w-[160px] flex-shrink-0">
                <span>パスワード</span>
              </div>
              <FormField
                v-slot="{ componentField, errors }"
                name="password"
              >
                <FormItem class="w-[100%]">
                  <div class="relative !m-[0px]">
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
            </div>

            <div class="flex gap-5 items-center">
              <ShareRequireLabel
                label="介護ソフト選択"
                class="w-[160px] flex-shrink-0"
              />
              <FormField
                v-slot="{ componentField, errors, meta }"
                name="kaigoSoftware"
              >
                <FormItem class="w-[100%]">
                  <div class="!m-[0px]">
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
            </div>

            <div class="flex gap-5 items-center">
              <ShareRequireLabel
                label="カイポケ法人ID"
                class="w-[160px] flex-shrink-0"
              />
              <ShareInput :name-bind="'kaipokeCompanyId'" />
            </div>

            <div class="flex gap-5 items-center">
              <ShareRequireLabel
                label="カイポケユーザーID"
                class="w-[160px] flex-shrink-0"
              />
              <ShareInput :name-bind="'kaipokeUserId'" />
            </div>

            <div class="flex gap-5 items-center">
              <ShareRequireLabel
                label="カイポケパスワード"
                class="w-[160px] flex-shrink-0"
              />
              <FormField
                v-slot="{ componentField, errors }"
                name="kaipokeUserPassword"
              >
                <FormItem class="w-[100%]">
                  <div class="relative !m-[0px]">
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
            </div>

            <FormField
              v-slot="{ componentField, errors }"
              name="paymentMethod"
            >
              <FormItem class="flex gap-5">
                <ShareRequireLabel
                  label="決済方法"
                  class="w-[160px] flex-shrink-0"
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
              v-slot="{ value, handleChange }"
              type="checkbox"
              name="isValidAccountTransfer"
            >
              <FormItem class="flex gap-5">
                <span class="w-[160px] flex items-center flex-shrink-0"></span>
                <div
                  class="relative w-[82%] !m-[0px] flex gap-2 items-center"
                  v-if="formValues.paymentMethod === PAYMENT_METHOD_TYPES.accountTransfer"
                >
                  <Checkbox
                    :checked="value"
                    @update:checked="(value) => verifyValidPayment(value)"
                  />
                  <span>口座有効</span>
                  <span v-if="formValues.isValidAccountTransfer">{{ timeVerifyPaymentMethod || '' }}</span>
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

          <div
            class="delete flex self-center underline cursor-pointer"
            @click="() => (isOpenDialogDelete = true)"
          >
            削除
          </div>
        </div>
        <div class="flex gap-5">
          <Button
            type="submit"
            class="flex self-center"
            :disabled="isDisableButton"
          >
            変更
          </Button>

          <Button
            v-if="activeStatus !== 3"
            type="button"
            variant="export"
            class="delete flex self-center"
            @click="() => (isOpenDialogExecutionUpdate = true)"
          >
            停止・開始
          </Button>
        </div>
      </div>
    </form>
    <CustomerModalDelete
      :is-open="isOpenDialogDelete"
      @close="isOpenDialogDelete = false"
      @update="onHandleDelete"
    />
    <CustomerModalExecutionConfirm
      :is-open="isOpenDialogExecutionUpdate"
      :active-status="activeStatus"
      @close="isOpenDialogExecutionUpdate = false"
      @update="onHandleExecutionUpdate"
    />
    <ShareLoading v-if="isLoadingInit" />
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
