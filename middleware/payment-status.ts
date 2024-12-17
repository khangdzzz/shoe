import type { PaymentMessageType } from '~/models/payment';

export default defineNuxtRouteMiddleware(async (to) => {
  const isSuccessorCancel = to.query.is_success !== undefined || to.query.is_cancel !== undefined;
  const permissionService = usePermission();
  await permissionService.refreshUserInfo();

  if (!isSuccessorCancel) {
    useState('paymentMessage', () => ({
      type: 'info',
      text: ''
    }));
    return;
  }
  const isSuccess = to.query.is_success === 'true';
  const isCancel = to.query.is_cancel === 'true';

  if (isSuccess || isCancel) {
    const message = isSuccess ? MESSAGES.INFO002 : MESSAGES.INFO001;

    useState(
      'paymentMessage',
      () =>
        ({
          type: isSuccess ? 'success' : 'info',
          text: message
        }) as PaymentMessageType
    );
  }
  if (!isSuccess && !isCancel) {
    const message = MESSAGES.ERR010;
    useState(
      'paymentMessage',
      () =>
        ({
          type: 'info',
          text: message
        }) as PaymentMessageType
    );
  }
});
