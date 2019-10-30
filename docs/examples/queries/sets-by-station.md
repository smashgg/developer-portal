---
id: sets-by-station
title: Sets at Stations
---

In this example we will get the sets in an event at a particular station or set of stations.
Here I have selected the <a href="https://smash.gg/tournament/super-smash-bros-ultimate-release-event/events/super-smash-bros-ultimate/brackets/271970/592933/matches" target="_blank">ladder event</a>
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
query SetsAtStation($eventId:ID!,$stationNumbers:[Int]){
  event(id: $eventId){
    name
    sets(
      page: 1
      perPage: 3
      filters: {
      stationNumbers: $stationNumbers
    }){
      nodes{
        id
        station{
          number
        }
        slots{
          entrant{
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
      "name": "Ultimate Ladder",
      "sets": {
        "nodes": [
          {
            "id": 17469475,
            "station": {
              "number": 3
            },
            "slots": [
              {
                "entrant": {
                  "name": "halitic"
                }
              },
              {
                "entrant": {
                  "name": "BananeMitBart"
                }
              }
            ]
          },
          {
            "id": 17469065,
            "station": {
              "number": 3
            },
            "slots": [
              {
                "entrant": {
                  "name": "SoulBlade"
                }
              },
              {
                "entrant": {
                  "name": "Lili"
                }
              }
            ]
          },
          {
            "id": 17468927,
            "station": {
              "number": 3
            },
            "slots": [
              {
                "entrant": {
                  "name": "BananeMitBart"
                }
              },
              {
                "entrant": {
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
