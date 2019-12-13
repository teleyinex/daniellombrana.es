<template>
  <v-app style="width:100vw; height:100vh; overflow: hidden;">
    <nuxt />
    <noscript>You need JavaScript to see this page.</noscript>
  </v-app>
</template>

<script>
import { person } from '~/jsonld/person.js'
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
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      abstract:
        'Dad, husband, geek, computer engineer, crowdsourcing expert, citizen science researcher, comics reader, pilates practitioner, runner & Founder at Scifabric.',
      author: person
    }
  }
}
</script>
