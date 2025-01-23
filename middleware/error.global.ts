export default defineNuxtPlugin(async () => {
  const system = useSystemStore();

  if (system.notify?.type === TYPE_MESSAGE.error) system.clearNotify();
});
