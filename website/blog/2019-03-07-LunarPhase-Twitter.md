---
author: Mitchell "furtive" Morley
authorURL: https://twitter.com/furtive_raccoon
authorImageURL: https://imgur.com/HgkWbZt.png
title: Lunar Phase Event Results Tweets
sidebar_label: Lunar Phase Event Results Tweets
---

![tweet example](https://imgur.com/VXJMb0a.png)

Lunar Phase, a tournament-organizing and broadcast team based out of New York City, have
automated their workflow for creating post-event results tweets with an
<a href="https://github.com/lunar-phase/smashgg-results" target="_blank">open-source solution</a>
powered by the smash.gg public API.

<!--truncate-->

I spoke to <a href="https://twitter.com/gramofdata" target="_blank">Datagram</a>,
who authored their automated process, to learn about what inspired them to build it.

## Tell me a quick bit about yourself

_My name's Adrian Mullings, aka Datagram, and I'm co-founder and technical director for
<a href="https://twitter.com/LunarPhaseProd" target="_blank">Lunar Phase</a>.
We're a NYC-based team that hosts several tournaments a month for a wide variety of fighting games, with our
primary game being Under Night In-Birth._

## So what were you doing before you automated these kinds of tweets?

_Back when our events were smaller and we didn't run as many games it was easy and fun to make tournament
result tweets, but as everything except our team size got bigger we found ourselves not having enough time
to dedicate to it.
I figured if we were going to keep making result tweets, we needed to find a way to automate it._

## So you went to work, and it looks like you got it done

_The fruit of my efforts was a pretty simple script that, given a tournament, grabs tags and twitter handles
for the finalists and spits out a summary for each event.
There are improvements that can be made, but for now it gets the job done and saves us a good deal of time._

**<a href="https://github.com/lunar-phase/smashgg-results" target="_blank">(view the source code on GitHub)</a>**

## How was your experience working with the smash.gg public API?

_Working with the new smash.gg API has been fantastic!
This was my first experience using GraphQL, but their API explorer made it really easy to find my way around
the API and try things out even before I had settled on a library to use for my implementation.
The API is still under development, but smash.gg staff have been impressively quick at responding to and implementing requests._

---

This project is a great example of how to add value to your events by automating appropriate tasks.
If you're interested in using event standings for a project, I recommend checking out the
[Event Standings doc](/docs/examples/queries/event-standings)!
