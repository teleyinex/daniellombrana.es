const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const { VuetifyProgressiveModule } = require('vuetify-loader')
const pkg = require('./package')

let blogposts = require('./static/en/blogposts.json')
blogposts = Object.keys(blogposts)

let blogpostsEs = require('./static/es/blogposts.json')
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
      '/prueba',
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
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Daniel Lombraña',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name:'description', content: 'hola' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans|Alegreya+Sans+SC|Open+Sans' }
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
    '~/plugins/social.js',
    { src: '@/plugins/snap.js', ssr: false },
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
    breaks: false,
    html: true,
    use: ['markdown-it-emoji']
  },
  manifest: {
    'name': 'Daniel Lombraña',
    'short_name': 'Teleyinex',
    'lang': 'en',
    'theme_color': '#000000',
  },
  meta: {
    ogType: false,
    ogTitle: false,
    ogDescription: false,
    ogImage: false
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://localhost:3000'
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
      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i');
      config.module.rules.splice(config.module.rules.indexOf(rule), 1);
      // Run ESLint on save
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
        config.module.rules.push(
{
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          placeholder: true,
          quality: 60,
          sizes: [300, 768, 1024],
          adapter: require('responsive-loader/sharp')
        }
      },
        {
        test: /\.(gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
        })
    }
  },
  generate: {
    fallback: true,
    subFolders: true,
    routes: generateAllRoutes()
  }
}
