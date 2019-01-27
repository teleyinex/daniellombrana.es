<template lang="pug">
  .blogContent(v-html="$md.render(blog.content)")
</template>
<script>
export default {
  layout: 'page',
  scrollToTop: true,
  mounted() {
    window.scrollTo(0, 0)
  },
  async asyncData({ app, params, store, payload }) {
    if (params.slug.indexOf('.html') >= 0) {
      params.slug = params.slug.replace('.html', '')
    }
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
<style lang="styl">
@require '~assets/style/colors.styl'
code {
  display: flex;
  padding: 15px;
  margin-bottom: 64px;
  overflow: auto;
  color: primary-blog-700;
  border-radius: 0;
  min-width: 300px;
}

code::-webkit-scrollbar,
code::-webkit-scrollbar:horizontal, {
    width: 4px;
    height: 4px
}
 
code::-webkit-scrollbar-track {
    background: gray-100
}
 
code::-webkit-scrollbar-thumb {
    background: primary-blog-700
}
code::-webkit-scrollbar-thumb:window-inactive {
	background: gray-400
}

code::-webit-scrollbar-corner {
  display: none;
}


.blogContent > p > img {
  display: block;
  max-width: 100%;
  height: auto;
}

.blogContent a,
.blogContent > a,
.blogContent > p > a {
  text-decoration: none;
  border-bottom: 1px solid primary-blog-100
  box-shadow: inset 0 -4px 0 primary-blog-100
  transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
}

.blogContent a:hover,
.blogContent > a:hover,
.blogContent > p > a:hover {
  background: primary-blog-100
  color: primary-blog-800
}

.blogContent h1, h2, h3, h4, h5, h6
  color: primary-blog-900
.blogContent ul
  list-style: none

.blogContent ul li::before {
  content: "\2022";
  color: primary-blog-600;
  font-size: 20px;
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: -1em;
}

</style>
