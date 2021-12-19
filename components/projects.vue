<template lang="pug">
v-container(fluid grid-list-xl)
  v-layout(row wrap)
      template(v-for='(project, idx) in active')
        v-flex(xs12, md6)
          v-card(:key='idx', :hover="true", :nuxt="true", @click="goTo(project.href)")
            v-img(
              :src='img(project)',
              :aspect-ratio='4/3',
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
    }
  },
  data() {
    return {
      limit: 5,
      offset: 0,
      active: []
    }
  },

  methods: {
    img(project) {
      const url = `https://teleyinex.imgix.net/assets/${
        project.photo
      }?auto=compress&fm=webp`
      return url
    },
    goTo(link) {
      this.$store.commit('setShow', false)
      this.$router.push(link)
    },
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    onInfinite($state) {
      const t = this.getRndInteger(100, 250)
      setTimeout(() => {
        const slice = this.projects.slice(this.offset, this.offset + this.limit)
        if (slice.length > 0) {
          this.active = this.active.concat(slice)
          $state.loaded()
        } else {
          $state.complete()
        }
        this.offset = this.offset + this.limit
      }, t)
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
