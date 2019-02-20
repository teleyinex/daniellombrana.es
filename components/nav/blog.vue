<template lang="pug">
  .icons
    .regular(v-if="!showSearch")
      v-btn#closebtn(flat='', icon='', :nuxt="true", to="/" aria-label="home")
        v-icon(color='white')
            | mdi-home-variant-outline
      v-btn#closebtn(
        flat
        icon
        @click="goBack"
        aria-label="blog index"
        v-show="$route.name === 'lang-blog-year-month-day-slug' || $route.name === 'blog-year-month-day-slug'")
        v-icon(color='white')
            | mdi-view-grid
      v-btn(icon='', flat='', :href="linkedin" target="blank" aria-label="Share this page on LinkedIn")
        v-icon(color='white')
          | mdi-linkedin
      v-btn(icon='', flat='', :href="twitter", target="blank", aria-label="Share this page on Twitter")
        v-icon(color='white')
          | mdi-twitter
      v-btn(icon='', flat='', @click="setShowSearch(true)" aria-label="Search"
        v-show="$route.name === 'lang-blog' || $route.name === 'blog'")
        v-icon(color='white')
          | mdi-magnify 
    .search(v-else)
      v-btn.ml-0(flat icon @click="closeSearch" aria-label="close search bar")
        v-icon(color='white')
            | mdi-arrow-left
      v-slide-x-reverse-transition
        v-text-field(v-model="query", solo, flat, clearable,
        clear-icon='mdi-close', style="margin-top:25px;", autofocus)
</template>
<script>
import nav from '~/mixins/nav.js'
import { debounce } from 'lodash'
import { mapState, mapMutations } from 'vuex'
export default {
  mixins: [nav],
  data() {
    return {
      query: ''
    }
  },
  computed: {
    ...mapState({
      showSearch: state => state.showSearch
    }),
    socialTwitterData() {
      return {
        account: 'twitter',
        url: `https://daniellombrana.es${this.$route.fullPath}`,
        title: this.$store.state.page.title,
        img: this.$store.state.page.photoUrl || this.$store.state.heroImg,
        via: 'teleyinex'
      }
    },
    socialLinkedInData() {
      return {
        account: 'linkedIn',
        url: `https://daniellombrana.es${this.$route.fullPath}`,
        title: this.$store.state.page.title,
        img: this.$store.state.page.photoUrl || this.$store.state.heroImg,
        via: 'teleyinex'
      }
    },
    linkedin() {
      return `https://www.linkedin.com/shareArticle?mini=true&url=${
        this.socialLinkedInData.url
      }&title=${this.socialLinkedInData.title}&source='danielombrana.es`
    },
    twitter() {
      return `http://twitter.com/share?text=${
        this.socialTwitterData.title
      }&url=${this.socialTwitterData.url}`
    }
  },
  watch: {
    query: debounce(
      function() {
        this.search()
      },
      250,
      { maxWait: 1000 }
    )
  },
  methods: {
    ...mapMutations({
      setShowSearch: 'setShowSearch'
    }),
    search() {
      const found = this.$store.state.idx.search(this.query)
      this.$store.commit('setFound', found)
    },
    closeSearch() {
      this.setShowSearch(false)
      this.query = ''
      this.$store.commit('setFound', [])
    }
  }
}
</script>
<style lang="styl" scoped>
.icons,
.regular
  display: flex
  justify-content: space-between
  align-items: center
  color: white
  width: 100%

.search
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
</style>
