---
title: Command line candy for PYBOSSA
template: entry
slug: command-line-candy-for-pybossa
icon: candy
icon_author: Lost in space
icon_url: https://www.flickr.com/photos/gentagrafie/12723952215/
tags: citizen science, open source, PYBOSSA, tools
location: Madrid, Spain
meta_description: Command line candy for PYBOSSA
headline: "Managing a PYBOSSA project was never so easy."
layout: blog
---

PYBOSSA is a great framework, however we were lacking a nice command line tool to 
interact with it.

For this reason, after providing several different scripts to create projects, add 
tasks, etc, etc. I've decided to finally create a **simple** command line tool to 
master the PYBOSSA API.

<!--more-->

## pbs - mastering PYBOSSA API

As I wanted to create a powerful but simple tool to manage PYBOSSA projects via the 
command line, I looked for different solutions: argparse, docopt, etc. From all the
available solutions I found [Click](http://click.pocoo.org/) from 
[Armin Ronacher](http://lucumr.pocoo.org/) and after trying it I was simply AMAZED.

*Click is really powerful, simple and its feature for nesting commands is incredible.*

Thanks to Click I've managed to develop a command line tool for PYBOSSA in two days, 
that behaves more or less like *git* with commands, sub-commands and --help options 
to make your life much simpler!

## Installing pbs

Installing *pbs* is very simple. Just install it with **pip** with the following command:

{% highlight bash %}
 pip install pybossa-pbs
{% endhighlight %}

Then all the magic happens <i class="twa twa-wink"></i>.

## Configuring pbs

I've designed pbs to be very flexible, so all the options can be passed as arguments,
giving you all the flexibility that you could need.

One of the key aspects that I love from pbs is the possibility of having a config file 
for storing my credentials for different PYBOSSA servers. This simplifies my life, 
reduces the ammount of typing and I don't have to check all the time my API-KEY in the 
servers that I'm using :-)

The config file is very simple. It's just a file named **.pybossa.cfg** that looks something
like this:

{% highlight python %}
 [default]
 server: yourserver
 apikey: yourkey

 [anotherserver]
 server: youranotherserver
 apikey: youranotherkey
{% endhighlight%}

By default, pbs will use the *default* section, but if you want to authenticate against
another server, all you've to do is to pass the following command line option: **--credentials anotherserver**.
Done!

You don't actually need that file, but if you are working a lot with PYBOSSA I would 
recommend you to create it. It's really amazing.

## Creating a project

Now that we've pbs configured all we've to do is to create a project. Creating a project
is as simple as always. All you need is a **project.json** with something like this:

{% highlight JSON%}
 { 
    'name': 'Name of your application',
    'short_name': 'theslug',
    'description': 'description'
 }
{% endhighlight%}

Then, if you run pbs from the same folder where that file has been created, all you've
to do for creating a project is running the following command:

{% highlight bash %}
pbs create_project
{% endhighlight%}

Two words, and your project is created!

## Adding tasks

Now that we've our project available in the server, we can add tasks to it. With pbs
I wanted to allow users to import tasks from PYBOSSA servers without having to do 
nothing special. If you visit a project in [Crowdcrafting](http://crowdcrafting.org)
you will see that right now PYBOSSA allows you to download tasks as files in two 
different formats: CSV and JSON.

Once you've downloaded one set of tasks from Crowdcrafting, pbs allows you to **re-use** 
the data, as all the projects are using an open-data license. Cool, right? 

How do you re-use the tasks's file? If you've downloaded the tasks in CSV format, all
you have to do is running the following command:

{% highlight bash %}
pbs add_tasks --tasks-file file --tasks-type=csv
{% endhighlight%}

Done! **You've even a progress bar and if you have more than 300 tasks, pbs will auto
enable the throttling to respect the PYBOSSA limits of the server.** I love this ;-)

## Adding the task presenter, long description and tutorial

Now, all we've to do is to add the tutorial, task presenter and long description. 

For adding those files to the project, you can have those files created in a folder, 
with the following names:

 * **template.html**
 * **lon_description.md**
 * **tutorial.html**

If those file names exist where you are running the command, then you don't have to
type almost anything, just this command:

{% highlight bash %}
pbs update_project
{% endhighlight%}

Done! Quick, fast and simple. If you are testing something new, or if you want to 
reuse a template from another project, all you've to do is tell it to pbs:

{% highlight bash %}
pbs update_project --task-template /path/to/template.html
{% endhighlight%}


## An example

In the following video you can see how quickly you can create a project in 
Crowdcrafting (or any PYBOSSA server) using pbs with the [Flickr Person Finder template](https://github.com/PYBOSSA/app-flickrperson/).

Enjoy!

### Installing pbs


<div class="embed-responsive embed-responsive-16by9">
<iframe src='http://player.vimeo.com/video/99921525' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

### Creating a project and adding tasks

<div class="embed-responsive embed-responsive-16by9">
<iframe src='http://player.vimeo.com/video/99921526' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>

PS: I almost forgot to mention it: everything is open source and you can check the 
source code [here](https://github.com/PYBOSSA/pbs/).
