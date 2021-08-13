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
        entrant {
          id
          name
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
          "totalPages": 194,
          "total": 1940
        },
        "nodes": [
          {
            "id": 32795085,
            "placement": 1,
            "entrant": {
              "id": 7838988,
              "name": "ROX Dragons | Knee"
            }
          },
          {
            "id": 32795157,
            "placement": 2,
            "entrant": {
              "id": 7838615,
              "name": "RB | Anakin"
            }
          },
          {
            "id": 32795041,
            "placement": 3,
            "entrant": {
              "id": 7839254,
              "name": "UYU | LowHigh"
            }
          },
          {
            "id": 32795747,
            "placement": 4,
            "entrant": {
              "id": 7839209,
              "name": "JDCR"
            }
          },
          {
            "id": 32795084,
            "placement": 5,
            "entrant": {
              "id": 7839910,
              "name": "THY | chikurin"
            }
          },
          {
            "id": 32795590,
            "placement": 6,
            "entrant": {
              "id": 7838776,
              "name": "Talon | kkokkoma"
            }
          },
          {
            "id": 32795099,
            "placement": 7,
            "entrant": {
              "id": 7839237,
              "name": "CRaZY | Super Akouma"
            }
          },
          {
            "id": 32796233,
            "placement": 8,
            "entrant": {
              "id": 7839602,
              "name": "VS| RB | Ash | Arslan Ash"
            }
          },
          {
            "id": 32796601,
            "placement": 9,
            "entrant": {
              "id": 7840143,
              "name": "GG | Awais Honey"
            }
          },
          {
            "id": 32795087,
            "placement": 10,
            "entrant": {
              "id": 7839282,
              "name": "Donuts USG | Rangchu"
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
