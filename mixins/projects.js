export default {
  async asyncData({ app, store }) {
    store.commit('setActive', 'projects')
    store.commit('setColor', '#f39c12')
    store.commit('setCoverImg', 'img/project/projectheader.jpg')

    store.commit('setPage', {
      title: app.i18n.t('projectsTitle'),
      subTitle: app.i18n.t('projectsSubtitle'),
      gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)'
    })
    const data = await app.$axios.$get(`/${store.state.locale}/projects.json`)
    let projects = []
    for (const key of Object.keys(data)) {
      const project = data[key]
      const photo = `img/project/${project.icon}.jpg`
      const tmp = key.split('-')
      const rest = tmp.slice(3)
      let href = `${rest.join('-')}`
      href = `/projects/${href}`
      if (store.state.locale === 'es') {
        href = `/es${href}`
      }

      project.photo = photo
      project.href = href
      projects.push(project)
    }
    projects = projects.reverse()
    return {
      projects,
      active: projects.slice(0, 4)
    }
  }
}
