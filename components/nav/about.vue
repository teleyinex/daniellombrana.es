<template lang="pug">
  .icons
    v-btn(icon='', flat='', href='https://www.linkedin.com/in/teleyinex')
      v-icon(color='white')
        | mdi-linkedin
    v-btn(icon='', flat='', href='https://github.com/teleyinex')
      v-icon(color='white')
        | mdi-github-circle
    v-btn(icon='', flat='', href='https://twitter.com/teleyinex')
      v-icon(color='white')
        | mdi-twitter
    v-btn(icon='', flat='', href='https://instagram.com/teleyinex')
      v-icon(color='white')
        | mdi-instagram
</template>
<script>
export default {}
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
