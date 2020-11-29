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

* **Rendimiento**: utiliza todas las buenas prácticas de VueJS y NodeJS, asegurando generar el código más limpio y pequeño para tu web.
* **Modular**: tienes para elegir entre más de 50 módulos que te ahorrarán un montón de trabajo. Puedes construir una PWA sin tener que escribir una sóla línea de código.
* **Divertido**: esta es probablemente una de sus mejores características. A mi no me entusiasmaba programar en JS hasta que descubrí VueJS y posteriormente NuxtJS.

Este amor ha surgido al trabajar todo el rato con NuxtJS en Scifabric. En la actualidad lo usamos para todos los clientes, dado que podemos crear sitios web muy rápidamente y además ofrecer PWA sin problema alguno. Un ejemplo, por si quieres echar un ojo, es el proyecto que hicimos para Greenpeace España: [https://solarmaps.greenpeace.org](https://solarmaps.greenpeace.org).

Al trabajar más y más con NuxtJS llegó un punto en el que empecé a preguntarme si sería muy difícil migrar mi página web de Jekyll a NuxtJS. ¿Por qué te preguntaras? Pues porque me he acostumbrado (malamente, tra, tra) a Axios, Componentes, Stylus, ... y no quiero dejarlo :smiley:

El único problema es que mi sitio web tiene varias carpetas con contenido en Markdown y que además uso el front-matter para renderizarlo de una u otra forma dependiendo de en qué URL esté. El caso es que me lié la manta a la cabeza y comencé a investigar y ver si era posible, y obviamente lo es :smiley_cat:


## Manejando Markdown en NuxtJS

Como de costumbre, la comunidad open source es maravillosa. Había varias herramientas que me permitían importar y trabajar directamente con ficheros Markdown. Por ejemplo, puedes utilizar el [cargador de ficheros Markdown para Webpack](https://www.npmjs.com/package/frontmatter-markdown-loader).

Este cargador fue mi primer intento. Sin embargo, mientras que en modo desarrollo iba bien, en cuanto construía el sitio estático fallaba. La consola web se quejaba de que el cargador no estaba disponible, y daba un error que no me dejaba ver mis proyectos, blogs, etc. 

Entonces se me ocurrió una idea :bulb:. ¿Y si lo intentaba hacer todo más sencillo? ¿Y si transformaba los ficheros Markdown directamente a JSON? Hice una rápida busca en San Google y encontré justo lo que buscaba:  [markdown-to-json](https://www.npmjs.com/package/markdown-to-json).

Esta librería es PERFECTA. ¿Por qué? Porque puedes pasarle una carpeta con ficheros Markdown, los leerá y los transformará en un objecto JSON. Así tienes en un solo fichero todos tus blog posts, proyectos, etc. Además el front-matter se parsea, y te queda dentro del JSON, con lo que un problema menos. Gracias a que ahora todos mis datos están en formato JSON, puedo solicitarlos vía HTTP (gracias Axios).

Mi primera prueba fue con el blog y todo funcionó a la primera. Así que era hora de automatizarlo todo: creé una carpeta llamanda **content** en la que guardaré todos mis blog posts, proyectos, etc. Luego tan solo tengo que ejecutar un comando como el siguiente:

```
$ m2j -c content/blogposts/*.md -o static/blogposts.json
```
De esta forma, me quedan todos los artículo de mi blog en un fichero JSON en la carpeta /static de NuxtJS. Estos ficheros se sirven directamente por el servidor web, por lo que puedo solicitarlos vía Axios. Con esto ya tengo todo lo que necesito. Lo único restante es decirle a NuxtJS cómo generar todas las rutas para esos artículos (en modo SSR no haría falta, pero al hacer una web estática, sí que hace falta, jeje).

## Creando rutas en NuxtJS

Para crear las rutas solo tenemos que modificar el fichero package.json con un par de comandos más:

```
    "dev": "yarn md2json && nuxt",
    "build": "yarn md2json && nuxt build",
    "md2json": "m2j -c content/blogposts/*.md -o static/blogposts.json"

```
Gracias a esta solución, cuando ejecutas *yarn dev* (o npm run dev) tus artículos del blog se convierten a JSON y el servidor de desarrollo lo tendrá todo listo para que te pongas manos a la obra. Por cierto, hacemos lo mismo para generar el sitio estático con yarn run build y así podremos desplegar nuestro sitio web en Zeit, Github Pages o Netlify.

Con esto resuelto, tan solo quedaba migrar mis estilos, plantillas y demás. Esto fue más o menos sencillo porque ya estaba usando webpack para montar todo el sitio en Jekyll. Así que en muchos casos sólo tuve que copiar y pegar trozos de código y adaptarlos a NuxtJS.

¿El resultado? Esta página. Ahora mismo es increíblemente rápida. Si además estás leyendo esto desde un móvil Android (o iOS última versión) el navegador web (si es Chrome) te preguntará si quieres instalar mi sitio web en tu móvil.  

Y lo que es mejor, mirad la puntuación en Google:

![Auditoría del sitio por Google](/assets/img/blog/audits-daniel.png)

## Una plantilla

Mientras realizaba la migración de mi sitio web me di cuenta de que esto podría servirle a más gente, así que he creado una plantilla muy básica que puedes re-utilizar. El código está disponible aquí: [https://github.com/teleyinex/jekyll2nuxt](https://github.com/teleyinex/jekyll2nuxt).

Esta plantilla utiliza [VuetifyJS](http://vuetifyjs.com/), así que tendrás el look Material de Google para tu sitio web. Además está configurado con PWA y los módulos de Markdown que he descrito en este artículo, así que está todo listo para utilizarse. Tan solo tienes que copiar tus ficheros Markdown a la carpeta **content** y ejecutar **yarn dev**.

Si has leído hasta aquí, MIL GRACIAS por tu tiempo :raised_hands:. Me ayudaría un montón si compartes este artículo por Twitter (o Facebook) con tu gente, para que más gente lo conozca.
