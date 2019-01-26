---
layout: project
date: 2011-08-03
title: LHC Luminosity Dashboard
tags: CERN, webfest, science, visualization, physics
type: html5, javascript, webfest
github: https://github.com/CERNSummerWebfest/LHC-HTML5-Dashboard
home: http://cernsummerwebfest.github.io/LHC-HTML5-Dashboard/ 
state: prototype
slug: lhcdashboard
meta_description: LHC Luminosity dashboard prototype 
partners: <a href="http://citizencyberscience.net"><span itemprop="creator">Citizen Cyberscience Centre</span></a> 
icon: lhcdashboard
lang: en
role: core developer
---

This [demo](http://cernsummerwebfest.github.io/LHC-HTML5-Dashboard/) is a prototype created during the [CERN Summer Webfest](http://www.citizencyberscience.net/events/cernsswebfest2011/) an event that took place at CERN in 2012.

The objective of the event was to work in teams and design neat web applications that would encourage 
people to learn more about science, and in particular about [CERN](http://cern.ch), the LHC and particle physics.

The event was hosted during two days of really active [CERN summer students](http://hr-recruit.web.cern.ch/hr-recruit/summies/default%20page/) that worked in really amazing projects.

The following video shows a meta_description of all the projects explained by the students.

<div class="embed-responsive embed-responsive-16by9">
    <iframe src="https://www.youtube-nocookie.com/embed/cky9OFcoIsI?rel=0" frameborder="0" allowfullscreen></iframe>
</div>

In the event I participated as a coordinator and organizer, and as I love to develop new applications, I created one with the collaboration of the amazing artist and designer Andre Pierre Olivier. He helped me to improve the design and aesthetics of the application.

The [demo](http://cernsummerwebfest.github.io/LHC-HTML5-Dashboard/) shows how it will be possible to create a modern dashboard for the LHC experiments. The [current CERN dashboard](http://lhcdashboard.web.cern.ch/lhcdashboard/) renders a static PNG image that it is updated by a back-end server. The proposal of the [demo](http://cernsummerwebfest.github.io/LHC-HTML5-Dashboard/) is to use HTML5 and JavaScript to render in real time the data that the LHC experiment is showing in the dashboard.

<div class="row-fluid">
    <div class="col-md-6">
    <img src="/assets/img/project/lhcdashboard.png" class="img-responsive">
    </div>
    <div class="col-md-6">
    <img src="/assets/img/project/dashboard.png" class="img-responsive">
    </div>
</div>

The [demo](http://cernsummerwebfest.github.io/LHC-HTML5-Dashboard/) uses a predifined dataset, we only had access to the [ATLAS](http://atlas.web.cern.ch/Atlas/Collaboration/) luminosity data, so we added some noise to the same data in order to create a similar chart for the other experiment: [CMS](http://cms.web.cern.ch/). The web application shows the luminosity values of the experiments in an interactive bar chart that can change between two different views in order to compare the data: group and stack.

Finally, as one of the goals of the CERN Summer Webfest was to promote science, I asked the collaboration of a student, [Francesca Day](http://cambridge.academia.edu/FrancescaDay), to help me to explain in a short video what is luminosity and why is important. 

As the application uses the HTML5 technology, the video is played automatically by the web browser without using any third party plugins like Adobe Flash. The web application uses the popular [Mozilla Popcorn.JS](http://popcornjs.org/) library to play and pause the video.
