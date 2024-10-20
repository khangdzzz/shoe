// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['shadcn-nuxt', '@nuxtjs/tailwindcss', '@nuxt/image'],
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
    dirs: ['./utils']
  },
  compatibilityDate: '2024-10-11'
});
