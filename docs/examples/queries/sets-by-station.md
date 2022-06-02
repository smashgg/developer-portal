---
id: sets-by-station
title: Sets at Stations
---

In this example we will get the sets in an event at a particular station or set of stations.
Here I have selected the <a href="https://start.gg/tournament/super-smash-bros-ultimate-release-event/events/super-smash-bros-ultimate/brackets/271970/592933/matches" target="_blank">ladder event</a>
Team Calyptus ran for the release of Super Smash Bros. Ultimate.

## Example #1 (Sets at a Station)

The `stationNumbers` filter for sets queries accepts a set of station numbers.
I filtered the results for this to sets at Station 3 in the event.
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
query SetsAtStation($eventId: ID!, $stationNumbers: [Int]) {
  event(id: $eventId) {
    id
    name
    sets(
      page: 1
      perPage: 3
      filters: {
      stationNumbers: $stationNumbers
    }) {
      nodes {
        id
        station {
          id
          number
        }
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
  "eventId": 122755,
  "stationNumbers":[3]
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "event": {
      "id": 122755,
      "name": "Ultimate Ladder",
      "sets": {
        "nodes": [
          {
            "id": 17469475,
            "station": {
              "id": 128144,
              "number": 3
            },
            "slots": [
              {
                "id": "17469475-0",
                "entrant": {
                  "id": 2343797,
                  "name": "halitic"
                }
              },
              {
                "id": "17469475-1",
                "entrant": {
                  "id": 2334450,
                  "name": "BananeMitBart"
                }
              }
            ]
          },
          {
            "id": 17469065,
            "station": {
              "id": 128144,
              "number": 3
            },
            "slots": [
              {
                "id": "17469065-0",
                "entrant": {
                  "id": 2307981,
                  "name": "SoulBlade"
                }
              },
              {
                "id": "17469065-1",
                "entrant": {
                  "id": 2333916,
                  "name": "Lili"
                }
              }
            ]
          },
          {
            "id": 17468927,
            "station": {
              "id": 128144,
              "number": 3
            },
            "slots": [
              {
                "id": "17468927-0",
                "entrant": {
                  "id": 2334450,
                  "name": "BananeMitBart"
                }
              },
              {
                "id": "17468927-1",
                "entrant": {
                  "id": 2295087,
                  "name": "Dr. Wurstpeter"
                }
              }
            ]
          }
        ]
      }
    }
  },
  "extensions": {
    "queryComplexity": 16
  },
  "actionRecords": []
}
```

</TabItem>
</Tabs>
