<template lang="pug">
  .icons
    v-btn#closebtn(flat='', icon='', @click="goBack")
      v-icon(color='white')
          | mdi-arrow-left
    v-btn(icon='', flat='', href='https://www.linkedin.com/in/teleyinex')
      v-icon(color='white')
        | mdi-linkedin
    v-btn(icon='', flat='', href='https://twitter.com/teleyinex')
      v-icon(color='white')
        | mdi-twitter
</template>
<script>
import nav from '~/mixins/nav.js'
export default {
  mixins: [nav]
}
</script>
<style lang="scss" scoped>
.icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
}
</style>
