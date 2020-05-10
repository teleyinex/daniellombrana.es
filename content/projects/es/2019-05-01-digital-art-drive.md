---
layout: project
title: "Digital Art Drive"
date: 2019-05-01
tags: vuejs, nuxtjs, frontend, backend
type: frontend, backend, data analysis
home: https://digitalartdrive.com/
state: production
permalink: /projects/digital-art-drive
featured: yes
meta_description: "Almacena tu colección de arte de manera segura"
partners: []
icon: triangle
iconauthor: 
lang: en
role: "CTO, frontend developer, backend developer, data analysis"
---

Este proyecto se creó con el objetivo de ofrecer una manera segura de almacenar colecciones de arte dentro de una red de coleccionistas, galerías y museos. La plataforma usa redes P2P para almacenar trozos de las colecciones haciendo que sea imposible que uno de los miembros de la red pueda descargarse el fichero completo, haciendo imposible su reproducción. Tan solo cuando el dueño del fichero lo comparta con otra persona de la red, esa persona podrá descargarlo y visualizarlo o reproducirlo.

## Características principales del proyecto

Los datos se almacenan en una red de iguales, en vez de en servicios como Amazon S3 o Microsoft Azure. Esto implica que los datos se comparten única y exclusivamente con instituciones y colegas que forman parte de la red.

La red por defecto es privada y se mantiene y construye gracias a galerías de arte, coleccionistas, expertos en arte e instituciones. De los artistas para los artistas.

Compartir una obra es tan sencillo como enviar un email (el cual posee un token) que permitirá al receptor abrirlo en la plataforma.

## Premios

El Ministerio Español de Cultura y Deporte valoró el proyecto como uno de los [mejores proyectos de la convocatoria de 2018](https://www.culturaydeporte.gob.es/cultura/industriasculturales/mejores-proyectos/mejores-proyectos-2018/modernizacion/conservacion-arte-digital.html).

## Software utilizado

Para el almacenamiento de los datos se utilizó [IPFS](https://ipfs.io/). Para el backend [Python](https://www.python.org/), y para el frontend [VueJS](https://vuejs.org/) con [NuxtJS](https://nuxtjs.org/).
