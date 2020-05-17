export default {
  async asyncData({ app, store }) {
    store.commit('setActive', 'blog')
    store.commit('setColor', '#2980b9')
    store.commit('setCoverImg', 'img/blog/blogheader.jpg')

    store.commit('setPage', {
      title: 'Blog',
      subTitle: app.i18n.t('blogSubtitle'),
      gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)'
    })
    let data = []
    if (store.state.locale === 'es') {
      data = await app.$axios.$get('/es/blogposts.json')
    } else {
      data = await app.$axios.$get('/en/blogposts.json')
    }
    let blogposts = []
    for (const key of Object.keys(data)) {
      const blog = data[key]
      const photo = `img/blog/${blog.icon}.jpg`
      const tmp = key.split('-')
      const date = tmp.slice(0, 3)
      const rest = tmp.slice(3)
      let href = `/blog/${date[0]}/${date[1]}/${date[2]}/${rest.join('-')}`
      if (store.state.locale === 'es') {
        href = `/es${href}`
      }
      href = href.replace('.md', '.html')

      blog.photo = photo
      blog.href = href
      blogposts.push(blog)
    }
    blogposts = blogposts.reverse()
    return {
      blogposts,
      active: blogposts.slice(0, 4)
    }
  }
}
