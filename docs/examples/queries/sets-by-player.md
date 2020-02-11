---
id: sets-by-player
title: Sets by Player
sidebar_label: Sets by Player
---

In this example, we will query for sets involving a specific player.

## Example

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
query Sets {
  player(id: 1000) {
    id
    sets(perPage: 5, page: 10) {
      nodes {
        id
        displayScore
        event {
          id
          name
          tournament {
            id
            name
          }
        }
      }
    }
  }
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "player": {
      "id": 1000,
      "sets": {
        "nodes": [
          {
            "id": 6068546,
            "displayScore": "C9 | Mang0 3 - The Moon 2",
            "event": {
              "id": 12830,
              "name": "Melee Singles",
              "tournament": {
                "id": 1906,
                "name": "The Big House 6"
              }
            }
          },
          {
            "id": 6068541,
            "displayScore": "C9 | Mang0 3 - SPY | Nintendude 1",
            "event": {
              "id": 12830,
              "name": "Melee Singles",
              "tournament": {
                "id": 1906,
                "name": "The Big House 6"
              }
            }
          },
          {
            "id": 6068531,
            "displayScore": "C9 | Mang0 2 - MikeHaze 0",
            "event": {
              "id": 12830,
              "name": "Melee Singles",
              "tournament": {
                "id": 1906,
                "name": "The Big House 6"
              }
            }
          },
          {
            "id": 4950622,
            "displayScore": "C9 | Mang0 2 - The Moon 0",
            "event": {
              "id": 12232,
              "name": "Melee Singles",
              "tournament": {
                "id": 1624,
                "name": "Clutch City Clash - Powered by Xyience"
              }
            }
          },
          {
            "id": 4623379,
            "displayScore": "COG | Wizzrobe 2 - C9 | Mang0 3",
            "event": {
              "id": 10949,
              "name": "Melee Singles",
              "tournament": {
                "id": 1405,
                "name": "WTFox 2"
              }
            }
          }
        ]
      }
    }
  }
}
```

</TabItem>
</Tabs>
