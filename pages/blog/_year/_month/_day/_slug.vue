<template lang="pug">
  .blogContent(v-html="$md.render(blog.content)")
</template>
<script>
export default {
  layout: 'page',
  async asyncData({ app, params, store, payload }) {
    const slug = `${params.year}-${params.month}-${params.day}-${params.slug}`
    const blogposts = await app.$axios.$get('/blogposts.json')
    const blog = blogposts[slug]
    const photo = `/assets/img/blog/${blog.icon}.jpg`
    const photoSrcSet = `/assets/img/blog/${blog.icon}-phone.jpg 400w,
       /assets/img/blog/${blog.icon}-tablet.jpg 768w,
       /assets/img/blog/${blog.icon}.jpg 1040w
      `
    store.commit('setActive', 'blog')
    store.commit('setColor', '#2980b9')
    store.commit('setCoverImg', photo)
    store.commit('setPage', {
      title: blog.title,
      photoAuthor: blog.icon_author,
      photoUrl: blog.icon_url,
      photoSrcSet,
      gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)'
    })

    blog.content = blog.content.replace('<!--more-->', '')
    blog.content = blog.content.replace('{: .img-responsive}', '\n')

    return {
      blog
    }
  }
}
</script>
<style lang="scss">
code {
  display: flex;
  padding: 15px;
  margin-bottom: 64px;
}
.blogContent > p > img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
