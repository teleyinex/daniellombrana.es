---
title: The Art of Graceful Reloading
template: entry
date: 2015-07-01
slug: gracefulreloading
icon: loop
icon_author: Leo Prieto
icon_url: https://www.flickr.com/photos/leoprieto/582310541/
tags: Crowdcrafting, architecture, infrastructure
location: Madrid, Spain
meta_description: "Reloading your server without your users noticing it"
headline: "Reloading your server without your users noticing it"
layout: blog
---

The holy grail of web developers is to do deployments without interrupting your users.
In this blog post I explain how we have achieved it using [uWSGI Zerg Mode](http://uwsgi-docs.readthedocs.org/en/latest/articles/TheArtOfGracefulReloading.html#zerg-mode) for our
[Crowdcrafting](http://crowdcrafting.org) servers.

<!--more-->

In a previous post I've already said that I love [uWSGI](http://uwsgi-docs.readthedocs.org/).
The main reason? You can do lots of nice tricks in your stack without having to add other
layers to it, like for example: **graceful reloading**.

The documentation from uWSGI is really great, and it covers most of the cases for graceful
reloading, however due to our current [stack](/blog/2015/02/10/infrastructure.html) and our [auto deployments solution](/blog/2015/02/25/autodeployments.html)
we needed something that integrated well with the so called: [Zerg dance](http://uwsgi-docs.readthedocs.org/en/latest/articles/TheArtOfGracefulReloading.html#the-zerg-dance-pausing-instances).

## Zerg Mode

The Zerg mode is a nice feature from uWSGI that allows you to run your web application passing
file descriptors over Unix sockets. As stated on the [official docs](http://uwsgi-docs.readthedocs.org/en/latest/articles/TheArtOfGracefulReloading.html#zerg-mode):

*Zerg mode works by making use of the venerable “fd passing over Unix sockets” technique.*

*Basically, an external process (the zerg server/pool) binds to the various sockets required by your app. Your uWSGI instance, instead of binding by itself, asks the zerg server/pool to pass it the file descriptor. This means multiple unrelated instances can ask for the same file descriptors and work together.*


This is really great, as you only need to enable a Zerg server and then you are ready to use it.

As we use Supervisor, configuring uWSGI to run as a Zerg server is really simple:

{% highlight bash %}
[uwsgi]
master = true
zerg-pool = /tmp/zerg_pool_1:/tmp/zerg_master.sock
{% endhighlight %}

Then, you configure your web application to use the zerg server:

{% highlight bash %}
[uwsgi]
zerg = /tmp/zerg_master.sock
{% endhighlight %}

And you are done! That will configure your server to run in Zerg mode. However,
we can configure it to handle reloading in a more useful way: keeping a binary copy of
the previous running instance, pausing it, and deploying the new code on a new Zerg.
This is known as Zerg Dance, so let's dance!

<div class="embed-responsive embed-responsive-16by9">
<iframe src="//giphy.com/embed/GFBME4lzPVwxW" width="480" height="270" frameBorder="0" style="max-width: 100%" class="giphy-embed" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>

## Zerg Dance

With the Zerg dance we'll be able to do deployments while the users keep using your
web application, as the Zerg server will be always handling those requests properly.

The neat trick from uWSGI is that it will handle those requests pausing them, so the user
thinks it's getting slower, while the new deployment is taking place. As soon as the new
deployment is running it moves the "paused request" to the new code and keeps the old copy
in case you broke something. Nice, right?

To achieve this situation all you have to do is use 3 different FIFOs in uWSGI. Why?
Because uWSGI can have as many master FIFOs as you want allowing you to pause zerg servers
and move between them. This feature allows us to keep a binary copy of previously deployed code
on the server, that you can pause/resume and use it when something goes wrong.

This is really fast. The only issue is that you'll need more memory on your server, but I
think it's worthy as you'll be able to rollback a deployment with just two commands (we'll see
that in a moment).

### Configuring the 3 FIFOs

The documentation has a really good example. All you have to do is to add 3 FIFOs to
your web application uWSGI config file:

{% highlight bash %}
[uwsgi]
; fifo '0'
master-fifo = /var/run/new.fifo
; fifo '1'
master-fifo = /var/run/running.fifo
; fifo '2'
master-fifo = /var/run/sleeping.fifo
; attach to zerg
zerg = /var/run/pool1
; other options ...

; hooks

; destroy the currently sleeping instance
if-exists = /var/run/sleeping.fifo
  hook-accepting1-once = writefifo:/var/run/sleeping.fifo Q
endif =
; force the currently running instance to became sleeping (slot 2) and place it in pause mode
if-exists = /var/run/running.fifo
  hook-accepting1-once = writefifo:/var/run/running.fifo 2p
endif =
; force this instance to became the running one (slot 1)
hook-accepting1-once = writefifo:/var/run/new.fifo 1
{% endhighlight %}

After the FIFOs there is a section where we declare some hooks. These hooks will handle
automatically which FIFO has to be used in case of a server is started again.

The usual work flow will be the following:

 - You start the server.
 - There is not sleeping or running fifo, so those conditions fail
 - Therefore, once the server is ready to accept requests (thanks to hook-accepting1-once) it moves the server from the new.fifo to running.fifo

Right now you've a server running as before. Imagine now you have to change something in the config
or you have a new deployment. You do the changes, and start a new server with the same uWSGI config
file. This will happen:

 - You start the second server.
 - There is not sleeping fifo, so this condition fails
 - There is a running fifo, so this condition is met. Thus, the previous server is moved to the sleeping fifo and its paused when the new server is ready to accept requests.
 - Finally, once the server is ready to accept requests t moves the server from the new.fifo to running.fifo.

At this moment we've two servers: one running (the new one with your new code or config changes) and the old one
wich is paused consuming only some memory.

Imagine now you realize that you have a bug in your new deployed code. How do you recover from this situation? Simple!

You just pause the new server and unpause the previous one. How do you do it? Like this:

{% highlight bash %}
echo 1p > /tmp/running.fifo
echo 2p > /tmp/sleeping.fifo
{% endhighlight %}

## Our setup

With our [auto deployments](/blog/2015/02/25/autodeployments.html) solution, we needed to find a simple way to integrate
this feature with supervisor. In the previous example you do the deployment manually,
but we want to have everything automated.

How we have achieved this? Simple! Using two PYBOSSA servers within Supervisor.

We have the default PYBOSSA server, and another one named pybossabak in Supervisor.

When a new deployment is done, the auto deployments solution boots the pybossa Backup server
just to have a copy of the running state of the server. Then, it gets all the new changes,
applies patches, etc. and restarts the default server. This procedure triggers the following:

 - Start backup server: this moves the current running PYBOSSA server to the pause fifo, so we've a copy of it.
 - The backup server accepts the requests, so users don't see anything wrong.
 - Autodeployments applies changes to the source code, updates libraries, etc.
 - Then, it restarts the default PYBOSSA server (note: for supervisor the paused PYBOSSA server is running).
 - This restart moves the previous backup server to the pause fifo (it has the old code running), and boots the new code into production.

If something goes wrong with the new changes, all we have to do is pause the current server and resume the previous one.

This is done by hand, as we want to have control over this specific issue, but overall we are always covered
when doing deployments automatically. We only have to click in the Merge Button of Github to do a deployment
and we know a backup binary copy is hold on memory in case that we commit an error.

Moreover, the whole process of having uWSGI moving the requests of users from one server to another is great!

We've seen some users getting a 502, but that's because they ask for a request when the file descriptor is being
moved to the new server. Obviously, this is not 100% bullet proof, but much better than showing to *all* your users
a maintenance page while you do the upgrade.

We've been using this new work flow for a few weeks now, and all our production deployments
are done automatically. Since we adopted this approach we've not have any issues, and we are more
focused only on developing more code. We employ less time handling deployments, which is great!

In summary: if you are using uWSGI, use the Zerg Dance, and enjoy the dance!

<div class="embed-responsive embed-responsive-16by9">
<iframe src="//giphy.com/embed/2tDQZuljhwHTi" width="480" height="182" frameBorder="0" style="max-width: 100%" class="giphy-embed" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
