<script setup lang="ts">
import Button from '~/components/ui/button/Button.vue';
import { LoaderCircle } from 'lucide-vue-next';
import { getTypeRegisterPayment } from '~/helps';

const companyPaymentStore = useCompanyPaymentStore();
const authStore = useAuthStore();
const system = useSystemStore();

// Form data
const isSubmitting = ref(false);
const isLoading = ref(false);
const hasError = ref(false);
const errorMessage = ref('');

const successUrl = ref('');
const cancelUrl = ref('');
const errorUrl = ref('');
const pageconUrl = ref('');

// Payment parameters
const merchantId = ref('');
const serviceId = ref('');
const custCode = ref('');
const requestDate = ref('');
const spsHashcode = ref('');
const formEndpoint = ref('');

const currentUser = computed(() => authStore.currentUser);

const buttonText = computed(() => {
  const isCreditCard = getTypeRegisterPayment() === PAYMENT_METHOD_TYPES.creditCard;
  if (currentUser.value?.isHasPaymentMethod && isCreditCard) return '支払い方法を変更する';
  return '支払い方法を登録する';
});

// Fetch payment parameters from API
const fetchPaymentParams = async () => {
  try {
    isLoading.value = true;
    hasError.value = false;
    errorMessage.value = '';

    const response = await companyPaymentStore.generatePaymentLinkTypeParams();

    // Update values from API response
    merchantId.value = response.merchantId;
    serviceId.value = response.serviceId;
    custCode.value = response.custCode;
    spsHashcode.value = response.hashCode;
    formEndpoint.value = response.endPoint + '/f04/FepPayInfoReceive.do';
    requestDate.value = response.requestDate;
    successUrl.value = response.isSuccessUrl;
    cancelUrl.value = response.isCancelUrl;
    errorUrl.value = response.isFailureUrl;
    pageconUrl.value = response.notificationUrl;

    return true;
  } catch (error) {
    hasError.value = true;
    system.setNotify({
      type: TYPE_MESSAGE.error,
      message: MESSAGES.ERR008
    });
    return false;
  } finally {
    isLoading.value = false;
  }
};

// Handle form submission
const handleSubmit = async (event: Event) => {
  try {
    isSubmitting.value = true;

    // Fetch parameters first
    const success = await fetchPaymentParams();
    if (!success) {
      return;
    }

    // Validate parameters
    if (!merchantId.value || !serviceId.value || !custCode.value) {
      throw new Error(MESSAGES.ERR008);
    }

    // Submit the form programmatically
    const form = event.target as HTMLFormElement;
    form.submit();
  } catch (error) {
    hasError.value = true;
    system.setNotify({
      type: TYPE_MESSAGE.error,
      message: MESSAGES.ERR008
    });
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <form
    class="payment-form"
    :action="formEndpoint"
    method="POST"
    @submit.prevent="handleSubmit"
  >
    <input
      type="hidden"
      name="pay_method"
      value="credit"
    />
    <input
      type="hidden"
      name="merchant_id"
      :value="merchantId"
    />
    <input
      type="hidden"
      name="service_id"
      :value="serviceId"
    />
    <input
      type="hidden"
      name="cust_code"
      :value="custCode"
    />
    <input
      type="hidden"
      name="sps_cust_no"
      value=""
    />
    <input
      type="hidden"
      name="sps_payment_no"
      value=""
    />
    <input
      type="hidden"
      name="terminal_type"
      value="0"
    />

    <input
      type="hidden"
      name="success_url"
      :value="successUrl"
    />
    <input
      type="hidden"
      name="cancel_url"
      :value="cancelUrl"
    />
    <input
      type="hidden"
      name="error_url"
      :value="errorUrl"
    />
    <input
      type="hidden"
      name="pagecon_url"
      :value="pageconUrl"
    />
    <input
      type="hidden"
      name="free1"
      value=""
    />
    <input
      type="hidden"
      name="free2"
      value=""
    />
    <input
      type="hidden"
      name="free3"
      value=""
    />
    <input
      type="hidden"
      name="free_csv"
      value=""
    />
    <input
      type="hidden"
      name="request_date"
      :value="requestDate"
    />

    <input
      type="hidden"
      name="limit_second"
      value="60"
    />
    <input
      type="hidden"
      name="sps_hashcode"
      :value="spsHashcode"
    />

    <div>
      <Button
        type="submit"
        class="flex self-center w-[220px] !m-[0px]"
        :disabled="isSubmitting || isLoading"
      >
        <LoaderCircle
          v-if="isLoading"
          class="w-4 h-4 mr-2 animate-spin"
        />
        {{ buttonText }}
      </Button>
    </div>

    <div
      v-if="hasError"
      class="ml-4"
    >
      {{ errorMessage }}
    </div>
  </form>
</template>
