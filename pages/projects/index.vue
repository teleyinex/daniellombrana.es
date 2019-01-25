<template lang="pug">
v-container(fluid grid-list-xl)
  v-layout(row wrap)
      template(v-for='(project, idx) in active')
        v-flex(xs12, md6)
          v-card(:key='idx', :hover="true", :nuxt="true", @click="goTo(project.href)")
            v-img(:src='project.photo', :aspect-ratio='4/3', :srcset="project.photoSrcSet" sizes="(max-width:412px) 400px,  (max-width:768px) 768px, 1040px")
            v-card-title(primary-title)
              .contentCard
                h2.mb-0
                  | {{ project.title }}
            v-card-actions
              v-btn.pa-0(flat, color="hsla(37, 90%, 21%, 1)", @click="goTo(project.href)") Read more
          v-spacer(:key='`space-${idx}`')
      v-flex(xs12, md6)
        InfiniteLoading(
          ref="infiniteLoading" 
          @infinite="onInfinite")
            p(slot='no-more') No more projects.
            p(slot='no-results') No more projects.

</template>
<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  layout: 'page',
  components: {
    InfiniteLoading
  },
  methods: {
    goTo(link) {
      this.$store.commit('setShow', false)
      this.$router.push(link)
    },
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    onInfinite($state) {
      const t = this.getRndInteger(900, 1000)
      setTimeout(() => {
        this.offset = this.offset + this.limit
        const slice = this.projects.slice(
          this.offset,
          this.offset + this.limit - 1
        )
        if (slice.length > 0) {
          this.active = this.active.concat(slice)
          $state.loaded()
        } else {
          $state.complete()
        }
      }, t)
    }
  },
  async asyncData({ app, store }) {
    store.commit('setActive', 'projects')
    store.commit('setColor', '#f39c12')
    store.commit('setCoverImg', '/assets/img/project/projectheader.jpg')
    const coverSrcSet = `/assets/img/project/projectheader-phone.jpg 400w,
       /assets/img/project/projectheader-tablet.jpg 768w,
       /assets/img/project/projectheader.jpg 1040w
      `

    store.commit('setPage', {
      title: 'Projects',
      subTitle: 'My crowdsourcing, citizen science and open source projects.',
      gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)',
      sizes: '(max-width:412px) 400px,  (max-width:768px) 768px, 1040px',
      phtoSrcSet: coverSrcSet
    })
    const data = await app.$axios.$get('/projects.json')
    let projects = []
    for (const key of Object.keys(data)) {
      const project = data[key]
      const photo = `/assets/img/project/${project.icon}.jpg`
      const photoSrcSet = `/assets/img/project/${project.icon}-phone.jpg 400w,
         /assets/img/project/${project.icon}-tablet.jpg 768w,
         /assets/img/project/${project.icon}.jpg 1040w
        `
      const tmp = key.split('-')
      const date = tmp.slice(0, 3)
      const rest = tmp.slice(3)
      let href = `${rest.join('-')}`
      href = `${href}?d=${date[0]}-${date[1]}-${date[2]}`

      project.photoSrcSet = photoSrcSet
      project.photo = photo
      project.href = href
      projects.push(project)
    }
    projects = projects.reverse()
    return {
      projects,
      active: projects.slice(0, 4),
      offset: 0,
      limit: 5
    }
  }
}
</script>
<style lang="styl" scoped>
@require '~assets/style/colors.styl'
.contentCard
  min-height: 122px
  h2 
    color: primary-project-900
</style>
