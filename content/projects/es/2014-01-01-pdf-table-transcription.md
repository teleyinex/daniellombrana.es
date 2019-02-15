---
date: 2013-09-13
title: Transcripción de tablas de archivos PDF
tags: volunteer thinking, PYBOSSA, crowdcrafting, transcription
type: crowdsourcing
github: https://github.com/PYBOSSA/app-pdf-table-transcribe
home: http://crowdcrafting.org/app/pdftabletranscribe
state: production
slug: pdftabletranscribe
meta_description: Transcribiendo tablas de PDFs en datos usables
icon: transcribe
iconauthor: <a href="http://www.flickr.com/photos/mrmorodo/8174824430/">TempusVolat</a>
lang: en
role: lead developer
layout: project
---

Esta plantilla para PYBOSSA permite transcribir tablas de PDFs en un CSV.

El proyecto permite cargar un fichero PDF, utilizando la librería [PDF.JS](http://mozilla.github.io/pdf.js/). Esto hace que el usuario pueda ver el PDF directamente en el navegador, sin tener que utilizar un plugin externo.

Una vez cargado el PDF, el proyecto le pregunta al usuario si la página en
cuestión tiene una tabla y si es así, cuántas columnas tiene. En base a la
respuesta, una nueva tabla se crea que automáticamente va a permitir al usuario
transcribirla (celda a celda).

El siguiente vídeo muestra cómo funciona:
<div class="embed-responsive embed-responsive-16by9">
    <iframe src="//www.youtube.com/embed/yfnJHALzlZc?rel=0" frameborder="0" allowfullscreen></iframe>
</div>
