require('dotenv').config();

export default {
  axios: {
    baseURL: process.env.BASE_URL,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Studio projektowe Agmar',
    htmlAttrs: {
      lang: 'pl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Zajmujemy się tworzeniem wysokiej jakości wizualizacji 3D kuchni i innych pomieszczeń mieszkalnych. Nie czekaj, skontaktuj się z nami jak najszybciej!',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/@egjs/flicking/dist/flicking.css',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/gsap.js' },
    { src: '~/plugins/scrollLock.js', mode: 'client' },
    { src: '~/plugins/flicking.js', mode: 'server', ssr: false },
    { src: '~/plugins/vuex-sync' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    [
      'nuxt-mail',
      {
        message: {
          to: process.env.EMAIL,
        },
        smtp: {
          host: process.env.EMAIL_HOST,
          port: process.env.EMAIL_PORT,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
    extractCSS: true,
  },
  server: {
    port: process.env.PORT,
    host: process.env.HOST,
  },
  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
    exclude: ['/admin/**'],
    routes: [
      '/oferta/projekt-koncepcyjny',
      '/oferta/projekt-wykonawczy',
      '/oferta/projekt-kuchni',
    ],
  },
};
