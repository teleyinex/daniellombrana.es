export default {
  async asyncData({ app, store }) {
    store.commit('setActive', 'projects')
    store.commit('setColor', '#f39c12')
    store.commit('setCoverImg', '/assets/img/project/projectheader.jpg')
    const coverSrcSet = `/assets/img/project/projectheader-phone.jpg 400w,
       /assets/img/project/projectheader-tablet.jpg 768w,
       /assets/img/project/projectheader.jpg 1040w
      `

    store.commit('setPage', {
      title: app.i18n.t('projectsTitle'),
      subTitle: app.i18n.t('projectsSubtitle'),
      gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)',
      sizes: '(max-width:412px) 400px,  (max-width:768px) 768px, 1040px',
      phtoSrcSet: coverSrcSet
    })
    const data = await app.$axios.$get(`/${store.state.locale}/projects.json`)
    let projects = []
    for (const key of Object.keys(data)) {
      const project = data[key]
      const photo = `/assets/img/project/${project.icon}.jpg`
      const photoSrcSet = `/assets/img/project/${project.icon}-phone.jpg 400w,
         /assets/img/project/${project.icon}-tablet.jpg 768w,
         /assets/img/project/${project.icon}.jpg 1040w
        `
      const tmp = key.split('-')
      const rest = tmp.slice(3)
      let href = `${rest.join('-')}`
      href = `/projects/${href}`
      if (store.state.locale === 'es') {
        href = `/es${href}`
      }

      project.photoSrcSet = photoSrcSet
      project.photo = photo
      project.href = href
      console.log(project.href)
      projects.push(project)
    }
    projects = projects.reverse()
    return {
      projects,
      active: projects.slice(0, 4)
    }
  }
}
