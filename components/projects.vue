<template lang="pug">
v-container(fluid grid-list-xl)
  v-layout(row wrap)
      template(v-for='(project, idx) in active')
        v-flex(xs12, md6)
          v-card(:key='idx', :hover="true", :nuxt="true", @click="goTo(project.href)")
            v-img(
              :src='img(project).src',
              :aspect-ratio='4/3',
              :srcset="img(project).srcSet"
              :lazy-src="img(project).placeholder")
            v-card-title(primary-title)
              .contentCard
                h2.mb-0
                  | {{ project.title }}
            v-card-actions
              v-btn.pa-0(flat, color="hsla(37, 90%, 21%, 1)", @click="goTo(project.href)") {{$t('readmore')}}
          v-spacer(:key='`space-${idx}`')
      v-flex(xs12, md6)
        InfiniteLoading(
          ref="infiniteLoading" 
          @infinite="onInfinite")
            p(slot='no-more') {{$t('noProjects')}}
            p(slot='no-results') {{$t('noProjects')}}

</template>
<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  components: {
    InfiniteLoading
  },
  props: {
    projects: {
      default: () => {
        return []
      },
      type: Array
    },
    active: {
      default: () => {
        return []
      },
      type: Array
    }
  },
  data() {
    return {
      limit: 5,
      offset: 0
    }
  },

  methods: {
    img(project) {
      return require(`~/assets/${project.photo}`)
    },
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
    store.commit('setCoverImg', 'img/project/projectheader.jpg')

    store.commit('setPage', {
      title: 'Projects',
      subTitle: 'My crowdsourcing, citizen science and open source projects.',
      gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)'
    })
    const data = await app.$axios.$get('/projects.json')
    let projects = []
    for (const key of Object.keys(data)) {
      const project = data[key]
      const photo = `img/project/${project.icon}.jpg`
      const tmp = key.split('-')
      const date = tmp.slice(0, 3)
      const rest = tmp.slice(3)
      let href = `${rest.join('-')}`
      href = `${href}?d=${date[0]}-${date[1]}-${date[2]}`

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
