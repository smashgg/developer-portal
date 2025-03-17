---
id: get-phase-seeding
title: Phase Seeds
---

In this example, we will get the seeding for a given phase.
To adjust phase seeding, please see
[phase seeding mutation](/docs/e2e/update-phase-seeding).

## Example #1 (1v1)

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
query PhaseSeeds($phaseId: ID!, $page: Int!, $perPage: Int!) {
  phase(id:$phaseId) {
    id
    seeds(query: {
      page: $page
      perPage: $perPage
    }){
      pageInfo {
        total
        totalPages
      }
      nodes {
        id
        seedNum
        entrant {
          id
          participants {
            id
            gamerTag
          }
        }
      }
    }
  }
},
{
  "phaseId": 270520,
  "page": 1,
  "perPage": 2
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "phase": {
      "seeds": {
        "pageInfo": {
          "total": 2105,
          "totalPages": 1053
        },
        "nodes": [
          {
            "id": 8218278,
            "seedNum": 1,
            "entrant": {
              "participants": [
                {
                  "gamerTag": "Tweek"
                }
              ]
            }
          },
          {
            "id": 7368333,
            "seedNum": 2,
            "entrant": {
              "participants": [
                {
                  "gamerTag": "Nairo"
                }
              ]
            }
          }
        ]
      }
    }
  },
  "actionRecords": []
}
```

</TabItem>
</Tabs>

## Example #2 (Teams Event)

Note that if you are using a _teams_ event, then you will want to request the name of the entrant itself
(ie the team name).
The participants for the entrant will include all players on the roster.

<Tabs
defaultValue="graphql"
values={[
{ label: 'Request', value: 'graphql', },
{ label: 'Response', value: 'json', },
]
}>

<TabItem value="graphql">

```graphql
query PhaseSeeds($phaseId: ID!, $page: Int!, $perPage: Int!) {
  phase(id: $phaseId) {
    id
    seeds(query: {
      page: $page
      perPage: $perPage
    }) {
      pageInfo {
        total
        totalPages
      }
      nodes {
        id
        seedNum
        entrant {
          id
          name
          participants {
            id
            gamerTag
          }
        }
      }
    }
  }
},
{
  "phaseId": 125685,
  "page": 1,
  "perPage": 2
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "phase": {
      "seeds": {
        "pageInfo": {
          "total": 69,
          "totalPages": 35
        },
        "nodes": [
          {
            "id": 5091221,
            "seedNum": 2,
            "entrant": {
              "name": "Denial Esports",
              "participants": [
                {
                  "gamerTag": "CorruptedG"
                },
                {
                  "gamerTag": "JWismont"
                },
                {
                  "gamerTag": "Sadjunior"
                },
                {
                  "gamerTag": "Lethamyr"
                },
                {
                  "gamerTag": "Fireworks"
                }
              ]
            }
          },
          {
            "id": 5093109,
            "seedNum": 3,
            "entrant": {
              "name": "Selfless",
              "participants": [
                {
                  "gamerTag": "Plu'oh"
                },
                {
                  "gamerTag": "Dappur"
                },
                {
                  "gamerTag": "Watsupmiijo_24"
                }
              ]
            }
          }
        ]
      }
    }
  },
  "actionRecords": []
}
```

</TabItem>
</Tabs>
