---
id: phase-groups-in-phase
title: Phase Groups in Phase
---

In this example, we will query for the phase groups (aka 'pools') in a phase.
I have decided to query for the phase groups in the "R1 Pools" Phase of Genesis 6.

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

```gql
query PhaseGroupsByPhase($phaseId: ID!,$page:Int!,$perPage:Int!){
  phase(id:$phaseId){
    phaseGroups(query: {
      page:$page
      perPage:$perPage
    }) {
      pageInfo{
        total
      }
      nodes{
        id
        displayIdentifier
      }
    }
  }
},
{
  "phaseId":266435,
  "page": 1,
  "perPage": 5
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "phase": {
      "phaseGroups": {
        "pageInfo": {
          "total": 64
        },
        "nodes": [
          {
            "id": 698217,
            "displayIdentifier": "A1"
          },
          {
            "id": 698266,
            "displayIdentifier": "A2"
          },
          {
            "id": 698227,
            "displayIdentifier": "A3"
          },
          {
            "id": 698223,
            "displayIdentifier": "A4"
          },
          {
            "id": 698243,
            "displayIdentifier": "A5"
          }
        ]
      }
    }
  },
  "extensions": {
    "queryComplexity": 1
  },
  "actionRecords": []
}
```

</TabItem>
</Tabs>
