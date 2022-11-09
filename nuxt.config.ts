export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  nitro: {
    devProxy: {
      '/api/v2': {
        target: 'https://demo.zsmartex.com/api/v2/',
        changeOrigin: true,
        ws: true,
      },
    },
  },
})
