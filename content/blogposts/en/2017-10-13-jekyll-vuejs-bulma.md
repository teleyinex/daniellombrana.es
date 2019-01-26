---
layout: blog
title: "Building static websites with Jekyll, VueJS & Bulma"
date:  2017-10-13 
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
icon: code 
icon_author: Luca Bravo
icon_url: https://unsplash.com/photos/XJXWbfSo2f0
description: "Hacking with Jekyll, VueJS & Bulma"

---

We love static websites. Why? Because they're fast. Really fast. Moreover, you don't have to take care of a database, and you like that a lot.

You are probably building your site already with Jekyll, and while this is cool, sometimes you want to add some magic into the mix to have some fancy JS frameworks like VueJS or React for developing cool stuff. Also, you got so used to Babel and Webpack that you don't know how to write JS code anymore without this toolchain. Hence, you have a question: can I still use my Jekyll site and add as toppings VueJS + Babel + Webpack? Yes, you can! Let me explain how. Let's begin the hacking!

<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/JIX9t2j0ZTN9S" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/JIX9t2j0ZTN9S">via GIPHY</a></p>

## Making Jekyll speak JSON
As you will be using a framework like [VueJS](https://vuejs.org/) (we love love love love it so much, that from now on we will only talk about this framework), we need to instruct Jekyll to serve our content as JSON. 

There are several options for serving your content as JSON, but one that we like a lot is using the _data folder to store inside of it YAML (or JSON directly) that will be transformed into JSON in the HTML page that your VueJS app will be rendered.

Wait, yes, you read that we will be writing content in YAML to transform it into JSON and then load it into VueJS. Why so much trouble? Well, because we want to allow non-coders to be able to add or edit content quickly, and YAML is simple on that (in other words, less curly braces ;-)).

Thus, go to your _data folder and create a file named **mydata.yml**. This file could have something like this:

```yaml
- title: How crowdsourcing can help beat cancer
  person: profile.jpg
  cover: logo.png
  person_name: John Doe
  person_position: Digital Solutions Architect
```
Then go to your Jekyll folder where you will be rendering your VueJS app. Let's see you want to build a hello world URL, so go to the folder helloworld and edit a file named index.html.

This file will have the front matter as any other Jekyll file, but you will have to modify it to render your VueJS app:

```html
---
layout: default
title: Hello World
description: Jekyll and Vuejs
---
<section id="vuejs" class="section">
    <App></App>
</section>
<script>
window.mydata = {{ site.data.mydata | jsonify }};
</script>
<script src="/assets/js/myvuejs.min.js"></script>
```
That's all! We provide the DOM for mounting the VueJS app. Then, we create a script section where we can load our mydata.yaml as a JSON object, and below it our minified version of our VueJS app (thanks Webpack!).

Obviously, you will need to compile webpack and Jekyll commands to build everything correctly. As both command support a --watch flag, you can run both of them in parallel and forget about running the commands by hand while you develop your excellent new site.

## VueJS, Bulma CSS, and Webpack

Well, this has been easy, right? But, how do we adequately integrate our webpack toolchain into the site as well? We just instruct webpack to do it properly.

### Webpack 

``` javascript
// webpack.config.js
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
module.exports = {
  // entry point of our application
  entry: './helloworld.js',
  // where to place the compiled bundle
  output: {
    path: '../',
    publicPath: '../',
    filename: 'helloworld.min.js'
  },
  module: {
    // `loaders` is an array of loaders to use.
    // here we are only configuring vue-loader
    loaders: [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue-loader'   // loader to use for matched files
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
      test: /\.[sa|sc|c]ss$/,
      loader: "style!css!sass"
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader?outputPath=../img/search/&publicPath=../img/search/'
      }
    ],
    noParse: /dist\/ol.js/,
  },
vue: {
  loaders: {
    scss: 'style!css!sass'
  }},

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]

}
```
NOTE: adapt the paths to your specific needs. These are just examples, so feel free to modify them to whatever you like.

As you can see, we're telling webpack to compile our code, minimize it and put it in the right place that we want. Now, you can jump into your VueJS app.

### VueJS

We only use VueJS components. Thus, our example will be using a component that will render our data. The first element that we have to add is our entry point: helloworld.js

```javascript
import Vue from "vue"
import App from "./components/App.vue"


Vue.config.debug = true
Vue.config.devtools = true

var app = new Vue({
    data() {
        return {foo: 'all'}
    },
    el: '#vuejs',
    components: { App },
})
```
Then, create a components folder and create a file named App.vue:

``` Javascript
<template>
    <h1 v-for="datum in mydata">{{datum.title}}</h1>
</template>
<script>
export default {
   data() {
      return {mydata: window.mydata}
},
// your stuff
}
</script>
<style>
</style>
```
Done! Now you are loading your data created in mydata.yml file into your VueJS app. Now you are free to do whatever you want, as you are in the field of VueJS. Enjoy!

**NOTE**: Jekyll sometimes does not recompile the _data folder, so you will need to re-run it to be sure that your data is updated.

### Bulma and Buefy

We use SaSS to style our Jekyll sites; I guess you do it too. If this is the case, you don't want to have separate sass folders to build your website and your VueJS apps. You can solve it by instructing your VueJS to re-use the Bulma CSS framework. How? Like this:

```scss
<style lang="scss">
@import "../../../_sass/_scifabric.scss";
@import "~buefy/src/scss/buefy";

// your SCSS
</script>
```
## Cavebeats

While this is an excellent **hack** it's not the best solution. It would be much much better to use only a static website generator built with Node.JS or just something like [nuxt.js](https://nuxtjs.org/), but we needed to re-use our Jekyll infrastructure and therefore the hack.

In any case, this hack has space for improvement. The most noticeable one would be to not include the CSS from Jekyll where we only use VueJS to avoid downloading the same stuff twice. If you like it, let us know and share this article with your colleagues and friends!

### Final notes

This was originally posted in our [Scifabric](https://scifabric.com) site.
