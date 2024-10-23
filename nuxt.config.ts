// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['shadcn-nuxt', '@nuxtjs/tailwindcss', '@nuxt/image', [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
        ],
      },
    ],],
  css: ['~/assets/css/main.scss'],
  shadcn: {
    componentDir: './components/ui'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },
  image: {
    dir: 'assets/images'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  imports: {
    dirs: ['./utils', 'stores']
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },
  compatibilityDate: '2024-10-11'
});
