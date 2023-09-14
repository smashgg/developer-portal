---
id: report-set
title: Report Set
---

In this example, we will report a set. We will show an example of just updating the winner of a set,
and also an example of reporting full character, stage and score data.
For smash and other platform fighting games, score is equivalent to stocks remaining.

## Example #1: W/L reporting

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
mutation reportSet($setId: ID!, $winnerId: ID!) {
  reportBracketSet(setId: $setId, winnerId: $winnerId) {
    id
    state
  }
},
{
  "setId": 65089253,
  "winnerId": 14259653
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "reportBracketSet": [
      {
        "id": 65089254,
        "state": 1
      },
      {
        "id": 65089260,
        "state": 3
      },
      {
        "id": 65089261,
        "state": 3
      },
      {
        "id": 65089262,
        "state": 1
      },
      {
        "id": 65089253,
        "state": 3
      }
    ]
  }
}
```

</TabItem>
</Tabs>


## Example #2: Full game data reporting

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
mutation reportSet($setId: ID!, $winnerId: ID!, $gameData: [BracketSetGameDataInput]) {
  reportBracketSet(setId: $setId, winnerId: $winnerId, gameData: $gameData) {
    id
    state
  }
},
{
  "setId": 65089253,
  "winnerId": 14259653,
  "gameData": [
    {
      "winnerId": 14259653,
      "gameNum": 1,
      "entrant1Score": 0,
      "entrant2Score": 2,
      "stageId": 3,
      "selections": [
        {
          "entrantId": 14259653,
          "characterId": 3
        },
        {
          "entrantId": 14250090,
          "characterId": 1
        }
      ]
    },
    {
      "winnerId": 14259653,
      "gameNum": 2,
      "entrant1Score": 0,
      "entrant2Score": 3,
      "selections": [
        {
          "entrantId": 14259653,
          "characterId": 3
        },
        {
          "entrantId": 14250090,
          "characterId": 1
        }
      ]
    }
  ]
}
```

</TabItem>

<TabItem value="json">

```json
{
  "data": {
    "reportBracketSet": [
      {
        "id": 65089254,
        "state": 1
      },
      {
        "id": 65089260,
        "state": 3
      },
      {
        "id": 65089261,
        "state": 3
      },
      {
        "id": 65089262,
        "state": 1
      },
      {
        "id": 65089253,
        "state": 3
      }
    ]
  }
}
```

</TabItem>
</Tabs>
