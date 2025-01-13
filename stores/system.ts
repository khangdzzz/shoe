import type { ResponseApi } from '~/models/common';
import type { PostalCode } from '~/models/masterData';

interface ValidationNotify {
  code?: string;
  field?: string;
  message?: string;
  type?: number;
}

export const useSystemStore = defineStore('system', () => {
  const notify = ref<ValidationNotify>();
  const termHtml = ref<string>('');
  const isLoadPermission = ref();
  const searchPostalCode = async (postalCode: string): Promise<ResponseApi<PostalCode> | undefined> => {
    return await apis.archaic?.get(`zip-code/${postalCode}`);
  };

  const searchTerms = async () => {
    const res = await apis.archaic?.get(`term-of-use`);

    if (res?.data) termHtml.value = res.data;
  };

  const setNotify = ({ code, field, message, type }: ValidationNotify) => {
    notify.value = {
      code,
      field,
      type,
      message: code && MESSAGES[code] ? MESSAGES[code] : message
    };

    setTimeout(() => {
      notify.value = {};
    }, 5000);
  };

  return {
    notify,
    termHtml,
    isLoadPermission,
    setNotify,
    searchTerms,
    searchPostalCode
  };
});
