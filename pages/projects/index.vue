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
  async asyncData({ store }) {
    store.commit('setColor', '#f39c12')
    store.commit('setCoverImg', '/assets/img/project/projectheader.jpg')
    store.commit('setPage', {
      title: 'Projects',
      subTitle: 'My crowdsourcing, citizen science and open source projects.'
    })
    const projectsFiles = process.env.projects
    const projects = []
    for (const slug of projectsFiles.reverse()) {
      const fm = await import(`~/static/projects/${slug}`)
      const photo = `/assets/img/project/${fm.attributes.icon}.jpg`
      const photoSrcSet = `/assets/img/project/${
        fm.attributes.icon
      }-phone.jpg 400w,
         /assets/img/project/${fm.attributes.icon}-tablet.jpg 768w,
         /assets/img/project/${fm.attributes.icon}.jpg 1040w
        `
      const tmp = slug.split('-')
      const date = tmp.slice(0, 3)
      const rest = tmp.slice(3)
      let href = `${rest.join('-')}`
      href = href.replace('.md', '.html')
      href = `${href}?d=${date[0]}-${date[1]}-${date[2]}`

      projects.push({
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
      projects
    }
  }
}
</script>
