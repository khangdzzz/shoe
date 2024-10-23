import type { ResponseApi } from "~/models/common";

export const useApi = (baseUrl?: string) => {
  const BASE_URL = baseUrl || 'http://localhost:5000/';

  const getHeaders = (): Record<string, string> => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  };

  const fetchData = async (endpoint: string, options = {}): Promise<any>  => {
    try {
      const response = await $fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          ...getHeaders(),
          ...(options as any).headers,
        },
      });
      return response;
    } catch (error: any) {
       console.error('Error):', error);
      if (error?.response?.status === 500) {
        console.error('Internal Server Error (500):', error);
      }
      throw error;
    }
  };

  const get = async (endpoint: string): Promise<ResponseApi<any>> => {
    return await fetchData(endpoint, { method: 'GET' });
  };

  const post = async (endpoint: string, payload: any) => {
    return await fetchData(endpoint, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  };

  const put = async (endpoint: string, payload: any) => {
    return await fetchData(endpoint, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  };

  const del = async (endpoint: string) => {
    return await fetchData(endpoint, { method: 'DELETE' });
  };

  return { get, post, put, del };
};

interface API {
  archaic: null | ReturnType<typeof useApi>
}

export const apis: API = {
  archaic: null,
}

