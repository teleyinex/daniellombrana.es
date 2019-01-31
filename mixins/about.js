export default {
  asyncData({ store }) {
    store.commit('setActive', 'about')
    store.commit('setColor', '#8e44ad')
    store.commit('setCoverImg', 'img/blog/avatar.jpg')

    store.commit('setPage', {
      title: null,
      subTitle: null
    })
  }
}
