---
layout: blog
title: "A simple CMS with nuxt-content and Forestry.io"
date:  2020-11-22
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
icon: cms
icon_author: Jess Bailey
icon_url: "https://unsplash.com/photos/q10VITrVYUM"
description: "How to create a simple CMS with nuxt-content and Forestry.io"
author: teleyinex
---

# Content Managers

In the past we used to use Wordpress, or even Drupal for making websites where you have tons of information. While these tools have been amazing, nowadays they seem too big for just creating a blog post,
or even a site where you share your documentation.

The main issue to me with those services is that you need a database, you have to take care of them, and you have tons of options to deal with.

Then, something happened, Jekyll was born and that was the tool I used for a very long time to build sites: static sites. Creating sites using this framework was great. Why? Because you could handle everything
without having to use a database and that was a killer feature. If you add on top of that you could deploy your site almost anywhere, because you didn't need to install a programming language like PHP or Ruby, Jekyll
created for you the final HTML and JS that web browsers understand, so it was a killer feature to use.

While Jekyll grew on popularity, tons of new frameworks appeared for creating new static sites: pelican (for Python lovers like me), mkdocs (again Python here), etc. But at the same time, the JAMStack community started to
create awesome frameworks that allowed this flexibility but on top only of JS: https://jamstack.org/generators/

I'll not cover all of them, because there are too many out there, but here I'm going to focus on one of my favorite frameworks: NuxtJS.

## NuxtJS and nuxt-content

NuxtJS is a very popular framework that allows you to write SSR sites using VueJS. The community around this framework is amazing, and you usually have tons of tools and libraries that will help you to achieve your goals really quick.

One of these libraries or modules is [nuxt-content](https://content.nuxtjs.org/). This module allows you to extend your NuxtJS application by transforming it into a headless CMS. All you have to do is write your content in a content/ directory and fetch your Markdown, JSON, YAML, XML and CSV files through a MongoDB like API. How cool is that?

It's core features are:

* Blazing fast hot reload in development
* Vue components in Markdown
* Full-text search
* Support static site generation with nuxt generate
* Powerful QueryBuilder API (MongoDB like)
* Syntax highlighting to code blocks in markdown files using PrismJS.
* Table of contents generation
* Handles Markdown, CSV, YAML, JSON(5), XML
* Extend with custom parsers
* Extend with hooks

Yes, you read it correctly my friend: it has full-text search within the framework. That's really cool, and you won't [need my hack of using Lunr.js to search](https://daniellombrana.es/blog/2019/02/20/fulltextsearchclient) like you can do in this site using a plain nuxt solution.

Thus, nuxt-content will work out of the box for your previous site if you already were using Jekyll or something similar, as all you have to do is copy that content into the content folder and fetch it. Boom! Done! Finito (well, you will have to write the page to get the content, but let me get there in a minute).

While this is really cool, the only issue, as with any previous solution was/is that you cannot usually involve your peers to write content for your site. Why? Because they will need to download your code, install everything, run it, and then write the blog post or content using a regular text editor (hello Neovim coders!) and obviously ask them to create a pull request, so you can review it, merge it and deploy it. At the end you usually will end up asking them to send you the article in a MSdoc format, and you will do the rest of the work.

If we now start thinking about adding media content to that article, well, that will be a nightmare. They will send you the images inside the document, so you will ask them to send the images on an email, they will forget one or two, and then you will end up quite frustrated. Sounds familiar?

The solution: Forestry.io


## Forestry

First of all, I'm not affiliated to them, and they've not paid me anything to write this blog post. Now that we're clear about this, I can tell you about Forestry.

Forestry is an editor, of your static site that gives you the power to define the front matter of the articles, and handle your media content within a friendly user interface.

What you do, after setting up an account with them, is to basically define where the content is saved in your Git project (the content folder that I mentioned before), and then you define the folder where you will be putting all your media content (as we use Nuxt we will be using the static folder, and within that folder a new one named images -this could be anything you want-).

That's it! Well, not actually. Forestry allows you to create teams, so this is where the fun starts: because you now can invite your team: marketing, UX, etc. to write/update/edit content within your site without having to tell them anything about how to install Node, write Markdown, or handle uploading media content to your site.


## A simple template for you to use

While I was testing nuxt-content and Forestry.io I decided to create a very simple template that you can use to start your own blog post, or site with these tools: [https://github.com/teleyinex/simple-cms](https://github.com/teleyinex/simple-cms).

This is a very simple template. It uses the [Vuetify framework](https://vuetifyjs.com/) for the visual aspects of it, but you can use whatever you want.

### How it works

The index page shows a list of articles, while on the left side you will have a table of contents that will be updated based on where you are. If you are in an index page, with several articles, the sidebar will list your available articles. When you access one article, you will be having there the article table of contents. For this, I'm using the store so I can update it from anywhere and reflect the changes anywhere ;-)

Now, go and hack it! Enjoy it!!!

### Setting up Forestry.io

Once you have your project up and running, you only need to configure the Forestry tool to allow you to add/edit new contents. How you do that? Well, first you will have to configure the sidebar as they name it. There is where you will be able to setup the types of contents that you will be serving from your site.

As nuxt-content allows you to specify different "collections" that are basically folders where you put the content, you can have as many as you want (check their pricing page!).

In this template within the content folder we have the articles folder. Then, you will have to create that "category" in the sidebar:

![](/assets/img/blog/configure-directory.png)

After that, you will be able to create articles using a template. As you will not have a template, you will have to create one from scratch. This is rather simple, the wizard will present you a set of fields:

![](/assets/img/blog/front-matter.png)

For this template, we've 3 fields: title, description and language. Title and description are text fields, while language is a select where you can add some options, so the content creators don't make mistakes :-)

![](/assets/img/blog/title.png)

![](/assets/img/blog/lang.png)


Once you are done, the system will detect your 3 articles, and you will be able to view them directly in the Forestry.io site.

![](/assets/img/blog/articles.png)

And then you can access one article:


![](/assets/img/blog/article.png)


This one shows an image. For handling your media, all you have to do is configure it like this:

![](/assets/img/blog/media.png)

And that's it. Now you can upload into your project, via Forestry any media file. This will be automatically commited to your Git project, and you will be able to reference it from your articles in a visual way. You actually have WYSWYG, so this is perfect.

Now all you have to do is deploy it to something like Vercel, or Github pages and you will be done! Enjoy your new CMS that doesn't need a DB at all!!!

PS: the skull photo is from my Unsplash profile! Check it out: [https://unsplash.com/@teleyinex](https://unsplash.com/@teleyinex)
