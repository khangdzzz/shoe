import type { LoginResponse, LoginUser } from "~/models/auth";
import type { ResponseApi } from "~/models/common";

export const useAuthStore = defineStore('auth', () => {
  const verifyEmail = async (email: string) => {
    return await apis.archaic?.post('auth/send-verify-email', { email });
  };

  const forgotPassword = async (email: string) => {
    return await apis.archaic?.post('auth/forgot-password', { email });
  };

	const login = async (body: LoginUser): Promise<ResponseApi<LoginResponse> | undefined> => {
    return await apis.archaic?.post('auth/login', { ...body });
  };

  return {
    verifyEmail,
    forgotPassword,
		login
  };
});
