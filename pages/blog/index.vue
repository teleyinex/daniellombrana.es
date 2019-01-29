<template lang="pug">
  blog(:blogposts="blogposts", :active="active")
</template>

<script>
import blog from '~/components/blog.vue'
import blogm from '~/mixins/blog.js'
export default {
  layout: 'page',
  components: {
    blog
  },
  mixins: [blogm],
  head() {
    return {
      title: this.$t('blogTitle'),
      meta: [
        {
          hid: 'projects',
          name: 'description',
          content: this.$t('blogSubtitle')
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://daniellombrana.es/assets/img/blog/blogheader.jpg'
        }
      ]
    }
  }
}
</script>
