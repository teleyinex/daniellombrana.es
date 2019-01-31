<template lang="pug">
  .blogContent(v-html="$md.render(blog.content)")
</template>
<script>
import blogSlug from '~/mixins/blogSlug.js'
export default {
  layout: 'page',
  scrollToTop: true,
  mixins: [blogSlug]
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
