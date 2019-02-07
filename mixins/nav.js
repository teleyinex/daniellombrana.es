export default {
  props: {
    close: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    goBack(id) {
      // let url = `/${id}`
      // if (this.$store.state.locale === 'es') {
      //   url = `/es/${id}`
      // }
      // this.$router.push(url)
      this.$emit('update:close', true)
      // this.$store.commit('setShow', false)
    }
  }
}
