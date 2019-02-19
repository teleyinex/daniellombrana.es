<template lang="pug">
  .icons
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
</template>
<script>
import nav from '~/mixins/nav.js'
// import socialMediaLinks from 'social-media-links'
export default {
  mixins: [nav],
  computed: {
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
  }
}
</script>
<style lang="scss" scoped>
.icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
}
</style>
