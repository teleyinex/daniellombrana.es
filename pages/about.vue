<template>
  <about />
</template>
<script>
import about from '~/components/about.vue'
import aboutm from '~/mixins/about.js'
export default {
  components: {
    about
  },
  mixins: [aboutm],
  layout: 'page'
}
</script>
