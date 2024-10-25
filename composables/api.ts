import type { ResponseApi } from '~/models/common';
export const useApi = (baseUrl?: string) => {
  const commonService = useCommon();
  const system = useSystemStore();
  const permissionService = usePermission();

  const BASE_URL = baseUrl || 'http://localhost:5000/';

  const getHeaders = (): Record<string, string> => {
    const headers: Record<string, string> = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    };

    const accessToken = commonService.getLocalStorage(LOCAL_STORAGE_KEYS.accessToken);
    const refreshToken = commonService.getLocalStorage(LOCAL_STORAGE_KEYS.refreshToken);
    const token = accessToken || refreshToken;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  };

  const fetchData = async (endpoint: string, options = {}): Promise<any> => {
    try {
      const response = await $fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          ...getHeaders(),
          ...(options as any).headers
        }
      });

      return response;
    } catch (error: any) {
      const { messageCode, messageText, status } = error.data;

      if (status === 401) {
        commonService.removeLocalStorage(LOCAL_STORAGE_KEYS.accessToken);
        await handleRefreshToken();

        return;
      }

      system.setError({
        code: messageCode || null,
        message: messageText || 'エラーが発生しました。',
        type: TYPE_MESSAGE.error
      });
    }
  };

  const handleRefreshToken = async () => {
    const refreshToken = commonService.getLocalStorage(LOCAL_STORAGE_KEYS.refreshToken);
    if (!refreshToken) {
      commonService.removeKeysWhenTokenExpired();
      location.href = '/login';
      return;
    }

    try {
      const res: ResponseApi<{ accessToken: string; refreshToken: string }> = await $fetch(`${BASE_URL}auth/refresh`, {
        method: 'POST',
        headers: {
          ...getHeaders()
        }
      });

      const accessToken = res?.data?.accessToken;
      const refreshToken = res?.data?.refreshToken;

      if (accessToken && refreshToken) {
        commonService.setLocalStorage(LOCAL_STORAGE_KEYS.accessToken, accessToken);
        commonService.setLocalStorage(LOCAL_STORAGE_KEYS.refreshToken, refreshToken);
      }

      await permissionService.initPermissions();
    } catch (error) {
      commonService.removeKeysWhenTokenExpired();
      location.href = '/login';
    }
  };

  const get = async (endpoint: string): Promise<ResponseApi<any>> => {
    return await fetchData(endpoint, { method: 'GET' });
  };

  const post = async (endpoint: string, payload: any) => {
    return await fetchData(endpoint, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  };

  const put = async (endpoint: string, payload: any) => {
    return await fetchData(endpoint, {
      method: 'PUT',
      body: JSON.stringify(payload)
    });
  };

  const del = async (endpoint: string) => {
    return await fetchData(endpoint, { method: 'DELETE' });
  };

  return { get, post, put, del };
};

interface API {
  archaic: null | ReturnType<typeof useApi>;
}

export const apis: API = {
  archaic: null
};
