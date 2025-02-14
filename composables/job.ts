export const useJob = () => {
  const systemStore = useSystemStore();

  const stopSearchLastJob = () => {
    if (systemStore.jobSearchInterval) {
      clearInterval(systemStore.jobSearchInterval);
      systemStore.jobSearchInterval = null;
    }
  };

  const searchLastJob = async () => {
    if (systemStore.jobSearchInterval) return;

    systemStore.jobSearchInterval = setInterval(async () => {
      await systemStore.searchLastJob();
    }, 30000);
  };

  return { searchLastJob, stopSearchLastJob };
};
