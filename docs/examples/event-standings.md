---
id: event-standings
title: Event Standings
---

In this example, we will query for the standings of the Melee Singles event at Shine 2018. To be specific, we will query for just the **standing** and **name** of the **top 3 placements** (note the variables!)

## Basic Request

```
query EventStandings($eventId: Int, $page: Int, $perPage: Int) {
  event(id: $eventId) {
    name
    standings(query: {
      perPage: $perPage,
      page: $page
    }){
      nodes {
        standing
        entrant {
          name
        }
      }
    }
  }
}
```
(Request Variables!) 

```
{
  "eventId": 78790,
  "page": 1,
  "perPage": 3
}
```
You can choose your own names for these variables! In the query above...

- *eventId* is the ID of the event we're getting standings for
- *page* is the page of standings we have specified to retrieve (page 1 starts with 1st place)
- *perPage* is the number of standings we are retrieving on that page

**Don't forget to explore the schema in the graphiql explorer!**

## Response

```
{
  "data": {
    "event": {
      "id": 78790,
      "name": "Melee Singles",
      "standings": {
        "nodes": [
          {
            "standing": 1,
            "entrant": {
              "name": "PG | Zain"
            }
          },
          {
            "standing": 2,
            "entrant": {
              "name": "Liquid | Hungrybox"
            }
          },
          {
            "standing": 3,
            "entrant": {
              "name": "C9 | Mang0"
            }
          }
        ]
      }
    }
  },
  "actionRecords": []
}
```