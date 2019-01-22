<template lang="pug">
  .projectContent(v-html="html")
</template>
<script>
export default {
  layout: 'page',
  async asyncData({ app, params, query, store }) {
    const slug = `${query.d}-${params.slug.replace('.html', '.md')}`
    const fm = await import(`~/static/projects/${slug}`)
    const photo = `/assets/img/project/${fm.attributes.icon}.jpg`
    const photoSrcSet = `/assets/img/project/${
      fm.attributes.icon
    }-phone.jpg 400w,
       /assets/img/project/${fm.attributes.icon}-tablet.jpg 768w,
       /assets/img/project/${fm.attributes.icon}.jpg 1040w
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
.projectContent > p > img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
