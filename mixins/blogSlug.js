import blogEs from '~/static/es/blogposts.json'
import blogEn from '~/static/en/blogposts.json'
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

  asyncData({ app, params, store, payload }) {
    if (params.slug.indexOf('.html') >= 0) {
      params.slug = params.slug.replace('.html', '')
    }
    const slug = `${params.year}-${params.month}-${params.day}-${params.slug}`
    let blogposts = blogEn
    if (store.state.locale === 'es') {
      blogposts = blogEs
    }
    const blog = blogposts[slug]
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
    const find = '{: .img-responsive}'
    const re = new RegExp(find, 'g')

    blog.content = blog.content.replace('<!--more-->', '')
    blog.content = blog.content.replace(re, '\n')

    delete blogposts[blog.basename]

    return {
      blog,
      blogposts
    }
  },
  computed: {
    img() {
      return require(`~/assets/${this.$store.state.heroImg}`)
    },
    ogImg() {
      return `${process.env.baseUrl}${this.img}`
    }
  }
}
