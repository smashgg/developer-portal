---
id: sets-in-event
title: Sets in Event
---

In this example we will get the sets in an event.

## Example #1 (All Sets in Event)

To get all sets, don't pass any filters to the sets query.
Instead, just iterate over the the pages as necessary.

<!--DOCUSAURUS_CODE_TABS-->
<!--Request-->

```GraphQL
query EventSets($eventId:Int!){
  event(id:$eventId){
    id
    sets(
      page: 1
      perPage: 3
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
  "eventId":261856
}
```

<!--Response-->

```json
{
  "data": {
    "event": {
      "id": 261856,
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
  "actionRecords": [],
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
