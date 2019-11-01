---
id: sets-in-phase-group
title: Sets in Phase Group
---

In this example we will get the sets in a specific phase group.
Here I have selected the phase group (pool) "G1" for the Slap City Singles event at Genesis 6.

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
query PhaseGroupSets($phaseGroupId: ID!, $page:Int!, $perPage:Int!){
  phaseGroup(id:$phaseGroupId){
    id
    displayIdentifier
    sets(
      page: $page
      perPage: $perPage
      sortType: STANDARD
    ){
      pageInfo{
        total
      }
      nodes{
        id
        slots{
          id
          entrant{
            id
            name
          }
        }
      }
    }
  }
},
{
  "phaseGroupId": 813313,
  "page": 1,
  "perPage": 3
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "phaseGroup": {
      "id": 813313,
      "displayIdentifier": "G1",
      "sets": {
        "pageInfo": {
          "total": 18
        },
        "nodes": [
          {
            "id": "18350706",
            "slots": [
              {
                "id": "18350706-0",
                "entrant": {
                  "id": 2431907,
                  "name": "PikaThePikachu"
                }
              },
              {
                "id": "18350706-1",
                "entrant": {
                  "id": 2393887,
                  "name": "Rambo"
                }
              }
            ]
          },
          {
            "id": "18350737",
            "slots": [
              {
                "id": "18350737-0",
                "entrant": {
                  "id": 2305450,
                  "name": "Miles"
                }
              },
              {
                "id": "18350737-1",
                "entrant": {
                  "id": 2474172,
                  "name": "PS | Bananas"
                }
              }
            ]
          },
          {
            "id": "18350704",
            "slots": [
              {
                "id": "18350704-0",
                "entrant": {
                  "id": 2431907,
                  "name": "PikaThePikachu"
                }
              },
              {
                "id": "18350704-1",
                "entrant": {
                  "id": 2435991,
                  "name": "CarmL!"
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
