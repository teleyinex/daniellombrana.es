---
layout: blog
title: "Full text search: a simple guide for your static site"
date:  2019-01-18 
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
icon: searching 
icon_author: Forest simon
icon_url: "https://unsplash.com/photos/-TX0ufDSCV4"
description: "How to index your static site and make it searchable without a DB"
author: teleyinex
---

# Searching in your static site

As you already know,  static web pages are pretty popular nowadays. However you wil have a little
issue: it's difficult to add a search engine within your site, as you don't have
a DB behind it.

<div style="width:100%;height:0;padding-bottom:73%;position:relative;"><iframe src="https://giphy.com/embed/l3q2PZSVUUEsajBIY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/oscars-academy-awards-1952-l3q2PZSVUUEsajBIY">via GIPHY</a></p>

There're some solutions out there like [Algolia](https://www.algolia.com/), or specific servers like [Solr](http://lucene.apache.org/solr/).
The first is simple, but at the end you are giving your data to a third party.
The next option, Solr, is really cool, but well, we're setting up a serverless
solution, right? So we cannot use it :smile:.

Thus, what solution do we have?

## Lunr.JS a bit like Solr, but much smaller and not as bright

<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/rZKXaQyfvZQv6" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/moon-cute-black-rZKXaQyfvZQv6">via GIPHY</a></p>

While I was looking for a solution to this issue, I found this library [LunrJS](https://lunrjs.com/)

The library is pretty small, it has not dependencies, you can install it with
yarn (or if y ou prefer with npm). You can index hundreds of documents without
issues, and all you have to do is to specify what do you want to index, and what
field are you gonna use to identify the document.

If on top of that I'll tell you that it does stemming and it supports several
languages, well, you would be thinking that this solution is :fire:

NOTE, from its website: "Stemming is the process of reducing inflected or derived words to their base or stem form. For example, the stem of *searching*, *searched* and *searchable* should be *search*. This has two benefits: firstly the number of tokens in the search index, and therefore its size, is significantly reduced, and in addition, it increases the recall when performing a search. A document containing the word *searching* is likely to be relevant to a query for *search*".

### Integrating LunrJS in NuxtJS

<div style="width:100%;height:0;padding-bottom:42%;position:relative;"><iframe src="https://giphy.com/embed/AvMJCeu1EMmhG" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/reaction-this-is-the-end-breaks-AvMJCeu1EMmhG">via GIPHY</a></p>

The integration is pretty straightforward. All you have to do is importing the
library like this:

```
var lunr = require("lunr")
require('lunr-languages/lunr.stemmer.support')(lunr)
require('lunr-languages/lunr.multi')(lunr)
require('lunr-languages/lunr.es')(lunr)
```

Then, you can use your asyncData or created methods (depending on where are you
getting the data to get indexed) and you write something like this:

```
  created() {
    const self = this
    const idx = lunr(function() {
      this.use(lunr.multiLanguage('en', 'es'))
      this.ref('basename')
      this.field('content')
      self.blogposts.forEach(blog => this.add(blog), this)
    })
    this.$store.commit('setIdx', idx)
  },
```

With those lines we are telling Lunr what is the unique identifier, in this case
the *basename*. Then, we tell it what do we want to index, in this case
*content* (which is our compiled Markdown from my blogposts). Finally, we pass
all the blogposts to the index, and we move it to the store, so you can use it
from any component. Simple?

### Searching

Now all you have to do is doing a search. For this task, you can write a method
like this:

```
search() {
  const found = this.$store.state.idx.search(this.query)
  this.$store.commit('setFound', found)
}
```

With this method we get the results and we save them in the store.

NOTE: if you want to do searches while the user is typing, you can. The only
thing you have to do is to not fire with every key stroke the search method, so
you should use [debounce](https://lodash.com/docs/4.17.11#debounce) from Lodash
to throttle the calls.

## Result

The result of this blog post is that I've applied it to my blog site, and now
you can search within all the blog posts that I have written. As soon as you are
typing, the search method is called (via the debounce function) and the results
get updated in real time. The search is reeeaaallly fast, because everything is
in memory.

I love this solution because it's clean, fast an simple.
