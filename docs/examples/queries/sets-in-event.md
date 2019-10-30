---
id: sets-in-event
title: Sets in Event
---

In this example we will get the sets in an event.
Here I have selected the Slap City Singles event at Genesis 6.

## Example #1 (All Sets in Event)

To get all sets, don't pass any filters to the sets query.
Instead, just iterate over the the pages as necessary.
You can use a much larger `perPage` here- it is kept small in the example for demo purposes.

<!--DOCUSAURUS_CODE_TABS-->
<!--Request-->

```GraphQL
query EventSets($eventId: ID!, $page: Int!, $perPage: Int!) {
  event(id: $eventId) {
    id
    name
    sets(
      page: $page
      perPage: $perPage
      sortType: STANDARD
    ) {
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
  "eventId":261856,
  "page": 1,
  "perPage": 3
}
```

<!--Response-->

```json
{
  "data": {
    "event": {
      "id": 261856,
      "name": "Slap City Singles",
      "sets": {
        "pageInfo": {
          "total": 93
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

<!--END_DOCUSAURUS_CODE_TABS-->
