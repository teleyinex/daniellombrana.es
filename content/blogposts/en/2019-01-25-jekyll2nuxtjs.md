---
layout: blog
title: "Migrate your Jekyll's site to NuxtJS"
date:  2019-01-18 
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
icon: moving
icon_author: Ethan Weil
icon_url: https://unsplash.com/photos/9Q7PqDxCZeQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
description: "Learn how you can migrate your static site to NuxtJS"
author: teleyinex
---

Static sites are becoming really popular nowadays. Basically, because you don't need to have a server, and there're plenty of free hosting services on the web: Netlify, Github Pages, Zeit now, etc.

You can actually choose from more than [200 frameworks](https://www.staticgen.com/). Actually, you should be able to find one that meets your preferences, because there's almost a framework for each programming language.

The most popular one is [Jekyll](https://www.staticgen.com/jekyll). It has more than 36 thousand stars in Github, followed closely by [Next](https://www.staticgen.com/next) and [Hugo](https://www.staticgen.com/hugo).

As you can guess, I've been using Jekyll for a very long time. Actually, all my websites are built with it: [Scifabric.com](https://scifabric.com), [PYBOSSA](https://pybossa.com) and obviously my home page (where you are right now).

The simplicity of Jekyll is amazing. Anyone can jump automatically, and start building a site within minutes. However, if you are an experienced JS developer, or if you want to create a Progressive Web Application, Jekyll is not the best option. Which was my personal situation.

Hence, what could I do? Well, I started coding with VueJS since its version 1.0, then, 2.0 and then I fall in love with [NuxtJS](https://nuxtjs.org/). 

NuxtJS is AWESOME because it handles for you tons of stuff that you don't want to deal with, and have a decent template to start with:

* Performance: it uses VueJS and NodeJS best practices, so you can get the best and minimal application for your site.
* Modular: it has more than 50 modules that will save you tons of work. You can build a Progressive Web Application (PWA) without having to write a single line of code. How cool is that?
* Enjoyable: probably one of the best features. As I said before, I'm in deep love with this framework and VueJS. It provides meaningful information, good docs, and a better community.

My love with NuxtJS has been driving my late front-end development for Scifabric. Basically, we are using for every client, as we can build really quickly any PWA that will fit the client's needs. One example is our project for Greenpeace Spain: [https://solarmaps.greenpeace.org](https://solarmaps.greenpeace.org).

As I worked more and more with NuxtJS, I was wondering how difficult would it be to migrate my home page to NuxtJS and leave behind Jekyll. Why? Because I've become used to Axios, Components, Stylus, and modern tools to build sites, so I wanted to do it for my own site.

The only problem: my Jekyll site has several folders with Markdown files, that rely heavily on the front-matter of them to build the site. In any case, I started to search if this could be possible, and obviously, it is :D

## Handling Markdown in NuxtJS
There're plenty of solutions out there for importing and handling your Markdown files. For example, you can use the awesome [Webpack Loader for Markdown](https://www.npmjs.com/package/frontmatter-markdown-loader) to get your files imported into NuxtJS.

This was my first try. Using it. While in development mode all worked well, the problem came when I built the static site. The web browser's console was complaining that it was missing the webpack loader for the Markdown files, and therefore, my blog posts didn't show up.

Then, I thought, what if I keep things even more simple. What if I can transform the Markdown files into JSON? I did a quick search in the npm registry and I found this amazing library: [markdown-to-json](https://www.npmjs.com/package/markdown-to-json).

This library was PERFECT. Why? Because you can pass a folder with all your Markdown files, and it will generate a JSON object with all your blog posts in there. The front-matter is parsed and you get it as JSON as well. As everything is JSON, you can request the data using HTTP requests, and you will have everything in place. 

I tried with my current blog posts and everything worked like a charm. Thus, what I did was the following: in my NuxtJS project, I created a folder named **content**. In this folder, I have my blog posts and projects sub-folders with all the Markdown files. Then, I can run a command like this to create the JSON file with all the information:

```
$ m2j -c content/blogposts/*.md -o static/blogposts.json
```
By placing the blogposts.json file in the /static folder, I can use within NuxtJS, Axios to get all the blog posts easily. The only problem is that when you are generating your static site, you need to actually generate all the routes for it. 

## Creating routes for NuxtJS
Hence, how do we handle this? Well, easily. We only need to modify our package.json file to add a few more build commands:

```
    "dev": "yarn md2json && nuxt",
    "build": "yarn md2json && nuxt build",
    "md2json": "m2j -c content/blogposts/*.md -o static/blogposts.json"

```
Thanks to this solution, when you run yarn dev (or npm run dev) your blog posts will be converted into JSON, and the site will be ready to work with it. The same approach is used for building the static site. This is wonderful because then you can use it with Zeit, Github Pages or Netlify to build it automatically for you.

With this solved, I only had to build my site. It was more or less easy, as I was already using webpack and components in JS for my Jekyll site. In most of the cases, I copied and paste chunks of code, and then adapted them to the NuxtJS world.

The result? This page. Which as you can see is amazingly fast (it's deployed on Zeit). If you are browsing the site from a phone on Android (or iOS) and you are using a modern web browser, you will see that you can install my site in your phone ;-)

Moreover, the audits are really cool. Check them out:

![Audits from Google](/assets/img/blog/audits-daniel.png)

## A template
As I was doing the migration of my site I realized that this could be really useful for others as well, so I've created a basic template that you can re-use. The code is available here: [https://github.com/teleyinex/jekyll2nuxt](https://github.com/teleyinex/jekyll2nuxt).

This template uses [VuetifyJS](http://vuetifyjs.com/) so you can get a material design out of the box for your site. It has the PWA and Markdown modules enabled as well, so everything will work for you out of the box. You only have to copy your blog posts into the content folder and run yarn dev. As simple as that!

If you have read until here, THANKS a lot for your time :raised_hands:. I would appreciate if you share this blog post within your Twitter (or Facebook) friends, so more people can know about it. 
