<template lang="pug">
  .icons
    v-btn#closebtn(flat='', icon='', @click="goBack")
      v-icon(color='white')
          | mdi-arrow-left
    v-btn(icon='', flat='', :href="linkedin" target="blank")
      v-icon(color='white')
        | mdi-linkedin
    v-btn(icon='', flat='', :href="twitter", target="blank")
      v-icon(color='white')
        | mdi-twitter
</template>
<script>
import nav from '~/mixins/nav.js'
import socialMediaLinks from 'social-media-links'
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
      return socialMediaLinks.create(this.socialLinkedInData)
    },
    twitter() {
      return socialMediaLinks.create(this.socialTwitterData)
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
