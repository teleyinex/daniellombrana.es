<template lang="pug">
  project(:project="project", :projects="projects")
</template>
<script>
import project from '~/components/project.vue'
import projectsSlug from '~/mixins/projectsSlug'
export default {
  layout: 'page',
  mixins: [projectsSlug],
  components: {
    project
  }
}
</script>
