export const useJwt = () => {
  const system = useSystemStore();
  const authStore = useAuthStore();
  const { redirectPage } = useRedirectPage();
  const parseJwt = (token: string) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
          .join('')
      );

      return JSON.parse(jsonPayload);
    } catch (error) {
      system.setNotify({
        message: 'トークンが無効です。',
        type: TYPE_MESSAGE.error
      });
      return null;
    }
  };

  const checkTokenValid = async (type: string, token: string) => {
    const res = await authStore.checkStatusToken(type, token);

    if (!res) {
      setTimeout(() => {
        redirectPage('/login');
      }, 1000);
    }
  };

  return {
    parseJwt,
    checkTokenValid
  };
};
