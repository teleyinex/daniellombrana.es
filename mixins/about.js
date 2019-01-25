export default {
  asyncData({ store }) {
    store.commit('setActive', 'about')
    store.commit('setColor', '#8e44ad')
    store.commit('setCoverImg', '/assets/img/blog/avatar.jpg')
    const coverSrcSet = `/assets/img/blog/avatar-phone.jpg 400w,
       /assets/img/blog/avatar-tablet.jpg 768w,
       /assets/img/blog/avatar.jpg 1040w
      `

    store.commit('setPage', {
      title: null,
      subTitle: null,
      sizes: '(max-width:412px) 400px,  (max-width:768px) 768px, 1040px',
      phtoSrcSet: coverSrcSet
    })
  }
}
