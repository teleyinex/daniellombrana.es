<template lang="pug">
nav.navbar.navbar-fixed-top(
  :class="navbarClass", 
  @animationend="showRest",
  :style="currentStyle")
  component(v-bind:is="$store.state.active", :close.sync="close" @hideContent="hideContent")
</template>
<script>
export default {
  components: {
    about: () => import(`~/components/nav/about.vue`),
    blog: () => import(`~/components/nav/blog.vue`),
    projects: () => import(`~/components/nav/projects.vue`),
    photography: () => import(`~/components/nav/photography.vue`)
  },
  data() {
    return {
      close: false,
      open: false
    }
  },
  computed: {
    currentStyle() {
      return {
        background: this.$store.state.color
      }
    },
    navbarClass() {
      if (this.close) {
        return `navbar-${this.$store.state.active} navbar-close`
      }
      if (this.open) {
        return `navbar-${this.$store.state.active} navbar-open`
      }
      return `navbar-${this.$store.state.active}`
    },
    currentIcons() {
      return this.$store.state.active
    }
  },
  mounted() {
    this.openNav()
  },
  methods: {
    openNav() {
      this.close = false
      this.open = false
      setTimeout(() => {
        this.open = true
      }, 250)
    },
    hideContent() {
      this.$store.commit('setShow', false)
    },
    async showRest(anim) {
      console.log('hola fin', anim)
      if (anim.animationName.indexOf('grow') >= 0) {
        this.$store.commit('setShow', true)
      } else {
        this.$store.commit('setShow', false)
        this.openNav()
        await this.$router.go(-1)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar-fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  z-index: 9999;
}

.navbar {
  height: 60px;
  width: 0%;
  color: white;
  display: flex;
  padding: 0 15px;
  overflow: hidden;

  align-items: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

.navbar-open {
  animation-name: grow;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.navbar-close {
  animation-name: shrink;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes grow {
  0% {
    width: 0%;
    padding: 0 0px;
  }
  100% {
    width: 100%;
    padding: 0 15px;
  }
}

@keyframes shrink {
  0% {
    width: 100%;
    padding: 0 15px;
  }
  100% {
    width: 0%;
    padding: 0 0px;
  }
}
</style>
