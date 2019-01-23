export default {
  props: {
    close: {
      default: false,
      type: Boolean
    }
  },

  methods: {
    goBack() {
      this.$emit('update:close', true)
      this.$store.commit('setShow', false)
    }
  }
}
