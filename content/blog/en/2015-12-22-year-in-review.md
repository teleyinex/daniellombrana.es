---
layout: blog 
title:  "Year in review"
date:   2015-12-22 
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
icon: road 
icon_author: Dustin Graffke
icon_url: https://www.flickr.com/photos/onepointfour/21478226510/
description: "2015 has been an incredible year for team SciFabric."
author: teleyinex
tags: yearinreview
---

Wow, another year is almost over! Time flies and, like everyone else, we love to
reflect on our achievements over the past 12 months...

## PyBossa

As you know, or at least should know <i class="twa twa-smile"></i>, [PyBossa](http://pybossa.com) is the king of our products. 
It lets you *build your own research platform* in just a few easy steps. This year, we've 
introduced some cool new features so you'll be able to do more
with less hacking. (Don't worry developers, we've created amazing tools for
you too... read on!)

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="//giphy.com/embed/oKVs1VY0MKfvO" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/nervous-indiana-jones-waiting-oKVs1VY0MKfvO"></a></p>
  </div>


### Third Party Integrations

We know that data can be stored in different places. We've therefore introduced three new integrations
to PyBossa:

 *  Flickr
 *  Dropbox
 *  Twitter

**You can now import any album from Flickr**, or log in with your Flickr account and select the album
you want to import. As simple as that. This feature is pretty handy for galleries, libraries, archives
and museums (GLAM) as they usually have tons of pictures on [Flickr commons](https://www.flickr.com/commons/). Thus, if you
have photos in Flickr already, import them with a click or upload new photos to it. Flickr gives 1TB of space
for free!

Well, if you think Flickr is handy, what about our Dropbox integration? Yes, **you can import any
picture, audio file, PDF or video file from your own Dropbox account**. As many people use Dropbox to store their
data sets, we thought: what about integrating it into PyBossa? And voilà, here you have it! Another
integration that allows you to easily select your own data sets from a file viewer.

In December, we've also added a Twitter importer. Were you looking for **sentiment analysis using Twitter hashtags**? You've found it!
You only have to type the query that you want to import, and PyBossa will do the hard work for you. We've created [two templates](https://github.com/PyBossa/project-twitter-templates)
so you can conduct sentiment analysis in under 10 minutes!

### Auto importers

While these integrations are cool, we realized that lots of projects are updated *by hand* when
new data becomes available. For instance, when you used our [EpiCollect+](http://plus.epicollect.net/) integration
to capture data with phones, you *had* to manually import the project again from time-to-time to capture
the new entries. It was simple, but you had to remember to do it. Thus, we decided to automate it, 
and so the **auto importers** were born.

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="//giphy.com/embed/YXpp9YxWhyWBy" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/angry-king-burger-YXpp9YxWhyWBy"></a></p>
  </div>

Auto importers let you transfer data directly into your PyBossa project without having to do it 
manually. This feature allows you to push data to your projects while you can do other
stuff, such as enjoy a cup of tea and check your emails. PyBossa will notify you when the new data
has been added. Enjoy!

### Mailchimp

The integrations discussed so far benefit you: the project owner. But what about your community? Well, don't worry,
we've got them covered too. 

We know that your community wants to get connected, get the latest news about your
crowdsourcing platform, and keep up-to-date on what you have achieved etc. So we've integrated PyBossa
with [Mailchimp](http://mailchimp.com/). The integration asks new users whether they want to
subscribe to your newsletter at registration. Simple but effective. Now you have no excuse for not communicating to your community, right?

<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="//giphy.com/embed/XB6pGqvOfJqY8" width="480" height="368" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/dancing-happy-jimmy-fallon-XB6pGqvOfJqY8"></a></p>
  </div>

### Administrator's dashboard

With this approach in mind, we also wanted you to have 
more insight about what's going on in the platform. Hence, **we've developed a dashboard for administrators** 
where you can check the number of registered users in your site in the last week, 
find out when new projects are created, published and updated, and when new versions of PyBossa are released, 
as well as view a live feed of what's going on the platform. 

### For da geeks!

Finally (I told you we've not forgotten about the developers), **we've developed a plugin
system in PyBossa**. This feature allows you to actually extend what PyBossa can do.

For example, the British Library and their PyBossa-powered platform [LibCrowds](https://github.com/LibCrowds/Z3950-pybossa-plugin) have 
created two cool plugins:

 * [Discourse integration](https://github.com/LibCrowds/discourse-pybossa-plugin): now you can have your own forum in PyBossa.
 * [Z39.50 integration](https://github.com/LibCrowds/Z3950-pybossa-plugin): if your institution uses this protocol, you can easily integrate it.


Not bad for a year's work, right? Then, go and grab the latest version!

## Be your own research platform

This year four institutions have chosen PyBossa as their solution to become their
own crowdsourcing research platform (and we're so happy and proud about it).

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="//giphy.com/embed/Fbyam9ZAJ3J1m" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/time-school-chemistry-Fbyam9ZAJ3J1m"></a></p>
  </div>

### National Library of Israel

The National Library contacted us this year to showcase what they have achieved with
their PyBossa-powered platform [nlics.org](http://nlics.org). Their goal is to improve 
their metadata by asking contributors to tag, transcribe and answer questions 
relating to historical Israeli documents.

### The Guardian

[The guardian](http://www.theguardian.com/australia-news/datablog/2015/mar/09/why-were-crowdsourcing-the-nsw-pecuniary-interests-register-faq) 
newspaper wanted to bring more transparency to New South Wales' (Australia)
pecuniary interests. They used PyBossa to make the first crowdsourcing 
project of its kind. 

In New South Wales politicians are required to declare details of gifts, investments, 
business interests, and other items that could influence their decisions in parliament. They do this in the pecuniary interests register. However, half of New South Wales 
pecuniary interests register has never been available to view online by the public, and the 
other half is hard to find. All of the declarations are only available as scanned 
PDFs, sometimes handwritten, which makes it difficult to properly scrutinise the register.

The solution? Use PyBossa to transform human readable documents into machine readable documents, 
publishing a [search interface](http://www.theguardian.com/global/datablog/ng-interactive/2015/mar/27/search-the-nsw-register-of-pecuniary-interests-to-see-what-politicians-have-declared) and a [data set in GitHub](https://github.com/nickjevershed/pecuniaryinterests/blob/master/data.json), as well as a nice [article about this
investigation](http://www.theguardian.com/australia-news/2015/mar/27/exclusive-nsw-liberal-mps-failed-to-declare-financial-interests-on-register), where the journalists explains that their research *forced New South Wales fair trading minister and the Liberal party’s whip to correct their pecuniary interest disclosures*. Amazing!

### The British Library

The British Library joined the PyBossa club with their [LibCrowds](http://libcrowds.com/) platform.
As with the National Library of Israel, they have several projects where they use PyBossa 
to ask volunteers to transcribe text from printed card catalogues into electronic records 
in order to make them available to a worldwide audience. 

The project is initially focused on the library's Asian and African collections, 
particularly the Chinese and Indian catalogues. Data identified, transcribed or 
translated as part of the project will be freely accessible from the 
British Library's Explore catalogue.

You can find the [first results of the project in their blog](http://www.libcrowds.com/blog/6).

### University of Heidelberg

The [University of Heidelberg](http://www.heidelberg.edu/) and [Disaster Mappers](https://disastermappers.wordpress.com/) have used our PyBossa technology to create two amazing projects.

The [first project](http://crowdmap.geog.uni-heidelberg.de/app/missing_maps_follow_up/) supports the [Missing Maps Project](http://www.missingmaps.org/) by classifying 
Bing aerial imagery. Volunteers were asked to assess whether there are human 
settlements or major roads in the satellite imagery, [building the first data set](http://umap.openstreetmap.fr/es/map/missing-maps-south-kivu-region-human-settlements-a_53739#9/-2.9842/28.9970) for the
analyzed areas.

The [second project](http://crowdmap.geog.uni-heidelberg.de/app/shelter_dynamics/) monitors the temporal and spatial dynamics of camps of 
internally displaced persons (IDP) using satellite imagery to provide credible and 
up-to-date information from the Nepal Earthquake.

## Events

This year we have participated in several conferences, workshops and symposiums. We were at
[EmpoderaLIVE](http://live.empodera.org/) and we helped present the results of Micropasts: a PyBossa
powered project by the British Museum and University College of London. 

![Spear head 3D printed thanks to PyBossa](/assets/img/blog/spear.jpg){: .img-responsive}
<p class="post-caption">Spear head 3D printed built thanks to PyBossa powered photomasking projects at Micropasts.</p>


At [Zincshower](http://zincshower.com/) we won the award for **Best startup of the event**. The prize was to go to
[Sonar+D](http://sonarplusd.com/), a very cool event where we had the opportunity to learn about the latest trends in
electronic music, as well as hang out with some of amazing start-ups.

<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="//giphy.com/embed/26tPghhb310muUkEw" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/90s-retro-commercials-26tPghhb310muUkEw"></a></p>
  </div>

## Crowdcrafting

### New jazzy projects

Crowdcrafting has also seen some amazing projects this year. Like [Landfill Hunter](http://crowdcrafting.org/project/landfill/), where the researcher
wants to increase awareness of landfill sites, as well as contribute data to help better understand landfills and bring that information into the public domain.

The [European Illegal Parking](http://crowdcrafting.org/project/Illegal_Parking/) project wants to rank European cities in order of the level of illegal parking observed on their streets.
Hopefully, this ranking will raise awareness of the problem in Europe and put pressure on national and local institutions to pursue more effective measures to tackle the problem. Awesome, right?

Finally, [Localizing Pune's Budget](http://crowdcrafting.org/project/localpunebudget/). 
This project is trying to analyze and evaluate the ward-level infrastructure and public spending for Pune. 
Out of 9,614 budget items listed in the annual budget book for 2015-16, 
about 1,997 do not have any ward number or whole-city marking alloted. 
It would be great if you could assign the proper ward numbers to these works: 
so they then can have a more accurate picture about the investment made in various areas of Pune.

### The stats

If we're to reveal our **vanity checks**, we can say that **people have uploaded more than 200K tasks to Crowdcrafting**, and close to 
**half a million answers have been submitted by volunteers from all over the world**.

**2000 new users joined us this year**, while almost **4000 anonymous people participated in a project**.

More than **600 projects were created** and there will no doubt be lots of new ones in 2016.

## Looking ahead...

While this year has been amazing, we think that 2016 will be even cooler with new additions to PyBossa (like a new
importer for Youtube videos) as well as some secret stuff that we cannot share yet (yes, I'm trying to build anticipation
so you'll check the blog next year <i class="twa twa-wink"></i>).

Merry Christmas and Happy 2016!
