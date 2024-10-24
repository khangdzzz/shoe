export default defineNuxtPlugin(async (to) => {
  console.log('auth middleware redirect');

  const router = useRouter();
  const commonService = useCommon();

  const currentPath = to.fullPath as string;

  const currentRole = commonService.getLocalStorage(LOCAL_STORAGE_KEYS.role);
  const hasLogged = commonService.hasLogged();

  const redirectToLogin = () => {
    if (currentPath !== '/login') {
      router.push('/login');
    }
  };

  const redirectToRoleBasedRoute = (role: string) => {
    const isAdmin = role === ROLES.admin.toString();
    const validRoutes = isAdmin ? ROUTES_ADMIN : ROUTES_USER;

    const fallbackRoute = isAdmin ? '/customers' : '/user-list';

    const isValidRoute = validRoutes.includes(currentPath);
    if (!isValidRoute) {
      router.push(fallbackRoute);
    }
  };

  if (!currentRole || !hasLogged) {
    redirectToLogin();
    return;
  }

  redirectToRoleBasedRoute(currentRole);
});
