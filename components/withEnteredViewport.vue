<template lang="pug">
  .center
    slot(:entered-viewport="enteredViewport")
</template>

<script>
export default {
  data() {
    return {
      enteredViewport: false
    }
  },
  mounted() {
    const observer = new IntersectionObserver(([entry], observer) => {
      if (entry.intersectionRatio > 0) {
        this.enteredViewport = true
        observer.disconnect()
      }
    })

    observer.observe(this.$el)
  }
}
</script>
<style lang="styl" scoped>
  .center
    display: block
</style>
