<template lang="pug">
  div
    v-layout(align-center justify-center row fill-heigh)
      v-flex(xs12 md10)
        .about(style="margin-top:50px;")

    v-layout(row wrap justify-center)
      v-flex(xs12 md3)
        vuejs(class="icon")

      v-flex(xs12 md3)
        nuxtjs(class="icon")

      v-flex(xs12 md3)
        postgresql(class="icon")

      v-flex(xs12 md3)
        redis(class="icon")

    v-layout(row align-center justify-center wrap)
      v-flex(xs12 md3)
        html5(class="icon")

      v-flex(xs12 md3)
        css3(class="icon")

      v-flex(xs12 md3)
        python(class="icon")

      v-flex(xs12 md3)
        solidity(class="icon")

    v-layout(align-center justify-center row fill-heigh)
      v-flex(xs12 md10)
</template>
<script>
import python from '~/components/logos/python.vue'
import postgresql from '~/components/logos/postgresql.vue'
import nuxtjs from '~/components/logos/nuxtjs.vue'
import html5 from '~/components/logos/html5.vue'
import css3 from '~/components/logos/css3.vue'
import redis from '~/components/logos/redis.vue'
import vuejs from '~/components/logos/vuejs.vue'
import solidity from '~/components/logos/solidity.vue'
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
    vuejs,
    solidity
  }
}
</script>
<style lang="styl" scoped>
  .icon
    margin-bottom: 50px
</style>
