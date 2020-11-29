---
title: Auto-translating PYBOSSA using PYBOSSA
template: entry
date: 2015-06-08
slug: translating-pybossa
icon: lostintranslation
icon_author: Alfonso
icon_url: https://www.flickr.com/photos/tochis/3081093838/
tags: Crowdcrafting, PYBOSSA, translation
location: Madrid, Spain
meta_description: ""
headline: "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his own language, that goes to his heart. -Nelson Mandela."
layout: blog
---

How do you translate properly your product into different languages? More importantly, how do you do it involving your own community?

The answer is easy: using a crowdsourcing solution like PYBOSSA.

# Translating PYBOSSA using PYBOSSA

Since the creation of PYBOSSA, I've translated it to Spanish. Other languages, like French, were added by a volunteer. However, these translations usually
get outdated as PYBOSSA was updated with new strings. These solo efforts, usually end up in a translation that's not updated, and you end up with a mix of translated strings.

For these reasons we decided to eat our own dog food, and I created a [crowdsourcing
project](http://crowdcrafting.org/project/pybossaitalian) to translate PYBOSSA using PYBOSSA. Why? Because PYBOSSA uses the open
standard [Gettext](https://www.gnu.org/software/gettext/) for its translations, and each string could become a task in a
PYBOSSA project.

Also **I loved the idea that anyone, even without an account, can help in the translation.**
The current platforms usually need an account to just translate a few strings, and that's usually too much
for users who want to see the product they use in their own language. Obviously some
people will add fake translations, but that's not an issue as the crowd will help to clean the bad ones
and keep the best one.

As I started working on it, I realized this could be very useful not only for me and PYBOSSA
but also to anyone using the Gettext technology in their projects. Thus, I created a PYBOSSA template
[project](https://github.com/PYBOSSA/app-translations) that anyone can re-use and adapt today to translate their own projects.


# The Translation Template Project

The template can be used in any PYBOSSA server, so if you don't have one, don't
hesitate and go to [Crowdcrafting](http://crowdcrafting.org) to create an account and
start using it.

The [ translation template ](https://github.com/PYBOSSA/app-translations) is very simple. It has been designed to have two phases:

* The Translation: 3 people translate the same string.
* The Voting: 5 people vote for the best translation of the 3 translations.

The most voted, it's the one that it's going to be used as the final translated one.

As you can see the community of your project would be involved in translating but also
in selecting the best translation for them. This will ensure that your audience will
have a better understanding about the text you write, leading to better results in engagement.

## 1. The Translation phase

The first thing you need to do is to download the template. Then, install the required
tools (see the [README](https://github.com/PYBOSSA/app-translations) file for more information), and you will be ready to start translating
your project.

Then, all you have to do is get your PO file (it's a text file with the string
to get translated from for example English to Spanish). Once you have it, you will pass it
to [PBS](https://github.com/PYBOSSA/pbs) -our PYBOSSA command line tool- that will
convert untranslated strings to tasks for your PYBOSSA project:

```
pbs add_tasks --task-file=messages.pot --tasks-type=po --redundancy=3
```

This will add the untranslated strings as tasks to your PYBOSSA project. Each string will be shown to 3 different people, so you get
3 translation for your own project. You can increase or reduce it as much as you want. It's up to you to decide.

When all the strings have been translated, you can move to the next phase if you want: the voting phase.

## 2. The Voting phase
In this phase, the 3 previous translations will be shown to people and they'll select
the best one for them. The most voted one will be the final translation for that string.

How do you move from one phase to the next one? As simple as this. First we create the voting project:

```bash
pbs --project project_voting.json create_project
pbs --project project_voting.json update_project
```

Secondly, we get the translated strings and pass them to the new voting project:

```bash
python vote.py
pbs --project project_voting.json add_tasks --task-file=/tmp/translations_voting_tasks.json --redundancy=5
```

Then, 5 people will vote on which is the best translation. When all the strings have
been curated by your community, in other words when the project is completed, all you
have to do to create the final translation file is running the following command:

```bash
python create_mo.py
```

Copy the new created file into your translations project, and you'll be done! As simple as that.

## Firefox extensions

Yes, PYBOSSA also supports Firefox extensions. Thus, if you are writing a Firefox
extension and you want to translate it to different languages, you can use
PYBOSSA too. It's pretty similar and you have all the documentation about it
[here](https://github.com/PYBOSSA/app-translations).


# Summary

With our PYBOSSA translation template anyone can translate their open source project
with their community, involving them not only in the translation but also curating which
is the best translation for every string.

Thus, don't get lost in translation anymore!

<div class="embed-responsive embed-responsive-16by9">
<video autoplay loop>
<source src="http://media.giphy.com/media/ZCnP8OtmVRbPi/giphy.mp4">
</video>
</div>
