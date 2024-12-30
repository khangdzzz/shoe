import type { AuthUser, LoginResponse, LoginUser } from '~/models/auth';
import type { ResponseApi } from '~/models/common';

export const useAuthStore = defineStore('auth', () => {
  const isAdmin = ref(false);
  const currentUser = ref<AuthUser>();

  const verifyEmail = async (email: string) => {
    return await apis.archaic?.post('auth/send-verify-email', { email });
  };

  const forgotPassword = async (email: string) => {
    return await apis.archaic?.post('auth/forgot-password', { email });
  };

  const login = async (body: LoginUser): Promise<ResponseApi<LoginResponse> | undefined> => {
    return await apis.archaic?.post('auth/login', { ...body });
  };

  const getCurrentUser = async (): Promise<ResponseApi<AuthUser> | undefined> => {
    return await apis.archaic?.get('auth/me');
  };

  const resetPassword = async (password: string, token: string) => {
    return await apis.archaic?.post('auth/reset-password', { password, token });
  };

  const deleteAuthUser = async () => {
    return await apis.archaic?.post(`auth/cancelled`, {});
  };

  const checkStatusToken = async (type: string, token: string) => {
    return await apis.archaic?.get(`auth/check-valid-token/${type}/${token}`);
  };

  return {
    isAdmin,
    currentUser,
    login,
    verifyEmail,
    forgotPassword,
    getCurrentUser,
    resetPassword,
    deleteAuthUser,
    checkStatusToken
  };
});
