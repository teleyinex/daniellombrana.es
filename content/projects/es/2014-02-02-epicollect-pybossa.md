---
date: 2013-04-09
title: EpiCollect + PYBOSSA
tags: epicollect, volunteer thinking, crowdcrafting, biology, PYBOSSA, air quality, science
type: volunter sensing, crowdsourcing
github: https://github.com/PYBOSSA/app-epicollect
home: http://crowdcrafting.org/app/airquality/
state: production
slug: epicollectpybossa
meta_description: Analizando la calidad del aire con biomarcadores
partners: <a href="http://citizencyberscience.net"><span itemprop="creator">Citizen Cyberscience Centre</span></a>, <a href="http://www.imperial.ac.uk/"><span itemprop="creator">Imperial College London</span></a>
icon: airquality
iconauthor: <a href="http://www.flickr.com/photos/benetd/134314157/">benet2006</a>
lang: en
role: core developer
layout: project
---

Este plantilla de PYBOSSA aúna dos proyectos en sí mismos: la captura de datos
por los voluntarios y la clasificación y análisis de las imágenes capturadas por
ellos mismos.

Para la captura de imágenes, se ha utializado la plataforma [EpiCollect](http://plus.epicollect.net) desarrollada por el [Imperial College London](http://www.imperial.ac.uk/). 

Dado que EpiCollect es la herramienta que almacenará las imágenes capturas,
modifiqué PYBOSSA para que tuviese un importador de tareas directamente de
EpiCollect, con lo que tan solo tienes que escribir el nombre del proyecto en
EpiCollect para conseguir tus datos.

Gracias a esta integración, se ha creado una aplicación web que permite estimar
la calidad del aire utilizando los líquenes como biomarcadores. La estimación
involucra la adquisición de las fotos así como la medición del área que ocupa el
líquen. Esta última parte se realiza en PYBOSSA.

## Los líquenes como indicadores de la contaminación del aire

Los líquenes son muy sensibles a la contaminación del aire, especialmente con su
acidez. Por lo tanto, la presencia o ausencia de lso mismos nos indican cómo de
limpio está el aire. 

En este proyecto, se pide a la gente que saque fotos geolocalizadas de líquenes
que posterioremente se analizan en PYBOSSA. En PYBOSSA se clasifica el tipo de
líquen, así como se mide su área para poder conocer más o menos la calidad del
aire en base a su área.
