<template>
  <div>
    <withEnteredViewport>
      <redis slot-scope="{ enteredViewport }" :start="enteredViewport" />
    </withEnteredViewport>
    <withEnteredViewport>
      <css3 slot-scope="{ enteredViewport }" :start="enteredViewport" />
    </withEnteredViewport>
    <withEnteredViewport>
      <nuxtjs slot-scope="{ enteredViewport }" :start="enteredViewport" />
    </withEnteredViewport>
    <withEnteredViewport>
      <postgresql slot-scope="{ enteredViewport }" :start="enteredViewport" />
    </withEnteredViewport>

    <withEnteredViewport>
      <python slot-scope="{ enteredViewport }" :start="enteredViewport" />
    </withEnteredViewport>
    <withEnteredViewport>
      <vuejs slot-scope="{ enteredViewport }" :start="enteredViewport" />
    </withEnteredViewport>
    <withEnteredViewport>
      <html5 slot-scope="{ enteredViewport }" :start="enteredViewport" />
    </withEnteredViewport>
  </div>
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
export default {
  components: {
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
