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
      title: 'About me',
      meta: [
        {
          hid: 'aboutme',
          name: 'description',
          content: 'My about page'
        }
      ]
    }
  },
  layout: 'page'
}
</script>
