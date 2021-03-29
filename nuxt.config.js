export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'aliii',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/styles/font.css',
      },
      {
        rel: 'stylesheet',
        href: '/fonts/fontawesome/css/all.min.css',
      },
    ],
  },
  srcDir: 'src',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      lang: 'css',
      src: 'animate.css/animate.min.css',
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/i18n.js', '~/plugins/vue-screen.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'انگلیسی',
        dir: 'ltr',
      },
      {
        code: 'fa',
        name: 'فارسی',
        dir: 'rtl',
      },
    ],
    defaultLocale: 'fa',
    defaultDirection: 'rtl',
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'fa',
      messages: {
        en: {
          welcome: 'Welcome',
        },
        fa: {
          welcome: 'Bienvenue',
        },
      },
    },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  tailwindcss: {
    configPath: 'tailwind.config.js',
    // jit: true,
    viewer: false,
  },
};
