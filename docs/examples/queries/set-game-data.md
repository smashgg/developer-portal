---
id: set-game-data
title: Set Game Data
---

In this example, we will query for additional game data reported on a set.
This includes character and stage selections, along with score. For smash and other platform fighting games, score is equivalent to stocks remaining.

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
query set($setId: ID!) {
  set(id: $setId) {
    id
    state
    games {
      id
      orderNum
      winnerId
      entrant1Score
      entrant2Score
      stage {
        id
        name
      }
      selections {
        id
        character {
          id
          name
        }
      }
    }
  }
},
{
  "setId": "65089253"
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "set": {
      "id": 65089253,
      "state": 3,
      "games": [
        {
          "id": 18472501,
          "orderNum": 1,
          "winnerId": 14259653,
          "entrant1Score": 0,
          "entrant2Score": 2,
          "stage": {
            "id": 3,
            "name": "Rainbow Cruise"
          },
          "selections": [
            {
              "id": 26467346,
              "character": {
                "id": 3,
                "name": "Donkey Kong"
              }
            },
            {
              "id": 26467347,
              "character": {
                "id": 1,
                "name": "Bowser"
              }
            }
          ]
        },
        {
          "id": 18472502,
          "orderNum": 2,
          "winnerId": 14259653,
          "entrant1Score": 0,
          "entrant2Score": 3,
          "stage": null,
          "selections": [
            {
              "id": 26467348,
              "character": {
                "id": 3,
                "name": "Donkey Kong"
              }
            },
            {
              "id": 26467349,
              "character": {
                "id": 1,
                "name": "Bowser"
              }
            }
          ]
        }
      ]
    }
  },
}
```

</TabItem>
</Tabs>
