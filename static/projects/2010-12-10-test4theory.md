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
meta_description: "A virtual atom smasher"
partners: ['<a href="http://citizencyberscience.net"><span itemprop="creator">Citizen Cyberscience Centre</span></a>', '<a href="http://cern.ch"><span itemprop="creator">CERN</span></a>']
funders: ['<a href="http://lpcc.web.cern.ch/LPCC/"><span itemprop="contributor">LHC Physics Centre at CERN</span></a>', '<a href="http://www.shuttleworthfoundation.org/"><span itemprop="contributor">Shuttleworth Foundation</span></a>']
icon: lhc
iconauthor: '<a href="http://cern.ch">CERN</a>'
lang: en
layout: project
---


[LHC@home](http://cern.ch/lhc) is a platform for volunteers to help physicists develop and exploit particle accelerators like [CERN’s Large Hadron Collider](http://cern.ch/public/en/lhc/lhc-en.html), and to compare theory with experiment in the search for new fundamental particles.

By contributing spare processing capacity on their home and laptop computers, volunteers may run simulations of beam dynamics and particle collisions in the LHC’s giant detectors.

The platform has two active projects:
 * **Sixtrack**: studies the LHC machine and its upgrade to understand the fundamental laws of the universe.
 * **Test4Theory**: researches about the elusive Higgs particle with a virtual atom smasher.

The Test4Theory project is innovative because it has been the first BOINC project using the virtualization technology to run CERN simulations in commodity computers. The project uses the open source VirtualBox hypervisor to run an instance of the [CernVM virtual appliance](http://cernvm.cern.ch/) that connects to the CERN servers to download the required libraries and dependencies in order to run the simulations.

The project has been featured in popular [news sites](http://lhcathome2.cern.ch/media) like:
 * [BBC](http://www.bbc.co.uk/news/science-environment-14488797), 
 * [Discovery Channel](http://news.discovery.com/space/hunting-the-higgs-boson-from-home-110811.html), 
 * [ZDNet](http://www.zdnet.co.uk/news/emerging-tech/2011/08/09/cern-taps-home-pcs-for-virtual-atom-smashing-40093652/), 
 * [Ars Technica](http://arstechnica.com/science/news/2011/08/virtual-particles-cern-updates-lhchome.ars), 
 * [etc](http://lhcathome2.cern.ch/media).

## Web tools for the project

This project has been extended with several web tools that will help the volunteers to get more feedback from the project.

### Top users and Billionaires club

The project provides an alternative *credit* system for the volunteers based on the simulations carried out within the volunteer's computers. This metric has been used to create a list with the [top 20 users](http://www.citizencyberscience.net/t4t-webapp/stats/) of the project, listing who is contributing more of their time to the project.

Based on this ranking system, a [Billionaires Club](http://www.citizencyberscience.net/t4t-webapp/stats/club.html) was created as a time line adding the users that have simulated more than 1 Billion events thanks to their contributions.

<a target="_blank"
href="https://github.com/citizen-cyberscience-centre/t4t-stats">Source
Code</a>.

### Mozilla Firefox Add-on

In order to help the volunteers to monitor their contributions, a [Firefox Addon](https://addons.mozilla.org/firefox/addon/test4theory-stats-checker) has been created. This add-on allows the users to get their latest contributions to the project via the MCPLOTs API.

<a target="_blank"
href="https://github.com/citizen-cyberscience-centre/t4t-firefox-addon">Source
Code</a>.

### Mozilla Firefox Marketplace Application

This app stills in the review mode but can be fully tested in the [Android Firefox Nightly version](http://nightly.mozilla.org/). The web application allows the users to monitor from their Android tablet or smartphone their contributions to the project. This application uses also the MCPLOTs API and it works also in the desktop version (even in Chrome).

<a target="_blank" href="http://daniellombrana.es/t4t-app/">Demo
application</a>.

<a target="_blank" href="http://github.com/teleyinex/t4t-app/"> Source Code</a>.

### Test4Theory simulations Web Graphical User Interface

The project runs all the simulations within the Virtual Machine, so showing the progress to the users using the standard BOINC screensaver, it is not possible unless a server is run in the Virtual Machine. For this purpose, a web server was installed in the Virtual Machine and a simple web application is served and shows the progress and simulations carried out by Virtual Machine in any modern web browser. 

<a target="_blank" href="http://www.citizencyberscience.net/t4t-webapp/">Demo
application</a>.

<a target="_blank"
href="https://github.com/citizen-cyberscience-centre/t4t-webapp"> Source
Code</a>.
