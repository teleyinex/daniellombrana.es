<template>
  <v-app>
    <div id="page" class="hideonload">
      <div class="navbarContainer">
        <navGen />
      </div>
    </div>
    <v-img
      v-if="$store.state.show"
      cover
      :src="img"
      :aspect-ratio="4/3"
      :lazy-src="img.placeholder"
      :position="whichPosition"
      :gradient="$store.state.page.gradient"
      :max-height="maxHeight"
    >
      <div class="headlines">
        <h1>{{ $store.state.page.title }}</h1>
        <h3>
          {{ $store.state.page.subTitle }}</h1>
        </h3>
        <h5 v-if="$store.state.page.photoUrl">
          Photo by <a style="color:white;" href="$store.state.page.photoUrl">
            {{ $store.state.page.photoAuthor }}
          </a>
        </h5>
      </div>
    </v-img>
    </v-fade-transition>
    <v-container>
      <v-layout align-center justify-center row fill-height>
        <v-flex xs12 md7>
          <v-fade-transition>
            <nuxt />
          </v-fade-transition>
        </v-flex>
        <v-fade-transition>
          <v-footer v-if="$store.state.show" :style="footer" />
        </v-fade-transition>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import navGen from '~/components/nav.vue'
export default {
  components: {
    navGen
  },
  data() {
    return {
      maxHeight: 500
    }
  },

  computed: {
    whichPosition() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return 'center top -150px'
      } else {
        return 'center top'
      }
    },
    footer() {
      return {
        background: this.$store.state.color,
        'min-height': '4px',
        height: '4px'
      }
    },
    img() {
      const url = `https://teleyinex.imgix.net/assets/${
        this.$store.state.heroImg
      }?auto=compress&fm=webp`
      return url
    }
  },
  mounted() {
    if (window.innerWidth >= 1200 && this.$route.name === 'about') {
      this.maxHeight = 520
    }
    if (window.innerWidth >= 1400 && this.$route.name === 'about') {
      this.maxHeight = 720
    }
  }
}
</script>
<style lang="styl" scoped>
@require '~assets/style/colors.styl';

.navbar-blog 
  background: primary-blog-500


.navbar-blogpost
  background: primary-blog-500

.navbar-photography
  background: primary-photography-500

.navbar-project
  background: primary-project-500

.navbarContainer
  height: 60px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  height: 60px;
  transition: 0.5s opacity;

.headlines
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
  padding: 15px;
  text-align: center;
  h1, h2, h3, h4, h5, h6
    color: white
</style>
