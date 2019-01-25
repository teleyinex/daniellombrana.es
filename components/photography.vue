<template lang="pug">
v-container(fluid grid-list-xl)
  v-layout(align-center justify-center row fill-heigh)
    v-flex.photography(xs12, md10)
      div(v-html="photography")
      

  v-layout(row wrap)
      template(v-for='(photo, idx) in photos')
        v-flex(xs12, md6)
          v-card(:key='idx')
            v-img(:src='photo.urls.regular', :aspect-ratio='4/3', :srcset="photo.photoSrcSet" sizes="(max-width:412px) 400px,  (max-width:768px) 768px, 1040px")
            v-card-actions
              v-btn.pa-0(flat, color="hsla(145, 63%, 12%, 1)", :href="photo.links.download") Download
          v-spacer(:key='`space-${idx}`')

</template>
<script>
export default {
  props: {
    photos: {
      default: () => {
        return []
      },
      type: Array
    }
  },
  computed: {
    photography() {
      return require(`~/i18n/photography_${this.$store.state.locale}.md`)
    }
  }
}
</script>
<style lang="styl" scoped>
@require '~assets/style/colors.styl'
.photography h1, h2, h3, h4, h5, h6, strong {
	color: primary-photography-800
}

.photography a,
.photography > a,
.photography > p > a {
  text-decoration: none;
  border-bottom: 1px solid primary-photography-200;
  box-shadow: inset 0 -4px 0 primary-photography-200;
  color: gray-900;
  transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
}

.photography a:hover,
.photography > a:hover,
.photography > p > a:hover {
  background: primary-photography-200;
  color: primary-photography-900;
}

.contentCard {
  min-height: 122px;
}
</style>
