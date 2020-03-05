---
id: event-standings
title: Event Standings
---

In this example, we will query for the standings of the Melee Singles event at Shine 2018.
To be specific, we will query for just the **standing**
and **name** of the **top 3 placements** (note the variables!)

## Example #1 (basic)

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
query EventStandings($eventId: ID!, $page: Int!, $perPage: Int!) {
  event(id: $eventId) {
    id
    name
    standings(query: {
      perPage: $perPage,
      page: $page
    }){
      nodes {
        placement
        entrant {
          id
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

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "event": {
      "id": 78790,
      "name": "Melee Singles",
      "standings": {
        "nodes": [
          {
            "placement": 1,
            "entrant": {
              "id": 1977436,
              "name": "PG | Zain"
            }
          },
          {
            "placement": 2,
            "entrant": {
              "id": 1947633,
              "name": "Liquid | Hungrybox"
            }
          },
          {
            "placement": 3,
            "entrant": {
              "id": 1966411,
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

</TabItem>
</Tabs>

You can choose your own names for these variables! In the query above...

- _eventId_ is the ID of the event we're getting standings for
- _page_ is the page of standings we have specified to retrieve (page 1 starts with 1st place)
- _perPage_ is the number of standings we are retrieving on that page

**Don't forget to explore schema, and test queries, in the [API Explorer](/explorer)!**

## Example #2 (Race Format)

Race format is a bit of an exception to standings queries at the moment.
If you don't know what race format is, then don't worry about this!

<Tabs
defaultValue="graphql"
values={[
{ label: 'Request', value: 'graphql', },
{ label: 'Response', value: 'json', },
]
}>
<TabItem value="graphql">

```graphql
query EventStandings($eventId: ID!) {
  event(id: $eventId) {
    id
    name
    phaseGroups {
      id
      seeds(query: {page: 1}) {
        nodes {
        	id
          standings(containerType: "groups") {
            id
            metadata
          }
        }
      }
    }
  }
},
{
  "eventId": 249917
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "event": {
      "id": 249917,
      "name": "Kill Race!",
      "phaseGroups": [
        {
          "id": 793662,
          "seeds": {
            "nodes": [
              {
                "id": 8076251,
                "standings": [
                  {
                    "id": 4467977,
                    "metadata": {
                      "verifiedProgress": {
                        "kills": 94
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
                "standings": [
                  {
                    "id": 5332860,
                    "metadata": {
                      "verifiedProgress": {
                        "kills": 6
                      },
                      "unverifiedProgress": {
                        "kills": 0
                      }
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "actionRecords": []
}
```

</TabItem>
</Tabs>
