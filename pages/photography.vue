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
  mixins: [photom],
  head() {
    return {
      title: this.$t('photographyTitle'),
      meta: [
        {
          hid: 'photographyTitle',
          name: 'description',
          content: this.$t('photographySubtitle')
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://daniellombrana.es/assets/img/photography/photographyheader.jpg'
        }
      ]
    }
  }
}
</script>
