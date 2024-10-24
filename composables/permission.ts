export const usePermission = () => {
  const authStore = useAuthStore();
  const commonService = useCommon();

  const initPermissions = async () => {
    if (commonService.hasLogged()) {
      await loadPermissions();
    }
  };

  const loadPermissions = async () => {
    const res = await authStore.getCurrentUser();

    if (res) {
      const user = res.data;

      authStore.currentUser = user;
      authStore.isAdmin = ROLES.admin === user.role;

      commonService.setLocalStorage(LOCAL_STORAGE_KEYS.role, user.role.toString());
    }
  };

  return {
    initPermissions
  };
};
