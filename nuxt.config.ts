const longName = 'Clujeni Entuziasmați Adesea Plecați Aiurea';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      meta: [
        { name: 'title', content: 'Ceapa Scout' },
        { name: 'description', content: longName },
        { name: 'og:image', content: 'public/images/cover.png' },
      ],
      title: `${longName} | Cercetașii României`,
    },
  },
});
