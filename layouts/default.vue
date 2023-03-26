<template>
  <v-app style="width:100vw; height: 100dvh;">
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
  mounted() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  },
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
