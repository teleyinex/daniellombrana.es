<template lang="pug">
v-container(fluid grid-list-xl)
  v-layout(row wrap)
      template(v-for='(project, idx) in projects')
        v-flex(xs12, md6)
          v-card(:key='idx')
            v-img(:src='project.photo', :aspect-ratio='4/3', :srcset="project.photoSrcSet" sizes="(max-width:412px) 400px,  (max-width:768px) 768px, 1040px")
            v-card-title(primary-title)
              .contentCard
                h2.mb-0
                  | {{ project.title }}
            v-card-actions
              v-btn.pa-0(flat, :color="$store.state.color", :href="project.href") Read more
          v-spacer(:key='`space-${idx}`')
</template>
<script>
export default {
  layout: 'page',
  async asyncData({ app, store }) {
    store.commit('setActive', 'projects')
    store.commit('setColor', '#f39c12')
    store.commit('setCoverImg', '/assets/img/project/projectheader.jpg')
    store.commit('setPage', {
      title: 'Projects',
      subTitle: 'My crowdsourcing, citizen science and open source projects.',
      gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)'
    })
    const projects = await app.$axios.$get('/projects.json')
    for (const key of Object.keys(projects)) {
      const project = projects[key]
      const photo = `/assets/img/project/${project.icon}.jpg`
      const photoSrcSet = `/assets/img/project/${project.icon}-phone.jpg 400w,
         /assets/img/project/${project.icon}-tablet.jpg 768w,
         /assets/img/project/${project.icon}.jpg 1040w
        `
      const tmp = key.split('-')
      const date = tmp.slice(0, 3)
      const rest = tmp.slice(3)
      let href = `${rest.join('-')}`
      href = `${href}?d=${date[0]}-${date[1]}-${date[2]}`

      project.photoSrcSet = photoSrcSet
      project.photo = photo
      project.href = href
    }
    return {
      projects: projects
    }
  }
}
</script>
