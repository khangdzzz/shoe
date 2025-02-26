<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { Eye, EyeOff } from 'lucide-vue-next';
import * as z from 'zod';
import type { PostalCode } from '~/models/masterData';
import { LoaderCircle } from 'lucide-vue-next';
import type { CompanyUpdateBody } from '~/models/company';
import {
  getPasswordRules,
  getTypeRegisterPayment,
  isAdminUpdatePaymentMethod,
  validateRequiredAndLimit
} from '~/helps';

interface InitialFormValues {
  [key: string]: any;
}

const router = useRouter();
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
const isRedirectPage = ref(false);
const isAdminUpdatePayment = ref(false);
const typeRegisterPayment = ref('');
const timeChangePaymentMethod = ref('');

const currentUser = computed(() => {
  isAdminUpdatePayment.value = isAdminUpdatePaymentMethod();
  typeRegisterPayment.value = getTypeRegisterPayment() ?? PAYMENT_METHOD_TYPES.creditCard;
  timeChangePaymentMethod.value = authStore.currentUser?.company.paymentMethodUpdatedAt ?? '';
  return authStore.currentUser;
});

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
    confirmPassword: getPasswordRules().optional().or(z.literal('')),
    kaigoSoftware: z
      .string(formatMessage(MESSAGES.ERR002, FIELDS.kaigoSoftware))
      .min(1, messageRequired(FIELDS.kaigoSoftware)),
    kaipokeCompanyId: validateRequiredAndLimit(FIELDS.kaipokeCompanyId, 100),
    kaipokeUserId: validateRequiredAndLimit(FIELDS.kaipokeUserId, 100),
    kaipokeUserPassword: z
      .string(formatMessage(MESSAGES.ERR001, FIELDS.kaipokeUserPassword))
      .min(1, messageRequired(FIELDS.kaipokeUserPassword)),
    paymentMethod: z.string().optional()
  })
);

const {
  handleSubmit,
  values: formValues,
  setFieldValue
} = useForm({
  validationSchema: formSchema
});

const initDataUser = () => {
  if (currentUser.value) {
    const { company } = currentUser.value;

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
    setFieldValue('paymentMethod', company.paymentMethod ?? PAYMENT_METHOD_TYPES.creditCard);
    setFieldValue('email', company.email);

    if (company.isValidAccountTransfer) {
      setFieldValue('paymentMethod', PAYMENT_METHOD_TYPES.accountTransfer);
    }

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
  isMatchPassword.value = password.value === confirmPassword.value;
});

const isDialogOpenUpdateInfo = ref(false);
const isDialogOpenDeleteInfo = ref(false);
const isDialogOpenRegisterInfo = ref(false);

const closeDialog = () => {
  isDialogOpenUpdateInfo.value = false;
};

watch(
  formValues,
  () => {
    changeFields.value = [];

    Object.keys(formValues).forEach((field) => {
      if ((formValues as any)[field] !== initialFormValues.value[field] && field !== 'confirmPassword') {
        if (field === 'password' && (formValues as any)[field] === '') return;

        const japaneseFields = FIELDS[field as keyof typeof FIELDS];
        changeFields.value.push(japaneseFields);
      }
    });
  },
  {
    deep: true
  }
);

watch(
  () => formValues.paymentMethod,
  async (newValue) => {
    if (newValue != typeRegisterPayment.value) {
      typeRegisterPayment.value = newValue!;
      const timeUpdate = formatDate(new Date().toString(), 'YYYY-MM-DD HH:mm:ss');
      timeChangePaymentMethod.value = timeUpdate;

      const body = {
        ...initialFormValues.value,
        paymentMethod: newValue,
        paymentMethodUpdatedAt: timeUpdate
      };

      await companyStore.updateCompanyInformation(body as CompanyUpdateBody);

      const currentRoute = router.currentRoute.value;
      router.replace({
        path: currentRoute.path,
        query: { ...currentRoute.query, refresh: Date.now() }
      });
    }
  }
);

