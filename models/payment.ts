export interface PaymentLinkTypeParams {
  merchantId: string;
  serviceId: string;
  custCode: string;
  hashCode: string;
  endPoint: string;
  requestDate: string;
  isSuccessUrl: string;
  isCancelUrl: string;
  isFailureUrl: string;
  notificationUrl: string;
}

export interface PaymentMessageType {
  type: 'success' | 'info';
  text: string;
}
