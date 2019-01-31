export default {
  data() {
    return {
      domain: 'https://daniellombrana.es'
    }
  },
  asyncData({ store }) {
    store.commit('setActive', 'about')
    store.commit('setColor', '#8e44ad')
    store.commit('setCoverImg', 'img/blog/avatar.jpg')

    store.commit('setPage', {
      title: null,
      subTitle: null
    })
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: 'author', content: 'Daniel Lombraña' },
        {
          name: 'description',
          property: 'og:description',
          content: this.$t('about'),
          hid: 'description'
        },
        { property: 'og:title', content: this.$t('about') },
        {
          property: 'og:image',
          content: `${this.domain}${this.img}`
        },
        {
          name: 'twitter:description',
          content: this.$t('about')
        },
        {
          name: 'twitter:image',
          content: `${this.domain}${this.img}`
        }
      ],
      title: this.$t('about')
    }
  },
  computed: {
    img() {
      return require(`~/assets/${this.$store.state.heroImg}`)
    }
  }
}
