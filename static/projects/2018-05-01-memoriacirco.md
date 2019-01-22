---
layout: project
title: "Circus' history"
date: 2018-05-01
tags: vuejs, nuxtjs, frontend, backend, pybossa
type: frontend, backend, data analysis
home: https://lamemoriadelcirco.es/
state: production
permalink: /projects/memoriacirco
featured: yes
meta_description: "Recovering Circu's history"
partners: [Factoría Cultural Madrid, Teatro Circo Price]
icon: circus
iconauthor: Becky Phan 
lang: en
role: "CTO, frontend developer, backend developer, data analysis"
---

The history of circus lays usually in personal archives of citizens that loved the circus. The issue is that there's no real collection of all photos of
the history of circus as well as a well documentation about it. 

For this reason Factoría Cultural hired me (via my company) to build a crowdsourcing platform where we will be classifying photos from the last event of
teatro Circo Price in Madrid, Spain.

The platform was designed and built to allow to add as many collections as possible, without having to worry about where are the sources of the pictures that
volunteers from all over the world will classify.


## Technologies

We used PYBOSSA for the crowdsourcing part, as well as a Nuxtjs for building the frontend. This allowed us to build a progressive web application that can be
installed in the phones and people can participate as if it is a native app.


## How it works

PYBOSSA sends a picture to the volunteer, and the volunteer can answer as many questions as he/she knows:

* What discipline is this?
* How many artists are in this photo?
* Which gender?
* How old?
* Which objects do you see?
* Do you know the names and surnames of the artists?
* Their nationality?

This project uses PYBOSSA in a very unique way, as for each of the questions we have a different task that belongs to a different project. However, thanks to the
PYBOSSA api we can group the tasks by a unique identifier, so we can present actually 5 or more tasks to the same user for the same picture in a single page.

## Data analysis

This project uses also the data analysis feature of PYBOSSA. I designed a simple statistical test, where we check (depending on the question) how many users agree on
the same topic. Then, based on that we increase the number of volunteers that have to participate again, and we set the canonical answer for it.
