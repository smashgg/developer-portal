---
id: tournaments-by-videogame
title: Tournaments by Videogame
---

In this example, we will query for upcoming tournaments filtered to particular videogames and in ascending order for their start date/time.
In others words, "Give me the next _x_ upcoming tournaments for _Videogame(s)_."
The first example will be for a single videogame,
and the second example will be for an array of videogames.

You can find the ID for a given game via the instructions in the [get game id by name example query](/docs/examples/queries/videogame-id-by-name).

## Example #1 (Single Videogame)

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
query TournamentsByVideogame($perPage: Int!, $videogameId: ID!) {
  tournaments(query: {
    perPage: $perPage
    page: 1
    sortBy: "tournament.startAt asc"
    filter: {
      past: false
      videogameIds: [
        $videogameId
      ]
    }
  }) {
    nodes {
      id
      name
      slug
    }
  }
},
{
  "perPage": 3,
  "videogameId": 287
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "tournaments": {
      "nodes": [
        {
          "id": 107492,
          "name": "Mile High Fight Night 1 at Mile High Spirits, Denver",
          "slug": "tournament/mile-high-fight-night-1-at-mile-high-spirits-denver"
        },
        {
          "id": 112600,
          "name": "TNT #57 - SC6, DBFZ, SFV",
          "slug": "tournament/tnt-57-sc6-dbfz-sfv"
        },
        {
          "id": 113248,
          "name": "SUPER Dropkick Tuesdays, 11-20-18",
          "slug": "tournament/super-dropkick-tuesdays-11-20-18"
        }
      ]
    }
  },
  "actionRecords": []
}
```

</TabItem>
</Tabs>

## Example #2 (Array of Videogames)

<Tabs
defaultValue="graphql"
values={[
{ label: 'Request', value: 'graphql', },
{ label: 'Response', value: 'json', },
]
}>
<TabItem value="graphql">

```graphql
query TournamentsByVideogames($perPage: Int, $videogameIds: [ID]) {
  tournaments(query: {
    perPage: $perPage
    page: 1
    sortBy: "tournament.startAt asc"
    filter: {
      upcoming: true
      videogameIds: $videogameIds
    }
  }) {
    nodes {
      id
      name
      slug
    }
  }
},
{
  "perPage": 3,
  "videogameIds": [15, 24]
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "tournaments": {
      "nodes": [
        {
          "id": 112724,
          "name": "No Pause Weekly 11/19/18",
          "slug": "tournament/no-pause-weekly-11-19-18"
        },
        {
          "id": 103670,
          "name": "FEAST OF FIGHTING - Brawlhalla 1v1 Thanksgiving Tourney!",
          "slug": "tournament/feast-of-fighting-brawlhalla-1v1-thanksgiving-tourney"
        },
        {
          "id": 110747,
          "name": "BrawlhallaMEC Nasr Esports Community Cup Qualifiers",
          "slug": "tournament/brawlhallamec-nasr-esports-community-cup-qualifiers"
        }
      ]
    }
  },
  "actionRecords": []
}
```

</TabItem>
</Tabs>
