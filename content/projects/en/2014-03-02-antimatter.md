---
layout: project
title: Antimatter
date: 2013-08-03
tags: crowdcrafting, PYBOSSA, CERN, science, antimatter, physics
type: crowdsourcing
github: https://github.com/PYBOSSA/app-tweetclassification
home: http://crowdcrafting.org/app/antimatter
state: alpha
permalink: /projects/antimatter
featured: no
meta_description: "Does antimatter fall down or up?"
partners: ['<a href="http://citizencyberscience.net"><span itemprop="creator">Citizen Cyberscience Centre</span></a>', '<a href="http://aegis.web.cern.ch/aegis/"><span itemprop="creator"> AEgIS Experiment</span>', '<a href="http://cern.ch/"><span itemprop="creator">CERN</span></a>']
icon: antimatter
iconauthor: <a href="https://mediastream.cern.ch/MediaArchive/Photo/Public/2010/1011301/1011301_14/1011301_14-A5-at-72-dpi.jpg">CERN</a>
lang: en
role: "lead developer"
---

This [PYBOSSA](http://daniellombrana.es/pybossa.html) application was created as a prototype for the [2nd CERN Summer Webfest](http://daniellombrana.es/blog/2013/08/06/cernsummerwebfest2013.html) at CERN with 8 summer students. 

The [AEgIS experiment at CERN](http://aegis.web.cern.ch/aegis/) shoots antihydrogen atoms horizontally - whereupon they fly and fall - at a wall made of matter. On hitting the wall the antihydrogen annihilates with a matter nucleus in the wall to produce a burst of mostly pions and some heavier particles. These particles travel through a special gel called an emulsion which makes their tracks visible. Pions leave thin tracks while heavier particles leave much fatter tracks.

Tracing these tracks to their point of origin tells the AEgIS team exactly where the annihilation occurred, which in turn allows them to calculate how far each particle travels. They can then work out - from the distance each particle flew and fell - how antimatter interacts with gravity.

The PYBOSSA application deployed in [Crowdcrafting.org](http://crowdcrafting.org/app/antimatter) loads a set of pictures of the gel (each area has 40 layers, being the zero layer the top one, and 39 the deepest one), playing them like a movie. The goal: allow the volunteers to draw the tracks of the particles:

![](https://pbs.twimg.com/media/BQ1etHwCYAAwwX1.png){: .img-responsive}

The information contributed by the users is then showed in the info page of the application as a 3D model using the WebGL technology (note if you cannot see the 3D model, then your browsers or computer does not support WebGL):

<div class="row">
    <div id="antimatter-visualization" class="col-sm-12" style="width:400px;"></div>
</div>

Due to the success of the project, CERN twitted about the project:

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<blockquote class="twitter-tweet" lang="es" align="center"><p>Help the AEGIS experiment at CERN to figure out how antimatter is affected by gravity. Just join the dots! <a href="http://t.co/Kg9Z5GdXB9">http://t.co/Kg9Z5GdXB9</a></p>&mdash; CERN (@CERN) <a href="https://twitter.com/CERN/status/365442111413305344">agosto 8, 2013</a></blockquote>

And in a few hours, tens of tasks were completed by the volunteers.
<script src="https://rawgithub.com/mrdoob/three.js/master/build/three.min.js"></script>
<script src="https://rawgithub.com/CERNSummerWebfest/antimatter/master/js/antimatter.js"></script>
