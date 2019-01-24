<template lang="pug">
  .projectContent(v-html="$md.render(project.content)")
</template>
<script>
export default {
  layout: 'page',
  async asyncData({ app, params, query, store }) {
    const projects = await app.$axios.$get(`/projects.json`)
    let project = null
    for (const k of Object.keys(projects)) {
      if (k.indexOf(params.slug) >= 0) {
        project = projects[k]
        break
      }
    }
    const photo = `/assets/img/project/${project.icon}.jpg`
    const photoSrcSet = `/assets/img/project/${project.icon}-phone.jpg 400w,
       /assets/img/project/${project.icon}-tablet.jpg 768w,
       /assets/img/project/${project.icon}.jpg 1040w
      `
    store.commit('setActive', 'projects')
    store.commit('setColor', '#f39c12')
    store.commit('setCoverImg', photo)
    store.commit('setPage', {
      title: project.title,
      photoAuthor: project.icon_author,
      photoUrl: project.icon_url,
      photoSrcSet,
      gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)'
    })

    return {
      project
    }
  }
}
</script>
<style lang="scss">
code {
  display: flex;
  padding: 15px;
  margin-bottom: 64px;
  overflow: scroll;
}
.projectContent > p > img {
  display: block;
  max-width: 100%;
  height: auto;
}

$color: #f39c12;

.projectContent a,
.projectContent > a,
.projectContent > p > a {
  text-decoration: none;
  border-bottom: 1px solid $color;
  box-shadow: inset 0 -4px 0 $color;
  transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
}

.projectContent a:hover,
.projectContent > a:hover,
.projectContent > p > a:hover {
  background: $color;
}
</style>
