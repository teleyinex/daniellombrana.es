<template lang="pug">
  div
    .blogContent(v-html="$md.render(blog.content)")
    v-container(fluid grid-list-xl ml-0 pa-0, v-if="suggestedBlogposts.length")
      v-layout(row wrap)
        v-flex(xs12)
          h2(style="margin-top:50px;") {{$tc('keepReadingblogposts', suggestedBlogposts.length)}}
        template(v-for="blogpost of suggestedBlogposts")
          v-flex(xs12, md6)
            v-card()
              v-img(
                :src="suggestedCover(blogpost)"
                :aspect-ratio="4/3"
                :srcset="suggestedCover(blogpost).srcSet"
                :lazy-src="suggestedCover(blogpost).placeholder"
                )
              v-card-title(primary-title='')
                .contentCard
                  h2.mb-0
                    | {{ blogpost.title }}
              v-card-actions
                v-btn.pa-0(flat, color="hsla(37, 90%, 21%, 1)", @click="goTo(blogpost.href)") {{$t('readmore')}}

</template>
<script>
import { getUrl, isRelated } from '~/utils/blogposts.js'
export default {
  props: {
    blog: {
      default: () => {},
      type: Object
    },
    blogposts: {
      default: () => {},
      type: Object
    }
  },
  computed: {
    suggestedBlogposts() {
      const posts = Object.keys(this.blogposts)
      let candidates = []
      for (const key of posts) {
        candidates.push(this.blogposts[key])
      }
      if (this.blog.hasOwnProperty('tags')) {
        candidates = candidates.filter(p => isRelated(this.blog.tags, p.tags))
        for (const blog of candidates) {
          blog.href = getUrl(blog.basename, this.$store.state.locale)
        }
        return candidates.slice(0, 2)
      } else {
        return []
      }
    }
  },
  methods: {
    suggestedCover(blog) {
      const photo = `img/blog/${blog.icon}.jpg`
      return require(`~/assets/${photo}`)
    },
    goTo(link) {
      this.$store.commit('setShow', false)
      this.$router.push(link)
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
