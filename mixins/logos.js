export default {
  props: {
    start: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    startAnim() {
      if (this.start && this.$refs.hasOwnProperty('animate')) {
        setTimeout(this.$refs.animate.beginElement())
      }
    }
  },
  watch: {
    start() {
      setTimeout(this.startAnim, 500)
    }
  }
}
