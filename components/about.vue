<template>
  <v-container fluid grid-list-xl>
    <v-layout align-center justify-center row fill-heigh>
      <v-flex xs12 md10>
        <div itemscope itemtype="http://schema.org/Person" class="about" v-html="about" />
        <v-btn href="https://calendly.com/scifabric" color="hsla(282, 44%, 27%, 1)" class="ml-0" dark large>
          {{ $t('bookAday') }}
        </v-btn>
      </v-flex>
    </v-layout>
    <!--<v-layout row wrap>
      <template v-for="(point, idx) in visualPoints">
        <v-flex :key="idx" xs12, md6>
          <v-card>
            <v-img
              :src="getImg(point).src"
              :srcset="getImg(point).srcSet"
              :lazy-src="getImg(point).placeholder"
              :aspect-ratio="4/3"
            />
            <v-card-title primary-title>
              <div class="contentCard">
                <h2 class="mb-0">
                  {{ point.title }}
                </h2>
                <p>{{ point.text }}</p>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </template>
        </v-layout>-->
  </v-container>
</template>
<script>
export default {
  computed: {
    visualPoints() {
      return require(`~/i18n/visualpoint_${this.$store.state.locale}.json`)
    },
    about() {
      return require(`~/i18n/about_${this.$store.state.locale}.md`)
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

.about > section > h1, h2, h3, h4, h5, h6, strong {
	color: primary-about-800
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
