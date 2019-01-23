export const state = () => ({
  active: 'about',
  heroImg: '/assets/img/blog/avatar.jpg',
  color: 'black',
  show: false,
  page: {
    title: null,
    subTitle: null,
    photoUrl: null,
    gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)',
    photoAuthor: null
  }
})

export const mutations = {
  setShow(state, show) {
    state.show = show
  },
  setActive(state, page) {
    state.active = page
  },
  setCoverImg(state, url) {
    state.heroImg = url
  },
  setColor(state, color) {
    state.color = color
  },
  setPage(state, page) {
    state.page = page
  }
}
