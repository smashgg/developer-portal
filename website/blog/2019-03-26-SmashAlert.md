---
author: Mitchell "furtive" Morley
authorURL: https://twitter.com/furtive_raccoon
authorImageURL: https://imgur.com/HgkWbZt.png
title: 'Smash Alert: Alerts for new French Smash Tournaments'
sidebar_label: Smash Alert
---

![ss of Twitter account](https://imgur.com/U6htypD.png)

<a href="https://twitter.com/alert_smash" target="_blank">Smash Alert</a> is a Twitter account that automatically
tweets out new tournaments in France for Super Smash Bros. Melee and Super Smash Bros. Ultimate.

<!--truncate-->

Smash Alert was created by <a href="https://twitter.com/PeterPunk___" target="_blank">Sam 'PeterPunk' Ettahiri</a>.
I quickly spoke to Sam to learn more about the project!

## Tell me a little bit about yourself

_I'm Sam, 26 years old, and I'm the CTO of <a href="https://capsens.eu/" target="_blank">CapSens</a>, a Ruby on Rails
Web and Mobile Agency based in Paris.
In my free time I play drums in a Metal Band and I play Smash._

## Why did you build Alert Smash?

_I joined the Parisian Smash community only 4 months ago, when I discovered Super Smash Bros. Ultimate and the tournaments for it.
Recently I had trouble registering for a tournament-
I was always late since Parisian tournament got full in less than an hour and I'm always working when the tournament announcements
go out :(_

_So I decided to make a bot that sends me text message when a new tournament is published.
First I showed it to my team mates and they asked me to send a message to our Discord so that they could register, too.
After a few weeks, every French Discord Admin asked me to put my bot on their Discord.
So I decided to create a Twitter bot.
That way, all of the French Smash community can benefit from my work._

## How does it work?

_It's very simple.
It's a script how runs on a crontab.
Every 10 minutes, it gets all the upcoming smash tournaments in France and sends a tweet.
Once the tweet is sent, I store the tournament ID in a DB so I don't tweet twice about the same tournament._

## How did you like working with the new API?

_It's pretty funny.
I always wanted to learn GraphQL and thanks to Smash.gg I got a opportunity to test it.
At the beginning it was confusing but once you get it, it's a pleasure to work with.
For an alpha it's pretty well documented and even a complete beginner with GraphQL is able to make something out of it._

## Are you looking for contributors?

_Since it's a dead simple script, I won't work on it anymore (except if the API changes).
So I don't need contributors :p_

## What are you looking to build next?

_Actually I'm working on a seeding tool for TOs.
Since Ultimate brought a lot of new players, seeding became complicated.
So I'm making a tool that ranks every French smash.gg player to help TOs in their seeding._
