<template>
  <about />
</template>
<script>
import about from '~/components/about.vue'
import aboutm from '~/mixins/about.js'
export default {
  components: {
    about
  },
  mixins: [aboutm],
  head() {
    return {
      title: this.$t('about'),
      meta: [
        {
          hid: 'aboutme',
          name: 'description',
          content: this.$t('aboutDescription')
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://daniellombrana.es/assets/img/blog/avatar.jpg'
        }
      ]
    }
  },
  layout: 'page'
}
</script>
