import type { ResponseApi } from '~/models/common';
import type { PostalCode } from '~/models/masterData';

interface ValidationError {
  code?: string;
  field?: string;
  message?: string;
  type?: number;
}

export const useSystemStore = defineStore('system', () => {
  const errors = ref<ValidationError>();
  const searchPostalCode = async (postalCode: string): Promise<ResponseApi<PostalCode> | undefined> => {
    return await apis.archaic?.get(`zip-code/${postalCode}`);
  };

  const setError = ({ code, field, message, type }: ValidationError) => {

    errors.value = {
      code,
      field,
      type,
      message: code && MESSAGES[code] ? MESSAGES[code] : message
    };

    setTimeout(() => {
      errors.value = {};
    }, 5000);
  };

  return {
    errors,
    setError,
    searchPostalCode
  };
});
