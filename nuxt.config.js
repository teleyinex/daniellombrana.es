const pkg = require('./package')
const axios = require('axios')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

let blogposts = require('./static/blogposts.json')
blogposts = Object.keys(blogposts)

function blogpostURL(key) {
  const tmp = key.split('-')
  const date = tmp.slice(0, 3)
  const rest = tmp.slice(3)
  const href = `/blog/${date[0]}/${date[1]}/${date[2]}/${rest.join('-')}`
  return href
}

let projects = require('./static/projects.json')
projects = Object.keys(projects)

function projectURL(key) {
  const tmp = key.split('-')
  const rest = tmp.slice(3)
  return `/projects/${rest}`
}

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css'
      }
    ]
    /* script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js'
      }
    ] */
  },

  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/loading.vue',

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/snap.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    html: true
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: '/',
    browserBaseURL: '/'
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },
    
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.module.rules.push({
          test: require.resolve('snapsvg'),
          use: 'imports-loader?this=>window,fix=>module.exports=0'
        })
      }
    }
  },
  generate: {
    fallback: true,
    subFolders: true,
    routes: []
      .concat(blogposts.map(b => blogpostURL(b)))
      .concat(projects.map(p => projectURL(p)))
  }
}
