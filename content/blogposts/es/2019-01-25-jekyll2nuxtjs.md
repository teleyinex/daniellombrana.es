---
layout: blog
title: "Pasa de Jekyll a NuxtJS sin dolor"
date:  2019-01-18 
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
icon: moving
icon_author: Ethan Weil
icon_url: https://unsplash.com/photos/9Q7PqDxCZeQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
description: "Aprende cómo convertir tu sitio Jekyll en uno con NuxtJS"
author: teleyinex
---

Últimamente todo el mundo habla de crear sitios estáticos para la web. Normal, no necesitas un servidor y además hay varios sitios en la web que nos permiten hospedarla sin coste alguno (Netlify, Github Pages, Zeit now, ...).

Ahora mismo hay más de [200 frameworks](https://www.staticgen.com/). Puedes encontrar, casi seguro, el que se adapte a tus necesidades, porque hay prácticamente  uno para cada lenguaje de programación.

Uno de los más populares es [Jekyll](https://www.staticgen.com/jekyll). Atesora más de 36 mil estrellas en Github, seguido muy de cerca por [Next](https://www.staticgen.com/next) y [Hugo](https://www.staticgen.com/hugo).

Como te puedes imaginar, llevo usando Jekyll bastante tiempo. De hecho, todas mis webs están hechas con Jekyll: [Scifabric.com](https://scifabric.com), [PYBOSSA](https://pybossa.com) y hasta ahora mi sitio web (donde estás ahora mismo).

La simplicidad de Jekyll es increíble. Puedes empezar a programar y montar una web en minutos. Además, si sabes bastante de JS, o si quieres crear una "Progressive Web Application", Jekyll no es la mejor opción. Y por ese motivo decidí buscar alternativas.

Por tanto, ¿qué podía hacer? Bueno, la historia es que comencé a programar con VueJS desde su versión 1.0, luego la 2.0 y finalmente encontré [NuxtJS](https://nuxtjs.org/) y fue amor a primera vista :heart_eyes:.

NuxtJS es una pasada por varios motivos:

* Rendimiento: utiliza todas las buenas prácticas de VueJS y NodeJS, asegurando generar el código más limpio y pequeño para tu web.
* Modular: tienes para elegir entre más de 50 módulos que te ahorrarán un montón de trabajo. Puedes construir una PWA sin tener que escribir una sóla línea de código.
* Divertido: esta es probablemente una de sus mejores características. A mi no me entusiasmaba programar en JS hasta que descubrí VueJS y posteriormente NuxtJS.

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
