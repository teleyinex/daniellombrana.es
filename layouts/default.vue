<template>
  <v-app style="width:100vw; height:100vh; overflow: hidden;">
    <nuxt />
    <noscript>You need JavaScript to see this page.</noscript>
  </v-app>
</template>

<script>
export default {
  // head() {
  //   return this.$nuxtI18nSeo()
  // },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
