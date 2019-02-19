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
  mixins: [projectsSlug]
}
</script>
