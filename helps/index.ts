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

  if (!currentUser) return false;

  return currentUser?.isHasPaymentMethod;
};

export const getPasswordRules = (messageRequire?: { message: string }) => {
  const baseSchema = messageRequire ? z.string(messageRequire) : z.string();

  return baseSchema
    .min(8, { message: MESSAGES.ERR007 })
    .regex(/[a-zA-Z]/, 'パスワードには少なくとも1つの英字を含める必要があります。')
    .regex(/\d/, 'パスワードには少なくとも1つの数字を含める必要があります。')
    .regex(/[@$!%*?&]/, 'パスワードには少なくとも1つの特殊文字（@$!%*?&）を含める必要があります。');
};
