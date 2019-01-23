<template lang="pug">
v-container(fluid grid-list-xl)
  v-layout
    v-flex(xs12, md6 offset-md3)
      p I love photography. In my free time, I take pictures of almost everything, nature, people, places, etc.</p>
      p As an amateur one of my <a href="http://www.flickr.com/photos/teleyinex/2945647308/in/set-72157618769763161">biggests successes</a> has been to win a place in the first <a href="http://www.ubuntu.com">Ubuntu</a> OS contest for desktop wallpapers. The photo was included in the default CD-ROM and distributed as part of the wallpaper package, sharing my work with hundreds of people.</p>
      p More recently, the Spanish company <a href="https://twitter.com/AguaLanjaron/status/336382074833469440">Lanjarón used another photo</a> from my <a href="http://www.flickr.com/photos/teleyinex/4639737486/">portfolio</a> to promote their water.</p>
      p Here you have a list of my photos in Unsplash, where you can download them for free!</p>

  v-layout(row wrap)
      template(v-for='(photo, idx) in photos')
        v-flex(xs12, md6 offset-md3)
          v-card(:key='idx')
            v-img(:src='photo.urls.regular', :aspect-ratio='4/3', :srcset="photo.photoSrcSet" sizes="(max-width:412px) 400px,  (max-width:768px) 768px, 1040px")
            v-card-actions
              v-btn.pa-0(flat, :color="$store.state.color", :href="photo.links.download") Download
          v-spacer(:key='`space-${idx}`')

</template>
<script>
export default {
  layout: 'page',
  async asyncData({ store, app }) {
    store.commit('setColor', '#27ae60')
    store.commit('setCoverImg', '/assets/img/photography/photographyheader.jpg')
    store.commit('setPage', {
      title: 'Photography',
      subTitle: 'My collection of photos',
      gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)'
    })
    const url = 'https://api.unsplash.com/users/teleyinex/photos'
    const payload = {
      client_id:
        'c0d2f2648f2467bdbfc2172761ce5330a4c2635c38cdca9102888e2ce5b8b72f',
      order_by: 'popular'
    }
    const photos = await app.$axios.$get(url, { params: payload })
    return { photos }
  }
}
</script>
