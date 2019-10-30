---
id: event-entrants
title: Event Entrants
---

In this request, we will query for the entrants in a given event.
For my example, I'm using the Ultimate Singles event at Genesis 6.
This is a paginated query- I chose a small `perPage` value for the sake of space.

## Example

<!--DOCUSAURUS_CODE_TABS-->

<!--Request-->

```GraphQL
query EventEntrants($eventId: ID!, $page: Int!, $perPage: Int!) {
  event(id: $eventId) {
    name
    entrants(query: {
      page: $page
      perPage: $perPage
    }){
      pageInfo{
        total
        totalPages
      }
      nodes{
        id
        participants{
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

<!--Response-->

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

<!--END_DOCUSAURUS_CODE_TABS-->
