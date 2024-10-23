import { apis, useApi } from '~/apis';


export default defineNuxtPlugin(async () => {
  const runtimeConfig = useRuntimeConfig()
  const baseUrl = runtimeConfig.public.BASE_URL as string

  apis.archaic = useApi(baseUrl);
})
