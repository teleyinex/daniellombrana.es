<template lang="pug">
v-container(fluid grid-list-xl)
  v-layout(row wrap)
      template(v-for='(blogpost, idx) in active')
        v-flex(xs12, md6)
          v-card(:key='idx', :hover="true" :nuxt="true" @click="goTo(blogpost.href)")
            v-img(
              :src='img(blogpost).src',
              :aspect-ratio='4/3',
              :srcset="img(blogpost).srcSet"
              :lazy-src="img(blogpost).placeholder") 
            v-card-title(primary-title)
              .contentCard
                h2.mb-0
                  | {{ blogpost.title }}
            v-card-actions
              v-btn.pa-0(flat, color="hsla(204, 64%, 24%, 1)", @click="goTo(blogpost.href)") {{$t('readmore')}}
          v-spacer(:key='`space-${idx}`')
      v-flex(xs12, md6)
        InfiniteLoading(
          ref="infiniteLoading" 
          @infinite="onInfinite")
            p(slot='no-more') {{$t('noBlogposts')}}
            p(slot='no-results') {{$t('noBlogposts')}}


</template>
<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  components: {
    InfiniteLoading
  },
  props: {
    blogposts: {
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
    img(blog) {
      return require(`~/assets/${blog.photo}`)
    },
    goTo(link) {
      this.$router.push(link)
    },
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    onInfinite($state) {
      const t = this.getRndInteger(900, 1000)
      setTimeout(() => {
        this.offset = this.offset + this.limit
        const slice = this.blogposts.slice(
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
  }
}
</script>
<style lang="styl" scoped>
@require '~assets/style/colors.styl'
.contentCard
  min-height: 122px
  h2 
    color: primary-blog-800
</style>
