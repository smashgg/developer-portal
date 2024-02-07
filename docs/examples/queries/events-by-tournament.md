---
id: events-by-tournament
title: Events in Tournament
---

In these examples, we'll get specific events from a tournament. This can be extremely useful to empower event-specific queries by getting the specific event IDs that you want. 

## Example 1: Get All Events

This exmaple gets all events in a provided Tournament slug and returns back the ID of those Events and the Name. The Name is given by the tournament creator - so does not necessarily represent the game being played in that event, but the title of the event itself. IE: It could return "Melee Singles" instead of "Super Smash Brothers Melee Singles" or any other guaranteed format of data. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="graphql"
values={[
{ label: 'Request', value: 'graphql', },
{ label: 'Response', value: 'json', },
]
}>

<TabItem value="graphql">

```graphql
query TournamentEvents($tourneySlug:String!) {
  tournament(slug: $tourneySlug) {
    id
    name
    events {
      id
      name
    }
  }
},
{
  "tourneySlug":"genesis-x"
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "tournament": {
      "id": 517161,
      "name": "GENESIS X",
      "events": [
        {
          "id": 985241,
          "name": "Melee Singles"
        },
        {
          "id": 985242,
          "name": "Ultimate Singles"
        },
        {
          "id": 985251,
          "name": "Street Fighter 6"
        },
        {
          "id": 985245,
          "name": "Melee Doubles"
        },
        {
          "id": 1019838,
          "name": "Rivals 2 Singles"
        },
        {
          "id": 1006420,
          "name": "Ultimate Doubles"
        },
        {
          "id": 985250,
          "name": "Guilty Gear Strive"
        },
        {
          "id": 985252,
          "name": "Tekken 8"
        },
        {
          "id": 1017257,
          "name": "Nick All-Star Brawl 2 Singles"
        },
        {
          "id": 1041368,
          "name": "Granblue Fantasy Versus: Rising"
        },
        {
          "id": 1041364,
          "name": "Brawl Singles"
        },
        {
          "id": 1041367,
          "name": "Under Night In-Birth II Sys:Celes"
        },
        {
          "id": 985249,
          "name": "Rivals of Aether Workshop"
        },
        {
          "id": 985248,
          "name": "Rivals of Aether Doubles"
        },
        {
          "id": 1002081,
          "name": "Splatoon 3"
        },
        {
          "id": 1053185,
          "name": "Pump It Up Freestyle"
        },
        {
          "id": 985247,
          "name": "Rivals of Aether Singles"
        },
        {
          "id": 1005518,
          "name": "DDR A20 PLUS"
        },
        {
          "id": 1002085,
          "name": "Classic Tetris"
        },
        {
          "id": 1005520,
          "name": "DDR Extreme"
        },
        {
          "id": 1044327,
          "name": "Guilty Gear Xrd REV2"
        },
        {
          "id": 1005710,
          "name": "Pump It Up Speed"
        },
        {
          "id": 1002637,
          "name": "Capcom vs SNK 2"
        },
        {
          "id": 1002634,
          "name": "Super Turbo"
        },
        {
          "id": 1006118,
          "name": "maimai DX FESTiVAL"
        },
        {
          "id": 1002633,
          "name": "Magical Drop 3"
        },
        {
          "id": 1002639,
          "name": "SSB64 Doubles"
        },
        {
          "id": 1002638,
          "name": "SSB64 Singles"
        },
        {
          "id": 1005519,
          "name": "DDR A20 PLUS Freestyle"
        }
      ]
    }
  },
  "extensions": {
    "queryComplexity": 30
  },
  "actionRecords": []
}
```
</TabItem>
</Tabs>

## Example 2: Get Events in Tournament by Game

This example gets all events within a given tournament by videogame ID (or ID's).

<Tabs
defaultValue="graphql"
values={[
{ label: 'Request', value: 'graphql', },
{ label: 'Response', value: 'json', },
]
}>

<TabItem value="graphql">

```graphql
query TournamentEvents($tourneySlug:String, $videogameId:[ID]!) {
  tournament(slug: $tourneySlug) {
    id
    name
    events(filter:{videogameId: $videogameId}) {
      id
      name
    }
  }
},
{
  "tourneySlug":"genesis-x",
  "videogameId":[1]
}
```
</TabItem>

<TabItem value="json">
```json
{
  "data": {
    "tournament": {
      "id": 517161,
      "name": "GENESIS X",
      "events": [
        {
          "id": 985241,
          "name": "Melee Singles"
        },
        {
          "id": 985245,
          "name": "Melee Doubles"
        }
      ]
    }
  },
  "extensions": {
    "queryComplexity": 3
  },
  "actionRecords": []
}}
```
</TabItem>
</Tabs>