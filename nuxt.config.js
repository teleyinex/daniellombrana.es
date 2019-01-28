const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const pkg = require('./package')

let blogposts = require('./static/en/blogposts.json')
blogposts = Object.keys(blogposts)

let blogpostsEs = require('./static/en/blogposts.json')
blogpostsEs = Object.keys(blogpostsEs)

function blogpostURL(key) {
  const tmp = key.split('-')
  const date = tmp.slice(0, 3)
  const rest = tmp.slice(3)
  const href = `/blog/${date[0]}/${date[1]}/${date[2]}/${rest.join('-')}`
  return href
}

let projects = require('./static/en/projects.json')
projects = Object.keys(projects)

let projectsEs = require('./static/es/projects.json')
projectsEs = Object.keys(projectsEs)

function projectURL(key) {
  const tmp = key.split('-')
  const rest = tmp.slice(3).join('-')
  return `/projects/${rest}`
}

function generateAllRoutes() {
  return []
    .concat([
      '/',
      '/about/',
      '/projects/',
      '/blog',
      '/es',
      '/es/about',
      '/es/projects',
      '/es/photography',
      '/es/blog'
    ])
    .concat(blogposts.map(b => blogpostURL(b)))
    .concat(blogposts.map(b => `${blogpostURL(b)}.html`))
    .concat(blogpostsEs.map(b => `/es${blogpostURL(b)}`))
    .concat(blogpostsEs.map(b => `/es${blogpostURL(b)}.html`))
    .concat(projects.map(p => projectURL(p)))
    .concat(projects.map(p => `${projectURL(p)}.html`))
    .concat(projectsEs.map(p => `/es${projectURL(p)}`))
    .concat(projectsEs.map(p => `/es${projectURL(p)}.html`))
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans|Open+Sans', defer: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alegreya+Sans+SC|Open+Sans', defer: true },
    ]
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
    '@/plugins/snap.js',
    '~/plugins/i18n.js'
  ],

  router: {
    middleware: 'i18n',
    // scrollBehavior: function(to, from, savedPosition) {
    //   return { x: 0, y: 0 }
    // }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://daniellombrana.es',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate
    routes: generateAllRoutes()
  },
  'google-analytics': {
    id: 'UA-36769710-1'
  },
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    html: true,
    use: ['markdown-it-emoji']
  },
  manifest: {
    'name': 'Daniel Lombraña',
    'short_name': 'Teleyinex',
    'lang': 'en',
    'description': 'My personal website',
    'theme_color': '#000000',
    'ogImage': 'https://daniellombrana.es/',
    'ogHost': 'https://daniellombrana.es',
    'ogDescription': 'My personal website'
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
        config.module.rules.push({
          test: /\.(png|jpe?g|gif)$/,
          resourceQuery: /vuetify-preload/,
          use: [
            'vuetify-loader/progressive-loader',
            {
              loader: 'url-loader',
              options: { limit: 8000 }
            }
          ]
        })
      }
    }
  },
  generate: {
    fallback: true,
    subFolders: true,
    routes: generateAllRoutes()
  }
}
