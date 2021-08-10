---
id: league-standings
title: League Standings
sidebar_label: League Standings
---

In this example, we will query for the standings of a league.

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
query LeagueStandings {
  league(slug: "tekken-world-tour-2019") {
    id
    name
    standings (query: {
      page: 1,
      perPage: 10
    }) {
      pageInfo {
        totalPages
        total
      }
      nodes {
        id
        placement
        player {
          id
          gamerTag
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
    "league": {
      "id": 138858,
      "name": "TEKKEN World Tour 2019",
      "standings": {
        "pageInfo": {
          "totalPages": 2091,
          "total": 20903
        },
        "nodes": [
          {
            "id": 9023904,
            "placement": 1,
            "player": {
              "id": 415882,
              "gamerTag": "Knee"
            }
          },
          {
            "id": 9039466,
            "placement": 2,
            "player": {
              "id": 135159,
              "gamerTag": "Anakin"
            }
          },
          {
            "id": 9022193,
            "placement": 3,
            "player": {
              "id": 529161,
              "gamerTag": "LowHigh"
            }
          },
          {
            "id": 9616190,
            "placement": 4,
            "player": {
              "id": 492169,
              "gamerTag": "JDCR"
            }
          },
          {
            "id": 9023903,
            "placement": 5,
            "player": {
              "id": 1156544,
              "gamerTag": "chikurin"
            }
          },
          {
            "id": 9282431,
            "placement": 6,
            "player": {
              "id": 304592,
              "gamerTag": "kkokkoma"
            }
          },
          {
            "id": 9027190,
            "placement": 7,
            "player": {
              "id": 519204,
              "gamerTag": "Super Akouma"
            }
          },
          {
            "id": 10745306,
            "placement": 8,
            "player": {
              "id": 768254,
              "gamerTag": "Arslan Ash"
            }
          },
          {
            "id": 12398528,
            "placement": 9,
            "player": {
              "id": 1258070,
              "gamerTag": "Awais Honey"
            }
          },
          {
            "id": 9024234,
            "placement": 10,
            "player": {
              "id": 543721,
              "gamerTag": "Rangchu"
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
