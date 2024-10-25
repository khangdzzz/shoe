export default defineNuxtPlugin(async (to) => {
  const commonService = useCommon();

  const currentPath = to.path;

  const loginPath = '/login';

  const hasLogged = commonService.hasLogged();

  if (!hasLogged && currentPath !== loginPath) {
    window.location.href = loginPath;

    return;
  }
});
