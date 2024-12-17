import type { PaymentLinkTypeParams } from '~/models/payment';

export const useCompanyPaymentStore = defineStore('companyPayment', () => {
  const generatePaymentLinkTypeParams = async (): Promise<PaymentLinkTypeParams> => {
    const { data } = await apis.archaic?.post('/generate-link-type-params', {});
    return data;
  };

  const cancelCurrentPaymentMethod = async (): Promise<any> => {
    return await apis.archaic?.post('/cancel-current-payment-method', {});
  };

  return {
    generatePaymentLinkTypeParams,
    cancelCurrentPaymentMethod
  };
});
