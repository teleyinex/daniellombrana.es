export default {
  async asyncData({ app, store, $content }) {
    store.commit('setActive', 'blog')
    store.commit('setColor', '#2980b9')
    store.commit('setCoverImg', 'img/blog/blogheader.jpg')

    store.commit('setPage', {
      title: 'Blog',
      subTitle: app.i18n.t('blogSubtitle'),
      gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)'
    })
    const blogposts = await $content('blog', store.state.locale)
      .sortBy('date', 'desc')
      .fetch()
    return {
      blogposts,
      active: blogposts.slice(0, 4)
    }
  }
}
