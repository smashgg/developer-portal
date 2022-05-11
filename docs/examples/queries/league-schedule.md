---
id: league-schedule
title: League Schedule
sidebar_label: League Schedule
---

In this example, we will query for events in a league.

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
query LeagueSchedule {
  league(slug: "tekken-world-tour-2019") {
    id
    name
    events(query: {
      page: 1,
      perPage: 10
    }) {
      pageInfo {
        totalPages
        total
      }
      nodes {
        id
        name
        startAt
        tournament {
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
      "events": {
        "pageInfo": {
          "totalPages": 116,
          "total": 1160
        },
        "nodes": [
          {
            "id": 337902,
            "name": "Tekken 7",
            "startAt": 1555738200,
            "tournament": {
              "id": 145599,
              "name": "Shanghai Tekken7 monthly April"
            }
          },
          {
            "id": 276106,
            "name": "3 / TGB - Tekken 7 - TWT Master",
            "startAt": 1555747200,
            "tournament": {
              "id": 119868,
              "name": "The MIXUP 2019"
            }
          },
          {
            "id": 302304,
            "name": "Tekken 7",
            "startAt": 1555776000,
            "tournament": {
              "id": 131512,
              "name": "Mid-South Championships 2019"
            }
          },
          {
            "id": 327515,
            "name": "Tekken 7 1v1 singles",
            "startAt": 1555790400,
            "tournament": {
              "id": 140893,
              "name": "F2con"
            }
          },
          {
            "id": 333458,
            "name": "Tekken 7",
            "startAt": 1555776000,
            "tournament": {
              "id": 143331,
              "name": "Juicy Monthly - April 20, 2019!"
            }
          },
          {
            "id": 334699,
            "name": "Tekken 7",
            "startAt": 1555765200,
            "tournament": {
              "id": 143951,
              "name": "Pixelpokal Spring 2019"
            }
          },
          {
            "id": 334743,
            "name": "Tekken 7 RtCT",
            "startAt": 1555758000,
            "tournament": {
              "id": 143995,
              "name": "MerseyBeats: The Road to Celtic Throwdown"
            }
          },
          {
            "id": 335442,
            "name": "Tekken 7",
            "startAt": 1555772400,
            "tournament": {
              "id": 144326,
              "name": "CMUken Championships"
            }
          },
          {
            "id": 337920,
            "name": "Tekken 7",
            "startAt": 1555810200,
            "tournament": {
              "id": 145607,
              "name": "Z-Axis (April)"
            }
          },
          {
            "id": 339604,
            "name": "Tekken 7",
            "startAt": 1555750800,
            "tournament": {
              "id": 146389,
              "name": "Kumautus"
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
