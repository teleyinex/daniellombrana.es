<template>
  <div id="homepage" class="background-home" :class="{homeDesktop: desktop}">
    <v-dialog v-model="showCookies" dark>
      <v-card>
        <v-card-title>Hi! I'm using Google Analytics to know which pages do you visit the most. If you want to disable them, just go ahead.</v-card-title>
        <v-card-actions>
          <v-btn flat @click="reject">
            Disable
          </v-btn>
          <v-spacer />
          <v-btn flat @click="accept">
            Accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div v-show="show">
      <nav class="navbar navbar-fixed-top">
        <div class="">
          <div class="top">
            <div
              id="about"
              ref="about"
              data-link="/about/"
              :class="{'animated fadeIn': menu.about.animate}"
            >
              <a href="/about/" class="menulink aboutBtn" @click.prevent="showCurtain('about')">
                {{ $t('about') }}
              </a>
              <svg width="100" height="4" version="1.1" xmlns="http://www.w3.org/2000/svg" class="line-left-right">
                <rect x="0" y="0" width="0" height="3" fill="rgb(142, 68, 173)">
                  <animate
                    attributeType="XML"
                    attributeName="width"
                    from="0"
                    to="100"
                    values="0; 25; 50; 75; 100;"
                    keySplines="0.42 0 1 1;"
                    fill="freeze"
                    dur="200ms"
                    d="about-anim"
                  />
                </rect>
              </svg>
            </div>
            <div
              id="blog"
              ref="blog"
              class="pull-right"
              :class="{'animated fadeIn': menu.blog.animate}"
            >
              <a href="/blog/" class="blogBtn menulink pull-right" @click.prevent="showCurtain('blog')">
                {{ $t('blog') }}
              </a>
              <svg width="3" height="60" version="1.1" xmlns="http://www.w3.org/2000/svg" class="line-top-bottom">
                <rect x="0" y="0" width="3" height="0" fill="hsla(204, 64%, 44%, 1)">
                  <animate
                    attributeType="XML"
                    attributeName="height"
                    from="0"
                    to="60"
                    fill="freeze"
                    values="0; 15; 30; 45; 60;"
                    keySplines="0.42 0 1 1;"
                    dur="200ms"
                  />
                </rect>
              </svg>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div class="logo logoFadein" :class="{logoDesktop: desktop}">
          <div id="badge" ref="badge">
            <icon />
          </div>
          <a
            v-if="$store.state.locale === 'en'"
            class="lang"
            @click="setLang('es')"
            v-html="$md.render(':es:')"
          />
          <a v-else class="lang" @click="setLang('en')" v-html="$md.render(':uk:')" />
        </div>
      </main>

      <nav class="navbar navbar-fixed-bottom">
        <div class="">
          <div class="bottom">
            <div
              id="photography"
              ref="photography"
              :class="{'animated fadeIn': menu.photography.animate}"
            >
              <a href="/photography/" class="photosBtn menulink pull-left" @click.prevent="showCurtain('photography')">
                {{ $t('photos') }}
              </a>
              <svg
                width="3"
                height="60"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                class="line-bottom-top"
              >
                <rect x="0" y="60" width="3" height="60" fill="hsla(145, 63%, 42%, 1)">
                  <animate
                    attributeType="XML"
                    attributeName="y"
                    from="60"
                    to="0"
                    values="60; 45; 30; 15; 0;"
                    keySplines="0.42 0 1 1;"
                    fill="freeze"
                    dur="200ms"
                  />
                </rect>
              </svg>
            </div>
            <div
              id="projects"
              ref="projects"
              class="pull-right"
              :class="{'animated fadeIn': menu.projects.animate}"
            >
              <a href="/projects/" class="projectsBtn menulink pull-right" @click.prevent="showCurtain('projects')">
                {{ $t('projects') }}
              </a>
              <svg
                width="100"
                height="3"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                style="left: 0px;"
                class="line-bottom-top"
              >
                <rect x="0" y="0" width="100" height="3" fill="hsla(37, 90%, 41%, 1)">
                  <animate
                    attributeType="XML"
                    attributeName="x"
                    from="100"
                    to="0"
                    fill="freeze"
                    values="100; 75; 50; 25; 0;"
                    keySplines="0.42 0 1 1;"
                    dur="200ms"
                  />
                </rect>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div class="curtain curtain-left" :class="{center: menu.about.showCurtain}" />
      <div class="curtain curtain-right" :class="{center: menu.projects.showCurtain}" />
      <div class="curtain curtain-top" :class="{center: menu.blog.showCurtain}" />
      <div class="curtain curtain-down" :class="{center: menu.photography.showCurtain}" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import icon from '~/components/logos/main.vue'
