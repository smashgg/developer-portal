---
id: set-score
title: Set Score
---

In this example, we will query for the current score on a set.
For head-to-head sets, this will include the number of games won by each entrant.

## Example #1 (Completed Head-to-Head Set)

For this completed head-to-head set, one entrant won (ie their placement is '1'),
and they won 2 games to 0 so their stats for the set include a score of '2'.

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
query set($setId: ID!) {
  set(id: $setId) {
    id
    slots {
      id
      standing {
        id
        placement
        stats {
          score {
            label
            value
          }
        }
      }
    }
  }
},
{
  "setId": "7794393"
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "set": {
      "id": 7794393,
      "slots": [
        {
          "id": "7794393-0",
          "standing": {
            "id": "placeholder_standing_seeds_5093733_sets_7794393",
            "placement": 1,
            "stats": {
              "score": {
                "label": "Score",
                "value": 2
              }
            }
          }
        },
        {
          "id": "7794393-1",
          "standing": {
            "id": "placeholder_standing_seeds_5093047_sets_7794393",
            "placement": 2,
            "stats": {
              "score": {
                "label": "Score",
                "value": 0
              }
            }
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

## Example #2 (In-Progress Head-to-Head Set)

<Tabs
defaultValue="graphql"
values={[
{ label: 'Request', value: 'graphql', },
{ label: 'Response', value: 'json', },
]
}>
<TabItem value="graphql">

```graphql
query InProgressSet {
  set(id: "18273807") {
    state
    slots {
      entrant {
        name
      }
      standing {
        stats {
          score {
            value
          }
        }
      }
    }
  }
}
```

</TabItem>

<TabItem value="json">

```graphql
{
  "data": {
    "set": {
      "state": 2,
      "slots": [
        {
          "entrant": {
            "name": "Outlaw"
          },
          "standing": {
            "stats": {
              "score": {
                "value": 1
              }
            }
          }
        },
        {
          "entrant": {
            "name": "Raja"
          },
          "standing": {
            "stats": {
              "score": {
                "value": 1
              }
            }
          }
        }
      ]
    }
  },
  "extensions": {
    "queryComplexity": 15
  },
  "actionRecords": []
}
```

</TabItem>
</Tabs>
