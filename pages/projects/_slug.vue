<template lang="pug">
  .projectContent(v-html="$md.render(project.content)")
</template>
<script>
import projectsSlug from '~/mixins/projectsSlug'
export default {
  layout: 'page',
  mixins: [projectsSlug]
}
</script>
<style lang="styl">
@require '~assets/style/colors.styl'
code {
  display: flex;
  padding: 15px;
  margin-bottom: 64px;
  overflow: scroll;
  color: primary-project-600
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
    background: primary-project-700
}
code::-webkit-scrollbar-thumb:window-inactive {
	background: gray-400
}

code::-webit-scrollbar-corner {
  display: none;
}
.projectContent > p > img {
  display: block;
  max-width: 100%;
  height: auto;
}

.projectContent a,
.projectContent > a,
.projectContent > p > a {
  text-decoration: none;
  border-bottom: 1px solid primary-project-200;
  box-shadow: inset 0 -4px 0 primary-project-200;
  transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
}

.projectContent a:hover,
.projectContent > a:hover,
.projectContent > p > a:hover {
  background: primary-project-200;
  color: primary-project-900
}

.projectContent h1, h2, h3, h4, h5, h6
  color: primary-project-900
.projectContent ul
  list-style: none

.projectContent ul li::before {
  content: "\2022";
  color: primary-project-600;
  font-size: 20px;
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: -1em;
}
</style>
