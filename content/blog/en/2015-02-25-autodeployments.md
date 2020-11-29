---
title: Autodeployments
template: entry
slug: autodeployments
date: 2015-02-25
icon: robot
icon_author: Daniel Lombraña González
icon_url: https://www.flickr.com/teleyinex
tags: Crowdcrafting, architecture, infrastructure
location: Madrid, Spain
meta_description: "Whether we are based on carbon or on silicon makes no fundamental difference; we should each be treated with appropriate respect. Arthur C. Clarke"
headline: "Whether we are based on carbon or on silicon makes no fundamental difference; we should each be treated with appropriate respect. Arthur C. Clarke"
layout: blog
---

At Crowdcrafting we take really seriously shipping code. For this reason, we've
created a very simple web service (it's our own software robot) that automatically
deploys for us any Github project with Ansible playbooks and posts the status of
the deployment in our Slack chat channel.

<!--more-->

## Why another deployment server?

A fairly good question. We checked different options like HUBot, however using
the service meant to add extra layers to our [current stack](http://daniellombrana.es/blog/2015/02/10/infrastructure.html). In the case of HUBot
we would have to install Node.js and learn coffee script to write our own
plugins. IMHO too much work for just doing some deployments, plus we will add a
stack to our infrastructure that we do not fully know.

For these reasons we decided to create something very simple that uses the
[Github API for
deployments](https://developer.github.com/v3/repos/deployments/) and integrated
with [Ansible](http://www.ansible.com/home) (we use it for managing
our own infrastructure) as well as with [Slack](http://slack.com) to follow the status of the
deployments.

The server uses the [Flask framework](http://flask.pocoo.org/) and we can host it in our current
infrastructure without adding any extra layer.

## Our deployments solution (or our robot)

[The web server](https://github.com/PYBOSSA/deployments) has less than 250 lines of
code. It's 100% tested, covered and with a code health quality of 100% according to
Landscape.io. Oh, it's also open source!

The server uses a config file to specify which repositories from Github have to
be deployed. The structure is quite simple:

```
DEBUG = False
SECRET = 'yoursecret-to-protect-your-server'
TOKEN = 'your-github-token'
SLACK_WEBHOOK = 'yourslackwebhook'
REPOS = {
    'user/repo': {'folder': '/repo',
                  'required_contexts': ["continuous-integration/travis-ci"],
                  'commands': [['git', 'fetch'],
                               ['git', 'pull', 'origin', 'master']]}
}
```

A very handy feature is that you can specify in the config file if you want to
only do a deployment when for example your continuous integration tests are passing. This is
optional, but you are already testing your software, right?

### Ansible integration

In the previous example you can add as many commands as you want. However,
if you are already using Ansible playbooks all you have to do to use them with
the server is this:

```
DEBUG = False
SECRET = 'yoursecret-to-protect-your-server'
TOKEN = 'your-github-token'
SLACK_WEBHOOK = 'yourslackwebhook'
REPOS = {
    'user/repo': {'ansible_hosts': 'hosts_file',
                  'ansible_playbook': 'playbook.yml',
                  'required_contexts': ["continuous-integration/travis-ci"],
}
```
Thanks to Ansible you can deploy the same software in different machines,
something very handy when you have project with several nodes running the
same stack as we do.


### Slack notifications

In order to get Slack notifications, all you have to do is to add a new
integration in your Slack team: [incoming webhooks](https://api.slack.com/incoming-webhooks). This integration will give
you a URL that you only have to copy and paste into the config file. Once you
have done it the server will post messages about the status of
the deployment. The messages are like this:

![Deployment screenshot](/assets/img/blog/deployments.png){: .img-responsive}

The message includes the following information:

* the repository that has been deployed,
* the user that has done the deployment,
* the status of the deployment.

The status is pretty handy because if something goes badly, you can debug what
happened as we store the error messages in the Github API, so you can review
them.

Best part: the robot communicates his work!

### Doing deployments

How do you actually do deployments? Well, we just wanted to make it very simple
like clicking a single button.

Our solution? When a branch with fixes or a new feature in Github is merged
into the master branch, the service will deploy the changes into production
(or the machines that you want). As simple as that! The system takes care of
itself! Batteries included!!

![BMO gif changing its batteries](http://i.giphy.com/AMqCTHuCMFpM4.gif){: .img-responsive}

Thanks to this solution now every member of my team can actually do deployments
into production. This has been a significant change in our work flow as
everyone can deploy changes into production ([trust your team](http://daniellombrana.es/blog/2015/02/06/teams.html)), and you don't have to ask a favor to
do a deployment. You just simply click a button!
