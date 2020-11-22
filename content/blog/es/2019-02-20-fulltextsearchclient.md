---
layout: blog
title: "Crea un motor de búsqueda para tu página web estática"
date:  2019-01-18 
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
icon: searching 
icon_author: Forest simon
icon_url: "https://unsplash.com/photos/-TX0ufDSCV4"
description: "Cómo crear un motor de búsqueda para tu página web sin servidores"
author: teleyinex
---

# Búscando en tu sitio web

Las páginas web estáticas cada vez son más populares, sin embargo tienen un
problemilla: no puedes indexar a priori todos tus datos y hacerlos accesibles en
la web.


<div style="width:100%;height:0;padding-bottom:73%;position:relative;"><iframe src="https://giphy.com/embed/l3q2PZSVUUEsajBIY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/oscars-academy-awards-1952-l3q2PZSVUUEsajBIY">via GIPHY</a></p>

Existen servicios como Angolia, o servidores web como Solr. El primero es más o
menos sencillo, pero al final tienes que tener tu web indexada por un tercero.
La opción de Solr es muy chula, pero claro, si tienes tu web en un servidor
estático tipo Github Pages, pues como que no puedes usarlo :smile:. Así que,
¿qué solución te queda?

## Lunr.JS, parecido a Solr, más pequeño y con mucho menos brillo

<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/rZKXaQyfvZQv6" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/moon-cute-black-rZKXaQyfvZQv6">via GIPHY</a></p>

En mi afán por buscar una solución a este problema, me econtré con esta
librería: [LunrJS](https://lunrjs.com/)

La librería es muy pequeña, se puede instalar con yarn (o si lo prefieres con
npm). Te permite indexar cientos de documentos sin problemas, tan solo tienes
que especificar qué campos quieres indexar y cual de ellos vas a utilizar como
referencia (un identificador único).

Si además te digo que hace stemming, y que soporta varios idiomas, pues la
verdad es que pensarás que es la leche :wink:.

NOTA: el stemming es una función de búsqueda que hace que se encuentre un
documento conjugando un verbo, que sean palabras indistintamente en plural o
singular, etc.

### Integrando Lunrjs en Nuxtjs

<div style="width:100%;height:0;padding-bottom:42%;position:relative;"><iframe src="https://giphy.com/embed/AvMJCeu1EMmhG" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/reaction-this-is-the-end-breaks-AvMJCeu1EMmhG">via GIPHY</a></p>

Para integrarlo no hay mucha complicación. Tan solo lo importamos tal que así:

```
var lunr = require("lunr")
require('lunr-languages/lunr.stemmer.support')(lunr)
require('lunr-languages/lunr.multi')(lunr)
require('lunr-languages/lunr.es')(lunr)
```

Y luego nos vamos a nuestra función asyncData o created (dependendiendo de dónde
consigas los datos a indexar) y haces algo tal que así:

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

Con esto le decimos a Lunr cual es el identificador único, en este caso
basename. Luego qué campo queremos indexar, en este caso content (que es el
Markdown compilado de todos mis blog posts). Finalmente, le pasamos todos los
blogposts al índice y lo ponemos en la store para que pueda utilizarse desde
cualquier componente. ¿Sencillo?

### Buscando

Ahora ya sólo queda realizar una búsqueda, para eso un método como este sirve:

```
search() {
  const found = this.$store.state.idx.search(this.query)
  this.$store.commit('setFound', found)
}
```

Con este método, obtenemos los resultados y los colocamos en la store. 

NOTA: si quieres hacer un autocompletado, puedes. Lo único es que no quieres
abusar de la búsqueda, así que usa
[debounce](https://lodash.com/docs/4.17.11#debounce) de Lodash y descarga un poco de
llamadas a tu función. 

## Resultado

Pues el resultado es esta misma web, en la sección del blog. Aquí puedes buscar
dentro de todos los blog posts escribiendo. A medida que vas escribiendo, el
método search se llama (a través de debounce) y se actualizan los resultados en
tiempo real. La búsqueda es muuuuy rápida porque está todo en memoria.

Me encanta porque es una solución, limpia, rápida y sencilla.
