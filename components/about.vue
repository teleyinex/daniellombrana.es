<template lang="pug">
  v-container(fluid grid-list-xl)
    v-layout(align-center justify-center row fill-heigh)
      v-flex(xs12 md10)
        div(itemscope itemtype="http://schema.org/Person" class="about" v-html="about")
        bookAday
    allLogos
</template>
<script>
import allLogos from '~/components/logos/all'
import bookAday from '~/components/bookAday'
export default {
  components: {
    allLogos,
    bookAday
  },
  computed: {
    visualPoints() {
      return require(`~/i18n/visualpoint_${this.$store.state.locale}.json`)
    },
    about() {
      return require(`~/i18n/about_${this.$store.state.locale}.md`).default
    },
    img() {
      return require(`~/assets/${this.$store.state.heroImg}`)
    }
  },
  methods: {
    getImg(img) {
      return require(`~/assets/img/about/${img.cover}.jpg`)
    }
  }
}
</script>
<style lang="styl">
@require '~assets/style/colors.styl'


.headlines {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.about > section > h1,
h2,
h3,
h4,
h5,
h6,
strong {
  color: primary-about-800;
}

.about a,
.about > a,
.about > p > a {
  text-decoration: none;
  border-bottom: 1px solid primary-about-200;
  box-shadow: inset 0 -4px 0 primary-about-200;
  color: gray-900;
  transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
}

.about a:hover,
.about > a:hover,
.about > p > a:hover {
  background: primary-about-200;
  color: primary-about-900;
}

.contentCard {
  min-height: 122px;
}
</style>
