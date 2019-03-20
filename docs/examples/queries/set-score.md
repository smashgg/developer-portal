---
id: set-score
title: Set Score
---

In this example, we will query for the current score on a set.
For head-to-head sets, this will include the number of games won by each entrant.

## Example #1 (Completed Head-to-Head Set)

For this completed head-to-head set, one entrant won (ie their placement is '1'),
 and they won 2 games to 0 so their stats for the set include a score of '2'.

<!--DOCUSAURUS_CODE_TABS-->
<!--Request-->

```GraphQL
query set($setId: ID!){
  set(id:$setId){
    id
    slots{
      standing{
        placement
        stats{
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

<!--Response-->

```json
{
  "data": {
    "set": {
      "id": "7794393",
      "slots": [
        {
          "standing": {
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
          "standing": {
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

<!--END_DOCUSAURUS_CODE_TABS-->

## Example #2 (In-Progress Head-to-Head Set)

<!--DOCUSAURUS_CODE_TABS-->
<!--Request-->

```GraphQL
query InProgressSet{
  set(id:"18273807"){
    state
    slots{
      entrant{
        name
      }
      standing{
        stats{
          score{
            value
          }
        }
      }
    }
  }
}
```

<!--Response-->

```GraphQL
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

<!--END_DOCUSAURUS_CODE_TABS-->
