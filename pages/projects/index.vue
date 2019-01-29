<template lang="pug">
  projects(:projects="projects", :active="active")
</template>
<script>
import projects from '~/components/projects.vue'
import projectsm from '~/mixins/projects.js'
export default {
  layout: 'page',
  components: {
    projects
  },
  mixins: [projectsm],
  head() {
    return {
      title: this.$t('projectsTitle'),
      meta: [
        {
          hid: 'projects',
          name: 'description',
          content: this.$t('projectsSubtitle')
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://daniellombrana.es/assets/img/project/projectheader.jpg'
        }
      ]
    }
  }
}
</script>
