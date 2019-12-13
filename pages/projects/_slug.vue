<template lang="pug">
  project(:project="project", :projects="projects", v-if="$store.state.show")
</template>
<script>
import project from '~/components/project.vue'
import projectsSlug from '~/mixins/projectsSlug'
export default {
  layout: 'page',
  components: {
    project
  },
  mixins: [projectsSlug],
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'Project',
      name: this.project.name,
      description: this.project.meta_description,
      url: this.$route.fullPath
    }
  }
}
</script>
