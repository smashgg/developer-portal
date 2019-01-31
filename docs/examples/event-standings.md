---
id: event-standings
title: Event Standings
---

In this example, we will query for the standings of the Melee Singles event at Shine 2018.
To be specific, we will query for just the **standing**
and **name** of the **top 3 placements** (note the variables!)

## Example #1 (basic)

<!--DOCUSAURUS_CODE_TABS-->
<!--Request-->

```graphql
query EventStandings($eventId: Int!, $page: Int!, $perPage: Int!) {
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
},
{
  "eventId": 78790,
  "page": 1,
  "perPage": 3
}
```

<!--Response-->

```json
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

<!--END_DOCUSAURUS_CODE_TABS-->

You can choose your own names for these variables! In the query above...

- *eventId* is the ID of the event we're getting standings for
- *page* is the page of standings we have specified to retrieve (page 1 starts with 1st place)
- *perPage* is the number of standings we are retrieving on that page

**Don't forget to explore schema, and test queries, in the [API Explorer](/explorer)!**

## Example #2 (Race Format)

Race format is a bit of an exception to standings queries at the moment.
If you don't know what race format is, then don't worry about this!

<!--DOCUSAURUS_CODE_TABS-->
<!--Request-->

```graphql
query EventStandings($eventId: Int!) {
  event(id:$eventId) {
    id
    name
    phaseGroups {
      id
      seeds {
        id
        standings(containerType: "groups") {
          id
          metadata
        }
      }
    }
  }
},
{
  "eventId": 249917
}
```

<!--Response-->

```json
{
  "data": {
    "event": {
      "id": 249917,
      "name": "Kill Race!",
      "phaseGroups": [
        {
          "id": 793662,
          "seeds": [
            {
              "id": 8076251,
              "standings": [
                {
                  "id": "4467977",
                  "metadata": {
                    "verifiedProgress": {
                      "kills": 34
                    },
                    "unverifiedProgress": {
                      "kills": 0
                    }
                  }
                }
              ]
            },
            {
              "id": 8076254,
              "standings": null
            }
          ]
        }
      ]
    }
  },
  "actionRecords": []
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
