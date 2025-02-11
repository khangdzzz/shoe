import type { Jobs, ResponseApi } from '~/models/common';
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
  const job = ref<Jobs>();

  const searchPostalCode = async (postalCode: string): Promise<ResponseApi<PostalCode> | undefined> => {
    return await apis.archaic?.get(`zip-code/${postalCode}`);
  };

  const searchTerms = async () => {
    const res = await apis.archaic?.get(`term-of-use`);

    if (res?.data) termHtml.value = res.data;
  };

  const searchLastJob = async () => {
    const res = await apis.archaic?.get(`crawl/last-job-status`);

    if (res?.data) job.value = res.data;
  };

  const setNotify = ({ code, field, message, type }: ValidationNotify) => {
    notify.value = {
      code,
      field,
      type,
      message: code && MESSAGES[code] ? MESSAGES[code] : message
    };

    setTimeout(() => {
      clearNotify();
    }, 3000);
  };

  const clearNotify = () => {
    notify.value = {};
  };

  return {
    job,
    notify,
    termHtml,
    isLoadPermission,
    setNotify,
    searchTerms,
    clearNotify,
    searchPostalCode,
    searchLastJob
  };
});