const onSubmit = handleSubmit(
  async (values) => {
    if (!isMatchPassword.value) {
      const message = confirmPassword.value ? MESSAGES.ERR006 : messageRequired(FIELDS.confirmPassword).message;
      system.setNotify({
        message: message,
        type: TYPE_MESSAGE.error
      });
      return;
    }

    isDialogOpenUpdateInfo.value = true;
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

const onUpdateUserInformation = async () => {
  system.clearNotify();

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

  redirectPageAfterAction('更新に成功しました');
};

const redirectPageAfterAction = (message: string) => {
  isRedirectPage.value = true;
  redirectPage('/user-list');

  system.setNotify({
    message: message,
    type: TYPE_MESSAGE.success
  });
};

const deleteUserInformation = async () => {
  system.clearNotify();

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

const isShowBtnRegisterCreditCard = () => {
  return typeRegisterPayment.value == PAYMENT_METHOD_TYPES.creditCard ? true : false;
};

const getPaymentValue = (paymentMethod: { value: string; type: string }) => {
  const paymentInfo = currentUser.value?.paymentMethodInfo;
  if (paymentMethod.type === PAYMENT_METHOD_TYPES.creditCard && paymentInfo) return paymentInfo.ccDisplayName;

  return paymentMethod.value;
};
</script>

<template>
  <div class="login-page flex flex-col !h-[100vh] overflow-hidden">
    <div class="flex justify-between mt-[15px]">
      <ShareErrorMessage
        class="pl-[64px]"
        v-if="!isRedirectPage"
      />
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
      @update="onUpdateUserInformation"
    />

    <MypageModalConfirmDeleteUser
      :isOpen="isDialogOpenDeleteInfo"
      @close="() => (isDialogOpenDeleteInfo = false)"
      @update="deleteUserInformation"
    />

    <MypageModalInforRegisterBank
      :is-open="isDialogOpenRegisterInfo"
      @close="() => (isDialogOpenRegisterInfo = false)"
    ></MypageModalInforRegisterBank>

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
                          v-model="password"
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
              <div class="label w-[160px] flex gap-5 items-center flex-shrink-0">
                <div class="flex flex-col">
                  <span class="text-xs">パスワード</span>
                  <span>（確認用）</span>
                </div>
              </div>
              <FormField
                v-slot="{ componentField, errors }"
                name="confirmPassword"
              >
                <FormItem class="w-[100%]">
                  <div class="relative !m-[0px]">
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
                <span class="w-[160px] flex items-center flex-shrink-0">決済方法 </span>
                <div class="relative w-[100%] !m-[0px] flex gap-10">
                  <FormControl>
                    <Select
                      v-bind="componentField"
                      :disabled="currentUser?.company.isValidAccountTransfer"
                    >
                      <SelectTrigger
                        class="!w-[70%]"
                        :class="{
                          'border-red-500': errors.length && !componentField.modelValue
                        }"
                      >
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem
                          :value="`${paymentMethod.type}`"
                          v-for="paymentMethod of PAYMENT_METHOD_OPTIONS_LIST"
                        >
                          {{ getPaymentValue(paymentMethod) }}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <div class="!m-[0px]">
                    <PaymentFormLinkType v-if="isShowBtnRegisterCreditCard()" />
                    <div
                      v-else
                      class="flex"
                    >
                      <Button
                        type="button"
                        class="flex self-center w-[220px]"
                        @click="isDialogOpenRegisterInfo = true"
                      >
                        申し込み用紙ダウンロード
                      </Button>
                    </div>
                  </div>
                  <div
                    class="absolute top-[30px]"
                    v-if="!!timeChangePaymentMethod"
                  >
                    <span class="text-[10px]">更新時間: {{ timeChangePaymentMethod || 'N/A' }}</span>
                  </div>
                </div>
              </FormItem>
            </FormField>
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
