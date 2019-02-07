export default {
  props: {
    close: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    goBack(id) {
      this.$emit('update:close', true)
    }
  }
}
