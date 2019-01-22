export const state = () => ({
  active: 'about',
  heroImg: '/assets/img/blog/avatar.jpg',
  color: 'black',
  page: {
    title: null,
    subTitle: null,
    photoUrl: null,
    photoAuthor: null
  }
})

export const mutations = {
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
