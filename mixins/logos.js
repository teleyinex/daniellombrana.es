export default {
  props: {
    start: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    start() {
      if (this.start) {
        this.$refs.animate.beginElement()
      }
    }
  }
}
