---
title: Reinventing the wheel
template: entry
slug: reinventing-the-wheel
icon: wheel
date: 2014-02-26
icon_author: Rego Korosi
icon_url: https://www.flickr.com/photos/korosirego/4849943530
tags: citizen science, open source, PYBOSSA, evolution, discussion
location: London, United Kingdom
meta_description: Reinventing the wheel
headline: "Reinventing the wheel can be treated as a technique that will assure enough genetic diversity."
layout: blog
---

In the last three days I've participated in the third [Citizen Cyberscience Summit](http://cybersciencesummit.org/).

The event has been the biggest so far, and you could appreciate it not only in the number of people, but also in the number of new projects coming out from the crowd.

After several talks and workshops you could actually see a trend: **different groups are reinventing the wheel**. Now the obligated question: **is this a good or a bad thing?**

<!--more-->

Before going forward, let me be clear, in my personal case I'm doing the same, I'm developing *another* citizen science framework, so to some extent I'm contributing to reinventing the wheel, right?

Reinventing the wheel is not new to me. I'm a GNU/Linux user since Red Hat 5.2 and I can say that I've heard the same argument several times in the open source community: another window manager? This is the year for GNU/Linux.

![meme](http://i.imgur.com/JBYFSxa.png){: .img-responsive}

If you want to check what I'm saying, all you have to do is the following: search in Google the name of an open source project, go to its e-mail list and your chances of finding a heated discussion about this specific issue are high, quite high (just check the last controversy about SystemD vs Upstart [here](http://www.reddit.com/r/linux/comments/1w9qtv/the_design_flaws_of_upstart/) and [here](http://ewontfix.com/14/) as two different points of view).

While I'm used to this type of controversy, the truth is that *I've not been thinking really carefully about it, until the conference*. In the summit we have had the same conversations, everyone complaining about reinventing the wheel but all of us creating our own wheel and saying to the rest of the world: **this IS THE wheel**.

Moreover, **it looks like for everyone reinventing the wheel is something bad**. **But is it really bad?** Have you think about it carefully?

One of the most used arguments to say that **reinventing the wheel** is something bad, is that it is a **waste of energy and resources**, repeating almost exactly the same features. The point is that: both solutions should join forces and build a better unified solution.

What do you think? Is it a waste of time, energy and resources? My answer: yes, it is, but is this enough to stop trying reinventing the wheel?

During these three days I've thinking about all these issues and I've realized that when we are arguing about it, what we are actually doing is describing [the evolution of species](http://en.wikipedia.org/wiki/On_the_Origin_of_Species) (thanks Darwin!).

Yes, you have read it right: the evolution of species. Let me explain it to you.

Let's pick a topic completely randomly (cough): *citizen science*. Now let's pick a problem within it: *developing a citizen science framework*.

Developing the best possible and imaginable citizen science framework is challenging, right? Thus, we can say that finding a solution is going to be complicated, really difficult.

Let's imagine that the perfect framework exists. However, we do not know where it is, or how it looks like. For this reason we have a huge search space. Really big (deep space). Even though it looks like it is almost impossible to find a solution, some people will try and start building their own solution.

![meme](http://i.imgur.com/tn0NZMx.png){: .img-responsive}

As with every new born, the very first version is not going to be the best one, it lacks a lot of features, fails a lot, and has a very small community (generation zero). While this team is developing their solution, another group starts something similar without even knowing anything about the previous work. Interestingly, they are focused on the same goals, and therefore they will build similar solutions: they share some [building blocks](http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=4983245&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D4983245). In other words, they are reinventing the wheel.

**But the truth is that even though they share some building blocks, both projects are not quite the same**. They have their own unique features: how the project is handled, the employed technology, the community around it, etc, etc.

In summary we have two individuals (aka as candidate solutions) looking to **survive** in the field of citizen science. In order to know which solution is the best one, we have a fitness function that can compare them: i.e. **sustainability**. At this point you might realize that what I'm describing it is an [evolutionary algorithm](http://en.wikipedia.org/wiki/Evolutionary_algorithm). In a pure evolutionary algorithm, the candidate solutions will be breed together to create new offspring (crossover and mutation operations) with the goal of generating better solutions for the next generation.

From the point of view of software, this is a bit more complicated, but the reproduction could be done by implementing features that another framework lacks because that feature has proved to be a successful solution (crossover operation). On the other hand, new features are developed to distinguish it from its competitors (mutation operation). While it is not 100% the same, I think that we can see the parallelism between both approaches, as all the projects at some point implement similar solutions in other to compete and survive while adding new features that make them unique.

Therefore, all the features of every framework can be treated, from this point of view, as **traits or genetic features of the frameworks**. In evolution theory we know that: ["without genetic variation a population cannot evolve in response to changing environmental variables and, as a result, may face an increased risk of extinction"](http://evolution.berkeley.edu/evosite/relevance/IIIA2Lowvariation.shtml).

Moreover, in a recent study it is shown that [loss of genetic diversity threatens species diversity](http://www.enn.com/wildlife/article/23391). According to Dr. Richard Lankau: *"Diversity within a species is necessary to maintain diversity among species, and at the same time, diversity among species is necessary to maintain diversity within a species. And if any one type is removed from the system, the cycle can break down, and the community becomes dominated by a single species."*

If we add to the equation that **genetic diversity plays an important role in the survival of the species** (see this [paper](http://www.sciencedirect.com/science/article/pii/S0006320705002089) from Dr. Richard Frankman), then **we can assume that having different similar frameworks that try to solve a problem is not bad, it is good, really good**.

In summary, **to me**, *reinventing the wheel can be treated as a technique that will assure enough genetic diversity* (different features) for frameworks, so the species can survive. What do you think?

NOTE: The photo of this entry has been modified to remove a banner on right bottom corner.
