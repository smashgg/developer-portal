---
author: Mitchell "furtive" Morley
authorURL: https://twitter.com/furtive_raccoon
authorImageURL: https://imgur.com/HgkWbZt.png
title: smashgg.js - (Unofficial) NodeJS SDK
sidebar_label: smashgg.js
---

```js
const smashgg = require('smashgg.js')
const {Event} = smashgg

var meleeAtFunction = await Event.get('function-1-recursion-regional', 'melee-singles')
var functionSets = await meleeAtFunction.getSets()
console.log('Set count: ' + functionSets.length)
console.log('Set results: ' + functionSets.map(set => set.getDisplayScore() + '\n'))
```

<a href="https://www.npmjs.com/package/smashgg.js" target="_blank">smashgg.js</a> is an unofficial NodeJS SDK for the smash.gg public API.
It allows for ease of access to common API objects and aggregations so that developers can "spend less time digging through JSON or writing
 GQL queries, and more time getting their application up and running."

<!--truncate-->

I spoke to <a href="https://twitter.com/cookieissmashin" target="_blank">Brandon "cookiE" Cooke</a>, author of smashgg.js, to learn more about
 his background and why he built this!

## Tell me a bit about yourself

![cookiE image](https://imgur.com/LRNxjOB.jpg)

I am the co-founder, lead producer, and CTO of <a href="http://recursion.gg/" target="_blank">Recursion</a>, a professional Smash Bros
 streaming company out of Atlanta, Georgia.
I've been a member of Georgia's Melee scene dating back to 2015, and soon after that I began streaming for the community.
In 2016, this effort rebranded into Recursion and has been going strong ever since.

Outside of Smash, I am also a professional software engineer lead in Atlanta.
I graduated in Computer Science from Kennesaw State University in 2014.
Before that, I interned as a developer at a medium sized travel company called Travelport.
Since then, I have been employed at companies as large as AT&T to as small as a tech startup of 8 senior tech executives.
I have an extensive background in .NET served and served as a Senior developer in Nodejs and AWS technologies.
I am currently using my accrued skills to drive DevOps at my current company where I am the Lead DevOps Engineer.

I graduated in 2014 from Kennesaw State University and am approaching completion of my CS Masters at Georgia Tech.
I'm also is a father, a guitarist of 11 years, an exercise enthusiast, avid spectator of sports, and enjoy doing coding side projects when time
 allows.

## What was your inspiration for building smashgg.js?

smash.gg offers a vast array of rich information about tournaments.
This information is regularly harvested by developers for their applications; whether those apps automate certain aspects of tournament organizing
 or attempt to aggregate data about an event, devs are always interacting with the API.
In an attempt to make their life easier, I decided to create smashgg.js, a NodeJS-based SDK wrapping around the API.
This would offer to developers nicely named getter functions that abstracted out the monotony of digging through large amounts of JSON to find the data
 the developer wanted in the first place.
This simplicity and abstraction allows developers to stay on task, and get to what they were trying to do in the first place: code.

```js
require('colors');
const smashgg = require('smashgg.js');
const {Event} = smashgg;

smashgg.initialize('<your api key>');

(async function(){
    let tournamentSlug = 'function-1-recursion-regional';
    let eventSlug = 'melee-singles';
    let meleeAtFunction = await Event.get(tournamentSlug, eventSlug);

    let sets = await meleeAtFunction.getSets();
    let phaseGroups = await meleeAtFunction.getPhaseGroups();

    console.log('Function 1 had %s sets played in %s phase groups', 
        sets.length, phaseGroups.length);

    console.log('Set Results:')
    for(var i in sets){
        console.log(`${String(sets[i].getFullRoundText()).magenta}: ${String(sets[i].getDisplayScore()).green}`);
    }

    return true; // exit async
})()
```

![response](https://imgur.com/ZTqXJJj.png)

Why Node?
Other than Node being a very hot language in today's day-and-age, NodeJS handles JSON responses from the API seamlessly -- since at the end of the day it's
 JavaScript.
To me, it was a win-win because it would get more people involved in the world of NodeJS while at the same time give them the flexibility they would need to
 make their own API calls and manipulate JSON cleanly.

## Are you welcoming contributors? If so, anything in particular you'd like help with?

I am most certainly welcoming contributors.
As a working, parent-of-two grad student, carving out time to work on the SDK is a challenge to say the least.
If you find yourself competent in TypeScript/JavaScript, I would love any aid you wish to put forward.

<a href="https://github.com/BrandonCookeDev/smashgg.js/blob/master/README.md" target="_blank">Public repo on GitHub</a>
