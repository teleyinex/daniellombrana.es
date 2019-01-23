<template lang="pug">
  .icons
    v-btn#closebtn(flat='', icon='', @click="goBack")
      v-icon(color='white')
          | mdi-arrow-left
    v-btn(icon='', flat='', href='https://unsplash.com/@teleyinex')
      v-avatar(tile, :size="20")
        img(src='/assets/img/unsplash.png')
    v-btn(icon='', flat='', href='https://instagram.com/teleyinex')
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