export default {
  components: { icon },
  head() {
    return {
      title: 'Daniel Lombraña',
      meta: [
        {
          hid: 'home',
          name: 'description',
          content:
            'Dad, husband, geek, computer engineer, crowdsourcing expert, citizen science researcher, comics reader, runner & Founder at Scifabric.'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://daniellombrana.es/icon.png'
        }
      ]
    }
  },
  data() {
    return {
      desktop: false,
      show: false,
      menu: {
        about: {
          line: null,
          state: 1,
          drawn: false,
          showCurtain: false,
          animate: false,
          timeoutId: null
        },
        blog: {
          line: null,
          state: 1,
          drawn: false,
          showCurtain: false,
          animate: false,
          timeoutId: null
        },
        projects: {
          line: null,
          state: 1,
          drawn: false,
          showCurtain: false,
          animate: false,
          timeoutId: null
        },
        photography: {
          line: null,
          state: 1,
          drawn: false,
          showCurtain: false,
          animate: false,
          timeoutId: null
        },
        ingeniare: { line: null, state: 1, drawn: false, timeoutId: null },
        ingenium: { line: null, state: 1, drawn: false, timeoutId: null },
        est: { line: null, state: 1, drawn: false, timeoutId: null },
        deco1: { line: null, state: 1, drawn: false, timeoutId: null },
        deco2: { line: null, state: 1, drawn: false, timeoutId: null }
      }
    }
  },
  computed: {
    ...mapState({
      showCookies: state => state.cookies
    })
  },
  mounted() {
    if (process.client) {
      const gdpr = localStorage.getItem('gdpr')
      if (gdpr === null) {
        this.$store.commit('setCookies', true)
      }
      if (gdpr === 'false') {
        this.$store.commit('setCookies', false)
      }
      if (gdpr === 'true') {
        this.$store.commit('setCookies', false)
        this.$ga.enable()
      }
    }
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth)
      this.getWindowWidth()
    })
  },
  methods: {
    reject() {
      if (process.client) {
        this.$store.commit('setCookies', false)
        localStorage.setItem('gdpr', false)
      }
    },
    accept() {
      if (process.client) {
        localStorage.setItem('gdpr', true)
        this.$store.commit('setCookies', false)
        this.$ga.enable()
      }
    },
    setLang(locale) {
      this.$store.commit('setLang', locale)
      this.$i18n.locale = locale
      localStorage.setItem('i18n', locale)
    },
    getWindowWidth() {
      if (window.innerWidth > 1280) {
        this.desktop = true
      } else {
        this.desktop = false
      }
      this.show = true
    },
    showCurtain(id) {
      this.$ga.event('index', 'button', id, 1)
      this.menu[id].showCurtain = true
      let url = `/${id}/`
      if (this.$store.state.locale === 'es') {
        url = `/es/${id}`
      }
      setTimeout(() => {
        this.$router.push(url)
      }, 950)
    }
  }
}
</script>
<style lang="styl" scoped>
a
  font-size: 15px

.background-home
  background: black
  height: 100vh
  height: 100dvh
  overflow: hidden
  color: white
  font-family: 'Josefin Sans', sans-serif !important
  font-weight: bold
  font-size: 15px
  padding-left: 0px
  padding-right: 0px
  transition: background 2s


.navbar-fixed-top,
.navbar-fixed-bottom
  height: 60px
  border: 0
  padding: 0
  margin: 0


.top,
.bottom
  display: flex


.line-left-right
  position: absolute
  left: 0
  right: auto
  top: 60px


.line-top-bottom
  position: absolute
  left: 0
  right: auto
  top: 0px


.line-bottom-top
  position: absolute
  right: auto
  left: 100px
  top: 0


.line-right-left
  position: absolute
  top: -3px


#about,
#blog,
#projects,
#photography
  width: 100px
  height: 60px
  display: flex
  align-items: center
  justify-content: center
  align-content: center
  position: relative

#about,
#photography
  align-self: flex-start


#blog,
#projects
  margin-left: auto


.menulink
  color: white
  text-decoration: none
  width: 100%
  height: 100%
  display: flex
  text-align: center
  justify-content: center
  align-items: center
  font-family: 'Open Sans', sans-serif


.menulink:hover,
.menulink:active,
.menulink:visited
  text-decoration: none
  color: white


.logo
  width: 100vw
  height: calc(100vh - 120px)
  height: calc(100dvh - 120px)
  display: flex
  flex-flow: column
  justify-content: center
  align-content: center
  align-items: center


/* .logo > div
  height: 264px
  width: 236px
  */


.curtain
  width: 100vw
  height: 100vh
  height: 100dvh
  background-color: white
  z-index: 2000
  position: fixed
  top: 0
  left: 0
  transition: transform 1s
  transition: all 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards


.curtain-left
  transform: translate(-100vw, 0)


.curtain-right
  transform: translate(100vw, 0)


.curtain-top
  transform: translate(0, -100vh)


.curtain-down
  transform: translate(0, 100vh)


.curtain-left.center,
.curtain-right.center,
.curtain-top.center,
.curtain-down.center
  transform: translate(0vw, 0vh) !important


.homeDesktop
  padding: 150px

.logoDesktop
  width: auto
  height: calc(100vh - 420px)
  height: calc(100dvh - 420px)


.aboutBtn,
.blogBtn,
.projectsBtn,
.photosBtn,
.lang
  opacity: 0
  animation-delay: 0
  animation: fadeIn ease-in
  animation-duration: 250ms
  animation-fill-mode: forwards

.lang
  margin-top: 22px
  width: 100vw
  text-align: center
  color: #757575
  opacity: 0
  animation-delay: 1s

@keyframes fadeIn {
 from {
  opacity: 0
 }
 to {
  opacity: 1
 }
}
</style>
<style>
.lang > p {
  margin: 0;
}
</style>
