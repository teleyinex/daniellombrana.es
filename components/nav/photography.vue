<template lang="pug">
  .icons
    v-btn#closebtn(flat='', icon='', @click="goBack" aria-label="home")
      v-icon(color='white')
          | mdi-home-variant-outline
    v-btn(icon='', flat='', href='https://unsplash.com/@teleyinex', aria-label="Daniel's Unsplash page")
      v-avatar(tile, :size="20")
        img(src='/assets/img/unsplash.png' alt="Unsplash icon")
    v-btn(icon='', flat='', href='https://instagram.com/teleyinex', aria-label="Daniel's Instagram page")
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
