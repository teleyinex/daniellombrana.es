<template lang="pug">
  .blogContent(v-html="html")
</template>
<script>
export default {
  layout: 'page',
  async asyncData({ app, params, store }) {
    const slug = `${params.year}-${params.month}-${
      params.day
    }-${params.slug.replace('.html', '.md')}`
    const fm = await import(`~/static/blogposts/${slug}`)
    const photo = `/assets/img/blog/${fm.attributes.icon}.jpg`
    const photoSrcSet = `/assets/img/blog/${fm.attributes.icon}-phone.jpg 400w,
       /assets/img/blog/${fm.attributes.icon}-tablet.jpg 768w,
       /assets/img/blog/${fm.attributes.icon}.jpg 1040w
      `
    store.commit('setColor', '#2980b9')
    store.commit('setCoverImg', photo)
    store.commit('setPage', {
      title: fm.attributes.title,
      photoAuthor: fm.attributes.icon_author,
      photoUrl: fm.attributes.icon_url,
      photoSrcSet
    })

    return {
      attributes: fm.attributes,
      body: fm.body,
      html: fm.html
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
