<template lang="pug">
  .icons
    v-btn#closebtn(flat='', icon='', @click="goBack" aria-label="home")
      v-icon(color='white')
          | mdi-home-variant-outline
    v-btn(icon='', flat='', href='https://www.linkedin.com/in/teleyinex', aria-label="Daniel's linkedin page")
      v-icon(color='white')
        | mdi-linkedin
    v-btn(icon='', flat='', href='https://github.com/teleyinex', aria-label="Daniel's Github page")
      v-icon(color='white')
        | mdi-github-circle
    v-btn(icon='', flat='', href='https://twitter.com/teleyinex' aria-label="Daniel's twitter page")
      v-icon(color='white')
        | mdi-twitter
    v-btn(icon='', flat='', href='https://instagram.com/teleyinex' aria-label="Daniel's instagram page")
      v-icon(color='white')
        | mdi-instagram
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
