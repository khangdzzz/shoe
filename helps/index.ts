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
