<template lang="pug">
  photo(:photos="photos")
</template>
<script>
import photo from '~/components/photography.vue'
import photom from '~/mixins/photography.js'
export default {
  layout: 'page',
  components: {
    photo
  },
  mixins: [photom]
}
</script>
