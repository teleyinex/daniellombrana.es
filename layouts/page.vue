<template>
  <v-app>
    <div id="page" class="hideonload">
      <div class="navbarContainer">
        <navGen />
      </div>
    </div>
    <v-fade-transition>
      <v-img
        v-if="$store.state.show"
        cover
        :src="$store.state.heroImg"
        :aspect-ratio="4/3"
        position="top"
        :srcset="$store.state.page.photoSrcSet"
        :gradient="$store.state.page.gradient"
        max-height="500px"
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
            <nuxt v-if="$store.state.show" />
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
export default {
  components: {
    navGen: () => import('~/components/nav.vue')
  },
  computed: {
    footer() {
      return {
        background: this.$store.state.color,
        'min-height': '4px',
        height: '4px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/style/colors.scss';

.navbar-blog {
  background: $blog-color;
}

.navbar-blogpost {
  background: $blogpost-color;
}

.navbar-photography {
  background: $photography-color;
}

.navbar-project {
  background: $project-color;
}

.navbar-project-info {
  background: $project-info-color;
}
.navbarContainer {
  height: 60px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  height: 60px;
  transition: 0.5s opacity;
}

.headlines {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
  padding: 15px;
  text-align: center;
}
</style>
