import type { MasterData } from '~/models/masterData';

export const useFetchDataInit = defineStore('initData', () => {
  const masterData = ref<MasterData | undefined>(undefined);
  const permissionService = usePermission();
  const initData = async () => {
    await Promise.all([getMasterData(), permissionService.initPermissions()]);
  };
  const getMasterData = async () => {
    const res = await apis.archaic?.get('master-data');

    masterData.value = res?.data;
  };

  return {
    masterData,
    initData
  };
});
