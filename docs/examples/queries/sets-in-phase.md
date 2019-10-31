---
id: sets-in-phase
title: Sets in Phase
---

In this example we will get the sets in a specific phase.
Here I have selected the "Finals" phase for the Slap City Singles event at Genesis 6.

## Example #1 (All Sets in Event)

To get all sets, don't pass any filters to the sets query.
Instead, just iterate over the the pages as necessary.
You can use a much larger `perPage` here- it is kept small in the example for demo purposes.

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
query PhaseSets($phaseId: ID!, $page: Int!, $perPage: Int!) {
  phase(id: $phaseId) {
    id
    name
    sets(
      page: $page
      perPage: $perPage
      sortType: STANDARD
    ){
      pageInfo {
        total
      }
      nodes {
        id
        slots {
          id
          entrant {
            id
            name
          }
        }
      }
    }
  }
},
{
  "phaseId":517325,
  "page": 1,
  "perPage": 3
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "phase": {
      "id": 517325,
      "name": "Finals",
      "sets": {
        "pageInfo": {
          "total": 15
        },
        "nodes": [
          {
            "id": "18368672",
            "slots": [
              {
                "id": "18368672-0",
                "entrant": {
                  "id": 2401411,
                  "name": "Fumbles"
                }
              },
              {
                "id": "18368672-1",
                "entrant": {
                  "id": 2431907,
                  "name": "PikaThePikachu"
                }
              }
            ]
          },
          {
            "id": "18368673",
            "slots": [
              {
                "id": "18368673-0",
                "entrant": {
                  "id": 2431907,
                  "name": "PikaThePikachu"
                }
              },
              {
                "id": "18368673-1",
                "entrant": {
                  "id": 2401411,
                  "name": "Fumbles"
                }
              }
            ]
          },
          {
            "id": "18368671",
            "slots": [
              {
                "id": "18368671-0",
                "entrant": {
                  "id": 2431907,
                  "name": "PikaThePikachu"
                }
              },
              {
                "id": "18368671-1",
                "entrant": {
                  "id": 2401411,
                  "name": "Fumbles"
                }
              }
            ]
          }
        ]
      }
    }
  },
  "extensions": {
    "queryComplexity": 13
  },
  "actionRecords": []
}
```

</TabItem>
</Tabs>
