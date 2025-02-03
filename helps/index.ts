import { z } from 'zod';

export const checkTargetYearMonthMatchCurrentYearMonth = (targetYearMonth?: string) => {
  if (!targetYearMonth) return false;

  const targetDate = new Date(targetYearMonth);
  const currentDate = new Date();

  return currentDate.getFullYear() === targetDate.getFullYear() && currentDate.getMonth() === targetDate.getMonth();
};

export const hasRegisterPaymentMethod = () => {
  const commonService = useCommon();
  const currentUser = commonService.getCurrentUserFromStorage();

  const typeRegisterPayment = currentUser.company?.paymentMethod;
  const isAdminUpdatePayment = currentUser.company?.isAdminUpdatePaymentMethod;
  const paymentInfo = currentUser?.paymentMethodInfo;

  if (isAdminUpdatePayment) {
    if (
      typeRegisterPayment === PAYMENT_METHOD_TYPES.bankWithdrawal ||
      (typeRegisterPayment === PAYMENT_METHOD_TYPES.creditCard && paymentInfo)
    ) {
      return true;
    }

    return false;
  }

  return currentUser?.isHasPaymentMethod;
};

export const getTypeRegisterPayment = () => {
  const commonService = useCommon();
  const currentUser = commonService.getCurrentUserFromStorage();

  return currentUser ? currentUser.company?.paymentMethod : '';
};

export const isAdminUpdatePaymentMethod = () => {
  const commonService = useCommon();
  const currentUser = commonService.getCurrentUserFromStorage();

  return currentUser.company?.isAdminUpdatePaymentMethod;
};

export const getCreditCardInfo = () => {
  const commonService = useCommon();
  const currentUser = commonService.getCurrentUserFromStorage();

  return currentUser?.paymentMethodInfo;
};

export const getPasswordRules = (messageRequire?: { message: string }) => {
  const baseSchema = messageRequire ? z.string(messageRequire) : z.string();

  return baseSchema
    .min(8, { message: MESSAGES.ERR007 })
    .regex(/[a-zA-Z]/, MESSAGES.ERR007)
    .regex(/\d/, MESSAGES.ERR007)
    .regex(/^(?! )[A-Za-z0-9^$*.[\]{}()?\"!@#%&/\\,><':;|_~`=+\- ]*(?<! )$/, MESSAGES.ERR007);
};

export const validateRequiredAndLimit = (field: string, limit: number, isKana?: boolean) => {
  const katakanaRegex = /^[\u30A0-\u30FF]+$/;

  const baseSchema = z
    .string(messageRequired(field))
    .min(1, messageRequired(field))
    .max(limit, messageLimit(field, limit.toString()));

  return isKana
    ? baseSchema.regex(katakanaRegex, {
        message: MESSAGES.ERR005
      })
    : baseSchema;
};
