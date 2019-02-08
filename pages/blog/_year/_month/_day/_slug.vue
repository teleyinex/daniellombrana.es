<template lang="pug">
  blogpost(:blog="blog", :blogposts="blogposts")
</template>
<script>
import blogSlug from '~/mixins/blogSlug.js'
import blogpost from '~/components/blogpost.vue'
export default {
  layout: 'page',
  scrollToTop: true,
  components: {
    blogpost
  },
  mixins: [blogSlug]
}
</script>
