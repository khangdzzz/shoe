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
    const message = isSuccess ? 'お支払い方法の登録が完了しました' : 'お支払い方法の登録がキャンセルされました';

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
    const message = '支払い登録に失敗しました。もう一度お試しください。';
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
