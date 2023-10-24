---
id: videogame-id-by-name
title: Get Game ID from Videogame Name
---

In this example, we show how to get a videogame ID from a videogame's name.

This allows you to easily filter tournaments by their videogame and other game-specific operations.

If your game is not showing up, please try a less specific parameter. If you have too many games showing up, try something more specific.

You cannot filter by `displayName`, but `displayName` may help with some disimbiguation when needed.

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
query VideogameQuery {
  videogames(query: { filter: { name: "Super Smash Bros" }, perPage: 5 }) {
    nodes {
      id
      name
      displayName
    }
  }
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "videogames": {
      "nodes": [
        {
          "id": 1386,
          "name": "Super Smash Bros. Ultimate",
          "displayName": "Ultimate"
        },
        {
          "id": 1,
          "name": "Super Smash Bros. Melee",
          "displayName": "Melee"
        },
        {
          "id": 3,
          "name": "Super Smash Bros. for Wii U",
          "displayName": "Super Smash Bros. for Wii U"
        },
        {
          "id": 4,
          "name": "Super Smash Bros.",
          "displayName": "Super Smash Bros."
        },
        {
          "id": 5,
          "name": "Super Smash Bros. Brawl",
          "displayName": "Brawl"
        }
      ]
    }
  },
  "actionRecords": []
}
```

</TabItem>
</Tabs>
