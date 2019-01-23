---
title: Adding a load balanced & high-availability cache to PYBOSSA
template: entry
slug: pybossa-cache
icon: balance
icon_author: Felipe Gabaldón
icon_url: https://www.flickr.com/photos/felipe_gabaldon/4334984556
tags: "cache, high-availability, load balance, crowdcrafting, PYBOSSA"
location: Madrid, Spain 
meta_description: Adding a load balanced & high-availability cache to PYBOSSA
headline: "Redis.io is an amazing software for building a cache system."
layout: blog
---

In the last days I have been working really hard to add a new cache system to PYBOSSA.

Up to now, [PYBOSSA](http://daniellombrana.es/pybossa.html) has been using [Flask-Cache](http://pythonhosted.org/Flask-Cache/), an extension for the [Flask](http://flask.pocoo.org/) micro-framework
that allows you to use several types of caching backends (i.e. [memcached](http://memcached.org/) or [Redis](http://redis.io)).

<!--more-->

[Crowdcrafting](http://crowdcrafting.org/) was using memcached, as it is a robust solution and it is really well documented.
However in the last days due to high loads in the server, I've been thinking how I can
improve the situation, and have a cache system that meets the following criteria:

* Load-balanced: queries should be balanced between a master-slave architecture within PYBOSSA.
* High-availability: if one slave or master node goes down, the system should recover itself without having to do anything special in PYBOSSA.
* Persistence: avoid warming up the cache every time you need to reboot the server.

After checking several solutions, the best candidate that meets those requirements is: [Redis](http://redis.io).

[Redis](http://redis.io) is *amazing*. Let me repeat it: **amazing**. 

The reason I decided to start using 
Redis as the main cache for PYBOSSA is that it has an incredible set of [features](http://redis.io/topics/introduction), 
a very simple master-slave setup, it is asynchronous, and over all those features: it gives you [Sentinel](http://redis.io/topics/sentinel).

Sentinel is a system that allows you to monitor your master-slave setup, and discover 
Redis services in a very simple way. Fortunately, there is a [Python client](https://github.com/andymccurdy/redis-py) that uses 
the Sentinel mode, and allows you to connect your Python software to Redis, handling behind
the curtains which nodes are alive and which nodes are not. 

As Sentinel is perfect for what I wanted to build, I decided to start using it. 
The result a new PYBOSSA caching module based on Redis.

The [new module is very simple](https://github.com/PYBOSSA/pybossa/blob/master/pybossa/cache/__init__.py), it uses Sentinel to discover the master-slave setup
and configure two clients: master and slave. Then, all read actions are loaded from the slave node, and all write actions are done in the master, balancing the 
load between the infrastructure.

The most interesting aspect of this setup, is that you can add more slaves in real time, 
and Sentinel will handle them for you. If the master node dies, then it will look for 
another master to configure it (this needs another Sentinel node), and voile: system 
up and running without having to do any special.

Today I've deployed this new version (bumping PYBOSSA version to v0.2.0) in [Crowdcrafting](http://crowdcrafting.org) 
and the speed of the site is really awesome!

The only "issue" with Redis, is that Ubuntu LTS does not have the most recent version 
of it (not even 2.6), so you have to download it manually, and compile it. The good news are
that after installing the Ubuntu package *build-essential* you should have all the requirements to run
a simple *make* command and build it. 

**NOTE**: in order to add it to the init.d section of Ubuntu, install first the old version via the
package manager, copy the files */etc/init.d/redis-server* and */etc/redis/redis.conf* to your
home folder, modify them to your needs (use the redis.conf as a guide for your redis.conf 2.6 config
file) and you will be done. Another option is to configure everything with [Supervisor](http://supervisord.org/)
which would be pretty handy (mental note, write a blog post about it).

