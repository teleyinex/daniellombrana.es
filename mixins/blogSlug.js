export default {
  mounted() {
    window.scrollTo(0, 0)
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { hid: 'author', name: 'author', content: 'Daniel Lombraña' },
        {
          name: 'description',
          property: 'og:description',
          content: this.blog.meta_description,
          hid: 'description'
        },
        { hid: 'og:title', property: 'og:title', content: this.blog.title },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://daniellombrana.es${this.img}`
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@teleyinex'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.blog.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.blog.meta_description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://daniellombrana.es${this.img}`
        }
      ],
      title: this.blog.title
    }
  },

  async asyncData({ app, params, store, payload, $content }) {
    const blog = await $content('blog', store.state.locale, params.slug).fetch()
    const photo = `img/blog/${blog.icon}.jpg`
    store.commit('setActive', 'blog')
    store.commit('setColor', '#2980b9')
    store.commit('setCoverImg', photo)
    store.commit('setPage', {
      title: blog.title,
      photoAuthor: blog.icon_author,
      photoUrl: blog.icon_url,
      gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)'
    })
    const blogposts = {}
    return {
      blog,
      blogposts
    }
  },
  computed: {
    img() {
      return require(`~/assets/img/blog/${this.blog.icon}.jpg`)
    },
    ogImg() {
      return `${process.env.baseUrl}${this.img}`
    }
  }
}
