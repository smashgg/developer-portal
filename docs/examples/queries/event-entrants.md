---
id: event-entrants
title: Event Entrants
---

In this request, we will query for the entrants in a given event.
For my example, I'm using the Ultimate Singles event at Genesis 6.
This is a paginated query- I chose a small `perPage` value for the sake of space.

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
query EventEntrants($eventId: ID!, $page: Int!, $perPage: Int!) {
  event(id: $eventId) {
    id
    name
    entrants(query: {
      page: $page
      perPage: $perPage
    }) {
      pageInfo {
        total
        totalPages
      }
      nodes {
        id
        participants {
          id
          gamerTag
        }
      }
    }
  }
},
{
  "eventId": 121970,
  "page": 1,
  "perPage": 2
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "event": {
      "name": "Ultimate Singles",
      "entrants": {
        "pageInfo": {
          "total": 2109,
          "totalPages": 1055
        },
        "nodes": [
          {
            "id": 2310317,
            "participants": [
              {
                "gamerTag": "Tweek"
              }
            ]
          },
          {
            "id": 2309851,
            "participants": [
              {
                "gamerTag": "Cosmos"
              }
            ]
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
