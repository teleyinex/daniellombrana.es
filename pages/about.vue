<template>
  <div class="container">
    <div class="row">
      <div itemscope itemtype="http://schema.org/Person" class="col-sm-12 col-md-8 col-md-offset-2">
        <section class="about">
          <h1>Let's work together</h1>
          <p>My name is Daniel Lombraña González, and I am a fullstack developer and consultant with experience on crowsourcing blogs, frontend and backend development using modern technologies.</p>

          <p>I design open systems while considering the limitations imposed by practicality, security, and cost. Since 2011, I have been hired by international institutions like CERN, British Museum, British Library, Cancer Research UK, United Nations, Greenpeace Spain, etc.</p>

          <p>I'm a senior developer with more than 10 years working with modern technologies like Python, PostgreSQL, Redis, Vue.js, Nuxt, Sass, Stylus, etc.</p>

          <p>My work has helped on assisting in the aftermath of humanitarian disasters (like Typhoon Pablo in the Philippines) by geolocalizing social network datasets in real time. I have supported studying cancer using your web browser, analyzed oil contracts between governments and major companies, or recovered a massive set of archaeological findings of the Bronze Age.</p>

          <p>
            I'm available for hiring for your blog. If you are interested, please, <a href="https://calendly.com/scifabric/">
              book an online meeting with me
            </a> so we can meet online and discuss about your blog.
          </p>


          <h2>In summary</h2>
          <h3>From a boring point of view</h3>
          <p>
            I'm a <span itemprop="jobTitle">
              computer engineer
            </span> by training and I have a <span itemprop="honorificSuffix">
              PhD
            </span> on Parallel Genetic Programming on Volunteer Desktop Grids.
          </p> 
          <h3>From an interesting point of view</h3>
          <p>
            I'm the <strong>
              <span itemprop="jobTitle">
                Founder
              </span>
            </strong> and <strong>
              <span itemprop="jobTitle">
                CEO
              </span>
            </strong> of 
            <span itemprop="affiliation" itemscope itemtype="http://schema.org/Organization">
              <a href="http://scifabric.com" itemprop="url">
                <strong>Scifabric</strong>
              </a>
            </span>.
          </p>
          <p>
            I'm the <strong>
              <span itemprop="jobTitle">
                Co-Founder
              </span> and
              <span itemprop="jobTitle">
                blog Lead
              </span>
            </strong> of <span
              itemprop="affiliation"
              itemscope
              itemtype="http://schema.org/Organization"
            >
              <a
                itemprop="url"
                href="http://pybossa.com"
              >
                PYBOSSA
              </a>
            </span> and <span itemprop="affiliation" itemscope itemtype="http://schema.org/Organization">
              <a itemprop="url" href="http://crowdcrafting.org">
                Crowdcrafting
              </a>
            </span>.
          </p>

          <p>
            I'm an <strong>
              <span itemprop="jobTitle">
                alumni
              </span>
            </strong> of the 
            <span itemprop="affiliation" itemscope itemtype="http://schema.org/Organization">
              <a itemprop="url" href="http://www.shuttleworthfoundation.org/">
                <span itemprop="name">
                  Shuttleworth Foundation
                </span>
              </a>.
            </span>
          </p>

          <p>
            Additionally, I'm working for the 
            <span itemprop="affiliation" itemscope itemtype="http://schema.org/Organization">
              <a itemprop="url" href="http://www.citizencyberlab.org/">
                <span itemprop="name">
                  Citizen Cyberlab
                </span>
              </a>
            </span> 
            as a 
            <span itemprop="jobTitle">
              Senior Researcher and Developer
            </span>.
          </p><h3>From a visual point of view</h3>
        </section>
      </div>
      </section>
    </div>
    <v-layout>
      <v-flex xs12 md6>
        <v-fade-transition group appear>
          <template v-for="(point, idx) in visualPoints">
            <v-card :key="idx" style="margin-bottom: 60px;">
              <v-img :src="getCover(point.cover)" :aspect-ratio="4/3" />
              <v-card-title primary-title>
                <div>
                  <h2 class="mb-0">
                    {{ point.title }}
                  </h2>
                  <p>{{ point.text }}</p>
                </div>
                </v-card-title-primary>
              </v-card-title>
            </v-card>
            <v-spacer :key="`space-${idx}`" />
          </template>
        </v-fade-transition>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import visualPoints from '~/static/visualpoint.json'
export default {
  layout: 'page',
  data() {
    return {
      visualPoints
    }
  },
  asyncData({ store }) {
    store.commit('setActive', 'about')
    store.commit('setColor', '#8e44ad')
    store.commit('setCoverImg', '/assets/img/blog/avatar.jpg')
    const coverSrcSet = `/assets/img/blog/avatar-phone.jpg 400w,
       /assets/img/blog/avatar-tablet.jpg 768w,
       /assets/img/blog/avatar.jpg 1040w
      `

    store.commit('setPage', {
      title: null,
      subTitle: null,
      sizes: '(max-width:412px) 400px,  (max-width:768px) 768px, 1040px',
      phtoSrcSet: coverSrcSet
    })
  },
  methods: {
    getCover(url) {
      return `/assets/img/about/${url}.jpg`
    }
  }
}
</script>
<style lang="scss" scoped>
$about-color: #8e44ad;

.jumbotron-full {
  margin-top: 60px;
  width: 100%;
  height: 330px;
  overflow: hidden;
  opacity: 0;
  transition: opacity 1s;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  h1,
  p {
    color: white;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
  }

  p {
    font-size: 20px;
  }

  p.post-caption {
    font-size: 14px;
  }

  .post-caption a {
    color: white;
    text-decoration: underline;
  }
}

.jumbotron-full.section,
.jumbotron-full .headlines {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.jumbotron-full.about {
  /* background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0,0,0,0.45)), url(/assets/img/blog/avatar.jpeg);*/
  background: $about-color url(/assets/img/blog/avatar.jpg) no-repeat center
    top/ cover;
}

@media (min-width: 1024px) {
  .jumbotron-full.about {
    height: 650px;
  }
}

.about a {
  color: $about-color;
  text-decoration: underline;
}

.about li:before {
  color: $about-color;
}

.about strong {
  color: $about-color;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .jumbotron-full {
    height: 475px;
  }
}

@media (min-width: 1024px) {
  .jumbotron-full {
    height: 475px;
  }
}
</style>
