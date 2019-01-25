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
  mixins: [projectsm]
}
</script>
