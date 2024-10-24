export const useCommon = () => {
  const setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
  };

  const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  const removeKeysWhenTokenExpired = () => {
    removeLocalStorage(LOCAL_STORAGE_KEYS.accessToken);
    removeLocalStorage(LOCAL_STORAGE_KEYS.refreshToken);
    removeLocalStorage(LOCAL_STORAGE_KEYS.role);
  };

  const hasLogged = (): boolean => {
    const token = getLocalStorage(LOCAL_STORAGE_KEYS.accessToken);

    return Boolean(token);
  };

  return {
    hasLogged,
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
    removeKeysWhenTokenExpired
  };
};
