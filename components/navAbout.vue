<template lang="pug">
nav.navbar.navbar-fixed-top(:class="navbarClass", @animationend="showRest", :style="currentStyle")
  v-btn#closebtn(flat='', icon='', @click="goBack")
    v-icon(color='white')
        | mdi-arrow-left
  component(v-bind:is="currentIcons")
</template>
<script>
export default {
  components: {
    about: () => import(`~/components/nav/about.vue`)
  },
  data() {
    return {
      close: false,
      open: false,
      showContent: false
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
    setTimeout(() => {
      this.open = true
    }, 250)
  },
  methods: {
    showRest() {
      if (!this.showContent) {
        this.$emit('navbarLoaded')
        this.showContent = true
      }
    },
    goBack() {
      this.close = true
      this.$emit('navbarHidden')
      setTimeout(() => {
        this.$router.go(-1)
      }, 800)
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
  }
  100% {
    width: 100%;
  }
}

@keyframes shrink {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
</style>
