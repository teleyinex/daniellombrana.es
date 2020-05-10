<template>
  <v-btn
    href="https://calendly.com/teleyinex/30min"
    color="hsla(282, 44%, 27%, 1)"
    class="ml-0"
    dark
    large
    @click="open"
    style="margin-top: 50px;"
  >
    {{ $t('bookAday') }}
  </v-btn>
</template>
<script>
export default {
  methods: {
    open() {
      this.$ga.event('about', 'button', 'bookAday', 1)
    }
  }
}
</script>
