import type { MasterData } from '~/models/masterData';

export const useFetchDataInit = defineStore('initData', () => {
  const masterData = ref<MasterData | undefined>(undefined);
  const permissionService = usePermission();
  const systemStore = useSystemStore();
  const isLoadingInit = ref(false);
  const initData = async () => {
    try {
      isLoadingInit.value = true;
      await Promise.all([getMasterData(), permissionService.initPermissions(), systemStore.searchTerms()]);
    } finally {
      isLoadingInit.value = false;
    }
  };
  const getMasterData = async () => {
    const res = await apis.archaic?.get('master-data');

    masterData.value = res?.data;
  };

  return {
    masterData,
    isLoadingInit,
    initData
  };
});
