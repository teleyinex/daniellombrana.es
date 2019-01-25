export default {
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
      subTitle: app.i18n.t('blogSubtitle'),
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
      let href = `/blog/${date[0]}/${date[1]}/${date[2]}/${rest.join('-')}`
      href = href.replace('.md', '.html')

      blog.photoSrcSet = photoSrcSet
      blog.photo = photo
      blog.href = href
      blogposts.push(blog)
    }
    blogposts = blogposts.reverse()
    return {
      blogposts,
      active: blogposts.slice(0, 4)
    }
  }
}
