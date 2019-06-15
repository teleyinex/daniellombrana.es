export default {
  data() {
    return {
      start: false
    }
  },
  methods: {
    startAnim() {
      if (this.start && this.$refs.hasOwnProperty('animate')) {
        setTimeout(this.$refs.animate.beginElement())
      }
    },
    visibilityChanged(isVisible, entry) {
      this.start = isVisible
    }
  },
  watch: {
    start() {
      setTimeout(this.startAnim, 500)
    }
  }
}
