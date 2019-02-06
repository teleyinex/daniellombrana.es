export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: 'author', content: 'Daniel Lombraña' },
        {
          name: 'description',
          property: 'og:description',
          content: this.project.meta_description,
          hid: 'description'
        },
        { property: 'og:title', content: this.project.title },
        {
          property: 'og:image',
          content: `${this.domain}/${this.img}`
        },
        {
          name: 'twitter:description',
          content: this.project.meta_description
        },
        {
          name: 'twitter:image',
          content: `${this.domain}/${this.img}`
        }
      ],
      title: this.project.title
    }
  },
  async asyncData({ app, params, query, store }) {
    if (params.slug.indexOf('.html') >= 0) {
      params.slug = params.slug.replace('.html', '')
    }
    let projectUrl = '/projects.json'
    if (store.state.locale === 'es') {
      projectUrl = '/es/projects.json'
    }
    const projects = await app.$axios.$get(projectUrl)
    let project = null
    for (const k of Object.keys(projects)) {
      if (k.indexOf(params.slug) >= 0) {
        project = projects[k]
        break
      }
    }
    const photo = `img/project/${project.icon}.jpg`
    project.photo = photo
    store.commit('setActive', 'projects')
    store.commit('setColor', '#f39c12')
    store.commit('setCoverImg', photo)
    store.commit('setPage', {
      title: project.title,
      photoAuthor: project.icon_author,
      photoUrl: project.icon_url,
      gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)'
    })

    return {
      project,
      projects,
      domain: 'https://daniellombrana.es'
    }
  },
  computed: {
    img() {
      return require(`~/assets/${this.$store.state.heroImg}`)
    }
  }
}
