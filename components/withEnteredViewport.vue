<template lang="pug">
  div
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
