<template lang="pug">
  div
    .projectContent(v-html="$md.render(project.content)")

    v-container(fluid grid-list-xl ml-0 pa-0, v-if="suggestedProjects.length")
      v-layout(row wrap)
        v-flex(xs12)
          h2(style="margin-top:50px;") {{$tc('keepReadingProjects', suggestedProjects.length)}}
        template(v-for="project of suggestedProjects")
          v-flex(xs12, md6)
            v-card()
              v-img(
                :src="suggestedCover(project)"
                :aspect-ratio="4/3"
                :srcset="suggestedCover(project).srcSet"
                :lazy-src="suggestedCover(project).placeholder"
                )
              v-card-title(primary-title='')
                .contentCard
                  h2.mb-0
                    | {{ project.title }}
              v-card-actions
                v-btn.pa-0(flat, color="hsla(37, 90%, 21%, 1)", @click="goTo(project.href)") {{$t('readmore')}}
</template>
<script>
import { getUrl, isRelated } from '~/utils/projects.js'
export default {
  layout: 'page',
  props: {
    project: {
      default: () => {},
      type: Object
    },
    projects: {
      default: () => {},
      type: Object
    }
  },
  computed: {
    suggestedProjects() {
      const posts = Object.keys(this.projects)
      let candidates = []
      for (const key of posts) {
        candidates.push(this.projects[key])
      }
      candidates = candidates.filter(p => isRelated(this.project.tags, p.tags))
      for (const project of candidates) {
        project.href = getUrl(project.basename, this.$store.state.locale)
      }
      return candidates.slice(0, 2)
    }
  },
  methods: {
    suggestedCover(project) {
      const photo = `img/project/${project.icon}.jpg`
      return require(`~/assets/${photo}`)
    },
    goTo(link) {
      this.$store.commit('setShow', false)
      this.$router.push(link)
    }
  }
}
</script>
<style lang="styl">
@require '~assets/style/colors.styl'
code {
  display: flex;
  padding: 15px;
  margin-bottom: 64px;
  overflow: scroll;
  color: primary-project-600
}

code::-webkit-scrollbar,
code::-webkit-scrollbar:horizontal, {
    width: 4px;
    height: 4px
}
 
code::-webkit-scrollbar-track {
    background: gray-100
}
 
code::-webkit-scrollbar-thumb {
    background: primary-project-700
}
code::-webkit-scrollbar-thumb:window-inactive {
	background: gray-400
}

code::-webit-scrollbar-corner {
  display: none;
}
.projectContent > p > img {
  display: block;
  max-width: 100%;
  height: auto;
}

.projectContent a,
.projectContent > a,
.projectContent > p > a {
  text-decoration: none;
  border-bottom: 1px solid primary-project-200;
  box-shadow: inset 0 -4px 0 primary-project-200;
  transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
}

.projectContent a:hover,
.projectContent > a:hover,
.projectContent > p > a:hover {
  background: primary-project-200;
  color: primary-project-900
}

.projectContent h1, h2, h3, h4, h5, h6
  color: primary-project-900
.projectContent ul
  list-style: none

.projectContent ul li::before {
  content: "\2022";
  color: primary-project-600;
  font-size: 20px;
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: -1em;
}

.twitter-tweet
  font-style: italic
  text-align: left

</style>
