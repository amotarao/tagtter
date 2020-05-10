import Sass from 'sass';
import Fiber from 'fibers';

export default {
  mode: 'universal',
  srcDir: 'src',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#fff' },
  css: ['./src/assets/scss/global.scss'],
  plugins: [],
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
  ],
  modules: [],
  dotenv: {
    path: './',
  },
  styleResources: {
    scss: ['./src/assets/scss/_variables.scss', './src/assets/scss/_mixin.scss'],
  },
  build: {
    extend(config, ctx) {},
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
  },
};
