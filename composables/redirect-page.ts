export const useRedirectPage = () => {
  const router = useRouter();
  const system = useSystemStore();
  const redirectPage = (path: string) => {
    system.notify = {};
    router.push(path);
  };
  return { redirectPage };
};
