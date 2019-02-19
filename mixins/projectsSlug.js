import projectsEs from '~/static/es/projects.json'
import projectsEn from '~/static/en/projects.json'
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { hid: 'author', name: 'author', content: 'Daniel Lombraña' },
        {
          name: 'description',
          property: 'og:description',
          content: this.project.meta_description,
          hid: 'description'
        },
        { hid: 'og:title', property: 'og:title', content: this.project.title },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://daniellombrana.es${this.img}`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.project.meta_description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://daniellombrana.es${this.img}`
        }
      ],
      title: this.project.title
    }
  },
  asyncData({ app, params, query, store }) {
    if (params.slug.indexOf('.html') >= 0) {
      params.slug = params.slug.replace('.html', '')
    }
    let projects = projectsEn
    if (store.state.locale === 'es') {
      projects = projectsEs
    }
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

    delete projects[project.basename]

    const find = '{: .img-responsive}'
    const re = new RegExp(find, 'g')
    project.content = project.content.replace('<!--more-->', '')
    project.content = project.content.replace(re, '\n')

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
