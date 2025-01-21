export const userListPageStore = defineStore('userListPageStore', () => {
  const isOpenNotifyCrawl = ref(false);
  const isOpenNotifyExport = ref(false);

  return {
    isOpenNotifyCrawl,
    isOpenNotifyExport
  };
});
