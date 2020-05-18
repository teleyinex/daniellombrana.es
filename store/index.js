export const state = () => ({
  cookies: false,
  active: 'about',
  heroImg: '/assets/img/blog/avatar.jpg',
  color: 'black',
  show: false,
  showSearch: false,
  locale: 'es',
  locales: ['en', 'es'],
  idx: null,
  found: [],
  page: {
    title: null,
    subTitle: null,
    photoUrl: null,
    gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)',
    photoAuthor: null
  }
})

export const mutations = {
  setCookies(state, val) {
    state.cookies = val
  },
  setLang(state, locale) {
    state.locale = locale
  },
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
  },
  setIdx(state, idx) {
    state.idx = idx
  },
  setFound(state, found) {
    state.found = found
  },
  setShowSearch(state, show) {
    state.showSearch = show
  }
}
