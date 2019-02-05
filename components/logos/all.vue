<template lang="pug">
  div
    v-layout(align-center justify-center row fill-heigh)
      v-flex(xs12 md10)
        .about(style="margin-top:100px;")
          h2 {{ $t('aboutTech') }}

    v-layout(row wrap justify-center)
      v-flex(xs12 md3)
        withEnteredViewport
          vuejs(slot-scope="{ enteredViewport }" :start="enteredViewport" class="icon")

      v-flex(xs12 md3)
        withEnteredViewport
          nuxtjs(slot-scope="{ enteredViewport }" :start="enteredViewport" class="icon")

      v-flex(xs12 md3)
        withEnteredViewport
          postgresql(slot-scope="{ enteredViewport }" :start="enteredViewport" class="icon")

      v-flex(xs12 md3)
        withEnteredViewport
          redis(slot-scope="{ enteredViewport }" :start="enteredViewport" class="icon")

    v-layout(row align-center justify-center wrap)
      v-flex(xs12 md3)
        withEnteredViewport
          html5(slot-scope="{ enteredViewport }" :start="enteredViewport" class="icon")

      v-flex(xs12 md3)
        withEnteredViewport
          css3(slot-scope="{ enteredViewport }" :start="enteredViewport" class="icon")

      v-flex(xs12 md3)
        withEnteredViewport
          python(slot-scope="{ enteredViewport }" :start="enteredViewport" class="icon")


    v-layout(align-center justify-center row fill-heigh)
      v-flex(xs12 md10)
        .about(v-html="$md.render($t('aboutTechInfo'))")
        bookAday
</template>
<script>
import python from '~/components/logos/python.vue'
import postgresql from '~/components/logos/postgresql.vue'
import nuxtjs from '~/components/logos/nuxtjs.vue'
import html5 from '~/components/logos/html5.vue'
import css3 from '~/components/logos/css3.vue'
import redis from '~/components/logos/redis.vue'
import vuejs from '~/components/logos/vuejs.vue'
import withEnteredViewport from '~/components/withEnteredViewport'
import bookAday from '~/components/bookAday'
export default {
  components: {
    bookAday,
    withEnteredViewport,
    python,
    postgresql,
    nuxtjs,
    html5,
    css3,
    redis,
    vuejs
  }
}
</script>
<style lang="styl" scoped>
  .icon
    margin-bottom: 50px
</style>
