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
      title: 'My blog',
      meta: [
        {
          hid: 'projects',
          name: 'description',
          content: 'My blog posts'
        }
      ]
    }
  }
}
</script>
