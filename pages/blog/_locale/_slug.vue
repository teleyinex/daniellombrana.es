<template lang="pug">
  blogpost(:blog="blog", :blogposts="blogposts", v-if="$store.state.show")
</template>
<script>
import blogSlug from '~/mixins/blogSlug.js'
import blogpost from '~/components/blogpost.vue'
import { person } from '~/jsonld/person.js'
export default {
  layout: 'page',
  scrollToTop: true,
  components: {
    blogpost
  },
  mixins: [blogSlug],
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      articleBody: this.blog.content,
      about: this.blog.description,
      author: person,
      dateCreated: this.blog.date,
      headline: this.blog.title,
      name: this.blog.title,
      datePublished: this.blog.date,
      publisher: person,
      image: {
        '@type': 'imageObject',
        url: this.img.src,
        height: '640',
        width: '800'
      }
    }
  }
}
</script>
