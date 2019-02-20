<template lang="pug">
v-container(fluid grid-list-xl)
  v-layout(row wrap)
      template(v-for='(blogpost, idx) in currentActive')
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
        no-ssr
          InfiniteLoading(
            :distance="10"
            spinner="waveDots"
            ref="infiniteLoading" 
            @infinite="onInfinite")
              p(slot='no-more') {{$t('noBlogposts')}}
              p(slot='no-results') {{$t('noBlogposts')}}


</template>
<script>
import { mapState } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import lunr from 'lunr'
require('lunr-languages/lunr.stemmer.support')(lunr)
require('lunr-languages/lunr.multi')(lunr)
require('lunr-languages/lunr.es')(lunr)
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
      offset: 0,
      currentActive: [],
      origBlogposts: []
    }
  },
  created() {
    const self = this
    const idx = lunr(function() {
      this.use(lunr.multiLanguage('en', 'es'))
      this.ref('basename')
      this.field('content')
      self.blogposts.forEach(blog => this.add(blog), this)
    })
    this.$store.commit('setIdx', idx)
    this.currentActive = this.active
    this.origBlogposts = this.blogposts
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
      const t = this.getRndInteger(100, 250)
      setTimeout(() => {
        this.offset = this.offset + this.limit
        const slice = this.origBlogposts.slice(
          this.offset,
          this.offset + this.limit - 1
        )
        if (slice.length > 0) {
          this.currentActive = this.currentActive.concat(slice)
          $state.loaded()
        } else {
          $state.complete()
        }
      }, t)
    }
  },
  computed: {
    ...mapState({
      match: state => state.found
    }),
    filteredPosts() {
      const refs = this.match.map(m => m.ref)
      return this.blogposts.filter(b => {
        return refs.includes(b.basename)
      })
    }
  },
  watch: {
    filteredPosts() {
      this.offset = 0
      this.limit = 5
      if (this.filteredPosts.length) {
        this.currentActive = this.filteredPosts.slice(0, 5)
        this.origBlogposts = this.filteredPosts
      } else {
        this.currentActive = this.active
        this.origBlogposts = this.blogposts
      }
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
