export default {
  async asyncData({ store, app }) {
    store.commit('setColor', '#27ae60')
    store.commit('setActive', 'photography')
    store.commit('setCoverImg', '/assets/img/photography/photographyheader.jpg')
    const coverSrcSet = `/assets/img/photography/photographyheader-phone.jpg 400w,
       /assets/img/photography/photographyheader-tablet.jpg 768w,
       /assets/img/photography/photographyheader.jpg 1040w
      `
    store.commit('setPage', {
      title: app.i18n.t('photographyTitle'),
      subTitle: app.i18n.t('photographySubtitle'),
      gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)',
      sizes: '(max-width:412px) 400px,  (max-width:768px) 768px, 1040px',
      phtoSrcSet: coverSrcSet
    })
    const url = 'https://api.unsplash.com/users/teleyinex/photos'
    const payload = {
      client_id:
        'c0d2f2648f2467bdbfc2172761ce5330a4c2635c38cdca9102888e2ce5b8b72f',
      order_by: 'popular'
    }
    const photos = await app.$axios.$get(url, { params: payload })
    return { photos }
  }
}
