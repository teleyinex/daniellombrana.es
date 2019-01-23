<template lang="pug">
v-container(fluid grid-list-xl)
  v-layout(row wrap)
      template(v-for='(blogpost, idx) in active')
        v-flex(xs12, md6)
          v-card(:key='idx', :hover="true")
            v-img(:src='blogpost.photo', :aspect-ratio='4/3', :srcset="blogpost.photoSrcSet" sizes="(max-width:412px) 400px,  (max-width:768px) 768px, 1040px")
            v-card-title(primary-title)
              .contentCard
                h2.mb-0
                  | {{ blogpost.title }}
            v-card-actions
              v-btn.pa-0(flat, :color="$store.state.color", :to="blogpost.href", :nuxt="true") Read more
          v-spacer(:key='`space-${idx}`')
      v-flex(xs12, md6)
        InfiniteLoading(
          ref="infiniteLoading" 
          @infinite="onInfinite")
            p(slot='no-more') No more blogposts.
            p(slot='no-results') No more blogposts.


</template>
<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  layout: 'page',
  components: {
    InfiniteLoading
  },
  methods: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    onInfinite($state) {
      const t = this.getRndInteger(900, 1000)
      setTimeout(() => {
        this.offset = this.offset + this.limit
        const slice = this.blogposts.slice(
          this.offset,
          this.offset + this.limit - 1
        )
        if (slice.length > 0) {
          this.active = this.active.concat(slice)
          $state.loaded()
        } else {
          $state.complete()
        }
      }, t)
    }
  },
  async asyncData({ app, store }) {
    store.commit('setActive', 'blog')
    store.commit('setColor', '#2980b9')
    store.commit('setCoverImg', '/assets/img/blog/blogheader.jpg')
    const coverSrcSet = `/assets/img/blog/blogheader-phone.jpg 400w,
       /assets/img/blog/blogheader-tablet.jpg 768w,
       /assets/img/blog/blogheader.jpg 1040w
      `

    store.commit('setPage', {
      title: 'Blog',
      subTitle:
        'My personal view on crowdsourcing, citizen science and web development.',
      gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)',
      sizes: '(max-width:412px) 400px,  (max-width:768px) 768px, 1040px',
      phtoSrcSet: coverSrcSet
    })
    const data = await app.$axios.$get('/blogposts.json')
    let blogposts = []
    for (const key of Object.keys(data)) {
      const blog = data[key]
      const photo = `/assets/img/blog/${blog.icon}.jpg`
      const photoSrcSet = `/assets/img/blog/${blog.icon}-phone.jpg 400w,
         /assets/img/blog/${blog.icon}-tablet.jpg 768w,
         /assets/img/blog/${blog.icon}.jpg 1040w
        `
      const tmp = key.split('-')
      const date = tmp.slice(0, 3)
      const rest = tmp.slice(3)
      let href = `${date[0]}/${date[1]}/${date[2]}/${rest.join('-')}`
      href = href.replace('.md', '.html')

      blog.photoSrcSet = photoSrcSet
      blog.photo = photo
      blog.href = href
      blogposts.push(blog)
    }
    blogposts = blogposts.reverse()
    return {
      blogposts,
      active: blogposts.slice(0, 4),
      offset: 0,
      limit: 5
    }
  }
}
</script>
<style lang="scss" scoped>
.contentCard {
  min-height: 84px;
}
</style>
