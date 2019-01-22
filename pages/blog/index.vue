<template lang="pug">
v-container(fluid grid-list-xl)
  v-layout(row wrap)
      template(v-for='(blogpost, idx) in blogposts')
        v-flex(xs12, md6)
          v-card(:key='idx')
            v-img(:src='blogpost.photo', :aspect-ratio='4/3', :srcset="blogpost.photoSrcSet" sizes="(max-width:412px) 400px,  (max-width:768px) 768px, 1040px")
            v-card-title(primary-title)
              .contentCard
                h2.mb-0
                  | {{ blogpost.title }}
            v-card-actions
              v-btn.pa-0(flat, :color="$store.state.color", :href="blogpost.href") Read more
          v-spacer(:key='`space-${idx}`')

</template>
<script>
export default {
  layout: 'page',
  async asyncData({ store }) {
    store.commit('setColor', '#2980b9')
    store.commit('setCoverImg', '/assets/img/blog/blogheader.jpg')
    store.commit('setPage', {
      title: 'Blog',
      subTitle:
        'My personal view on crowdsourcing, citizen science and web development.'
    })
    const blogpostsFiles = process.env.blogposts
    const blogposts = []
    for (const slug of blogpostsFiles.reverse()) {
      const fm = await import(`~/static/blogposts/${slug}`)
      const photo = `/assets/img/blog/${fm.attributes.icon}.jpg`
      const photoSrcSet = `/assets/img/blog/${
        fm.attributes.icon
      }-phone.jpg 400w,
         /assets/img/blog/${fm.attributes.icon}-tablet.jpg 768w,
         /assets/img/blog/${fm.attributes.icon}.jpg 1040w
        `
      const tmp = slug.split('-')
      const date = tmp.slice(0, 3)
      const rest = tmp.slice(3)
      let href = `${date[0]}/${date[1]}/${date[2]}/${rest.join('-')}`
      href = href.replace('.md', '.html')

      blogposts.push({
        title: fm.attributes.title,
        photoAuthor: fm.attributes.icon_author,
        photoUrl: fm.attributes.icon_url,
        photoSrcSet,
        photo,
        description: fm.attributes.description,
        href
      })
    }
    return {
      blogposts
    }
  }
}
</script>
<style lang="scss" scoped>
.contentCard {
  min-height: 84px;
}
</style>
