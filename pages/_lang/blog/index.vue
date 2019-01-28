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
      title: 'Mi blog',
      meta: [
        {
          hid: 'projects',
          name: 'description',
          content: 'Mis blog posts'
        }
      ]
    }
  }
}
</script>
