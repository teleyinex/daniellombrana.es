export default {
  head() {
    return {
      title: this.blog.title,
      meta: [
        {
          hid: 'blog',
          name: 'description',
          content: this.blog.meta_description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `https://daniellombrana.es/${this.$store.state.heroImg}`
        }
      ]
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  async asyncData({ app, params, store, payload }) {
    if (params.slug.indexOf('.html') >= 0) {
      params.slug = params.slug.replace('.html', '')
    }
    const slug = `${params.year}-${params.month}-${params.day}-${params.slug}`
    let blogUrl = '/blogposts.json'
    if (store.state.locale === 'es') {
      blogUrl = '/es/blogposts.json'
    }
    const blogposts = await app.$axios.$get(blogUrl)
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

    blog.content = blog.content.replace('<!--more-->', '')
    blog.content = blog.content.replace('{: .img-responsive}', '\n')

    return {
      blog
    }
  }
}
