---
date: 2010-10-01
title: LHC@Home Test4Theory
tags: "volunteer computing, BOINC, CERN, physics, virtualization"
type: volunteer computing 
github: https://github.com/citizen-cyberscience-centre/cernvmwrapper
home: "http://lhcathome2.cern.ch"
state: production
slug: test4theory 
role: "core developer, researcher, community manager"
meta_description: "Un colisionador de átomos virtual"
partners: ['<a href="http://citizencyberscience.net"><span itemprop="creator">Citizen Cyberscience Centre</span></a>', '<a href="http://cern.ch"><span itemprop="creator">CERN</span></a>']
funders: ['<a href="http://lpcc.web.cern.ch/LPCC/"><span itemprop="contributor">LHC Physics Centre at CERN</span></a>', '<a href="http://www.shuttleworthfoundation.org/"><span itemprop="contributor">Shuttleworth Foundation</span></a>']
icon: lhc
iconauthor: '<a href="http://cern.ch">CERN</a>'
lang: en
layout: project
---

La plataforma [LHC@home](http://cern.ch/lhc) permite a voluntarios y físicos
utilizar y estudiar los aceleradores de partículas como el [LHC](http://cern.ch/public/en/lhc/lhc-en.html).
De este modo pueden comparar teoría y realidad con el objetivo de encontrar
nuevas partículas.

Gracias a que los voluntarios comparten altruistamente los recursos de sus
computadores, ellos pueden ejecutar simulaciones de colisiones de partículoas en
los detectores del LHC.

La plataforma tiene dos proyectos:
 * **Sixtrack**: que estudia la máquina LHC y sus actualizaciones para comprender las leyes fundamenales del universo.
 * **Test4Theory**: que investiga sobre la partícula Higss.

El proyecto Test4Theory es muy innovador porque ha sido el primer proyecto BOINC
que utiliza la tecnología del CERN para sus simulaciones en computadores
caseros. El proyecto utiliza el hipervisor Virtualbox para lanzar una instancia
de la [máquina virtual CernVM](http://cernvm.cern.ch/). Esta máquina se conecta a los servidores del CERN, descarga las librerías que necesita así como sus dependencias para poder ejecutar las simulaciones.

El proyecto ha sido publicado en varios medios de [noticias](http://lhcathome2.cern.ch/media) como:
 * [BBC](http://www.bbc.co.uk/news/science-environment-14488797), 
 * [Discovery Channel](http://news.discovery.com/space/hunting-the-higgs-boson-from-home-110811.html), 
 * [ZDNet](http://www.zdnet.co.uk/news/emerging-tech/2011/08/09/cern-taps-home-pcs-for-virtual-atom-smashing-40093652/), 
 * [Ars Technica](http://arstechnica.com/science/news/2011/08/virtual-particles-cern-updates-lhchome.ars), 

## Herramientas web para el proyecto

El proyecto se ha extendido con varias herramientas web que permiten a los
voluntarios conocer más sobre el proyecto.

### El club de los Billionarios

El proyecto entrega un crédito por las simulaciones ejecutadas dentro del
ordenador del usuario. Esta métrica se utiliza para crear una lista con los [20
usuarios que más han contribuid al proyecto](http://www.citizencyberscience.net/t4t-webapp/stats/).

Basándonos en este ranking, se crea el [Club de los Billionarios](http://www.citizencyberscience.net/t4t-webapp/stats/club.html) como una línea temporarn el aque se puede ver a aquellos usuarios que han simulado más de un billón de eventos.

<a target="_blank"
href="https://github.com/citizen-cyberscience-centre/t4t-stats">Código fuente</a>.

### Extensión para Mozilla Firefox

Además, para permitir a los voluntarios monitorear sus contribuciones, se creó
una extensión que permitía saber cuales era sus últimas contribuciones a través
de la API de MCPLOTs.

<a target="_blank"
href="https://github.com/citizen-cyberscience-centre/t4t-firefox-addon">Código
fuente</a>.

### Aplicación para Mozilla Firefox Marketplace

Se creó una aplicación para [la versión nightly de Firefox para Android](http://nightly.mozilla.org/). La aplicación web permitía a los usuario monitorear desde sus teléfonos las contribuciones a los proyectos.

<a target="_blank" href="http://github.com/teleyinex/t4t-app/"> Source Code</a>.

### Simulaciones gráficas de Test4Theory 

Dado que el proyecto se ejecuta dentro de una máquina virtual, podemos mostrar
el progreso de sus simulaciones (pero no el de BOINC). Por este motivo, dentro
de la máquina virtual se instaló una aplicación web que mostraba el progreso y
las simulaciones hechas por la misma en un navegador web.

<a target="_blank" href="http://www.citizencyberscience.net/t4t-webapp/">Demo</a>.

<a target="_blank"
href="https://github.com/citizen-cyberscience-centre/t4t-webapp"> Código fuente</a>.
