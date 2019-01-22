const pkg = require('./package')
const { join } = require('path')
const dir = require('node-dir')
const routesArray = []
const fs = require('fs')

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')


var blogposts = fs.readdirSync('./static/blogposts');
var projects = fs.readdirSync('./static/projects');

function createRoutesArray() {
  blogposts.forEach(function (file) {
      var name = file.substr(0, file.lastIndexOf('.'));
      var route = '/blog/' + name
      routesArray.push(route)
  });
}

function returnRoutes() {
  dir.readblogposts('./static/blogposts', {
        match: /.md$/,
        shortName: true,
        exclude: /^\./
        }, function(err, content, next) {
            if (err) throw err;
            // console.log('content:', content);
            next();
        },
        function(err, blogposts){
            if (err) throw err;
            // fileNamesArray = [];
            blogposts.forEach(function (file) {
                var name = file.substr(0, file.lastIndexOf('.'));
                var path = '/post/' + name
                console.log(path)
                return path
            });
        });
}

function getSlugs(post, index) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/blog/${slug}`
}

module.exports = {
  mode: 'spa',
  env: {
    blogposts,
    projects
  },

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
      },
      
    ],
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
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
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
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader'
        })
      }
    }
  }
}
