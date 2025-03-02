// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ]
  ],
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  imports: {
    dirs: ['./utils', 'stores', 'stores/pages']
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL
    }
  },
  compatibilityDate: '2024-10-11',
  app: {
    head: {
      title: 'Running Store VN',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Mô tả trang web' },

        { property: 'og:title', content: 'Running Store VN' },
        { property: 'og:description', content: 'Running Store VN' },
        { property: 'og:image', content: 'https://running-store.click/favicon.jpg' },
        { property: 'og:url', content: 'https://running-store.click/favicon.jpg' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Running Store VN' },
        { name: 'twitter:description', content: 'Running Store VN' },
        { name: 'twitter:image', content: 'https://running-store.click/favicon.jpg' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' }]
    }
  }
});
