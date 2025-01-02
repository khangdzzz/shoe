import type { Company } from './company';

export interface LoginUser {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  companyId: number;
  email: string;
  id: number;
  role: number;
  status: number;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: UserLoginResponse;
}

export interface AuthUser {
  id: number;
  email: string;
  role: number;
  status: number;
  companyId: number;
  createdAt: string;
  updatedAt: string;
  company: Company;
  isHasPaymentMethod: boolean;
  paymentMethodInfo?: PaymentMethodInfo;
}

export interface PaymentMethodInfo {
  ccBrand: string;
  ccDisplayName: string;
  ccExpiration: string;
  ccNumberLast4: string;
}
