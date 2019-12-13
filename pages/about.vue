<template>
  <about />
</template>
<script>
import about from '~/components/about.vue'
import aboutm from '~/mixins/about.js'
import { person } from '~/jsonld/person.js'
export default {
  components: {
    about
  },
  mixins: [aboutm],
  layout: 'about',
  jsonld() {
    return person
  }
}
</script>
