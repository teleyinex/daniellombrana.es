---
date: 2012-01-01
title: ForestWatchers.net
github: http://github.com/ForestWatchers
tags: volunteer thinking, PYBOSSA, deforestation, damage assessment, biology
type: crowdsourcing
state: alpha
slug: forestwatchers
meta_description: a citizen project for forest monitoring
partners: ['<a href="http://www.inpe.br"><span itemprop="creator">Brazil National Institute for Space Research</span></a>', '<a href="http://citizencyberscience.net"><span itemprop="creator">Citizen Cyberscience Centre</span></a>']
funders: '<a href="http://soros.org"><span itemprop="contributor">Open Society Foundation</span></a>'
icon: forest
iconauthor: '<a href="http://www.flickr.com/photos/vinothchandar/6820565620/">Vinoth Chandar</a>'
lang: en
role: core developer, researcher
layout: project
---

ForestWatchers.net is a citizen cyberscience project where volunteers from all over the world can help in assessing deforestation from satellite images.
The project uses the open source [PYBOSSA](http://daniellombrana.es/pybossa.html) framework and has currently two running web applications:
 * **Best Tile**. Volunteers help selecting the less cloudy image for the same are from satellite images.
 * **Deforested Areas**. Volunteers help to identify deforested areas (even in indigenous or federal protected areas) by drawing polygons.


## Best Tile

This application was developed to help the researchers to clean satellite images from clouds. Basically, the application shows pictures of the same area but taken on different days, so the users can actually select the best tile, or in other words, the tile with less clouds.

## Deforested Areas

This application builds on top of the previous one, using the cleaned images, to allow the users to mark deforested areas by drawing polygons on top of the deforested areas. This application shows also information in different layers regarding:
  * **Indigenous areas**
  * **Federal protected areas**
  * **Hydrography**

### Video

<div class="embed-responsive embed-responsive-16by9">
    <iframe src="http://www.youtube.com/embed/syyJ_bEbAtI?rel=0" frameborder="0" allowfullscreen></iframe>
</div>
